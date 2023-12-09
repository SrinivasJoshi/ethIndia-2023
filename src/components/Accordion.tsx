import  { FC, useEffect, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useContractWrite, useWaitForTransaction } from "wagmi";
import { contractABI, contractAddress } from "../utils/contractInfo";
import { toast } from "react-toastify";
import { useNetwork } from "wagmi";

interface AccordionProps {
  isOpen: boolean;
  onToggle: () => void;
  sectionIndex: number;
  content: string;
  participantLevel : number;
}

const Accordion: FC<AccordionProps> = ({
  isOpen,
  onToggle,
  sectionIndex,
  content,
  participantLevel
}) => {
  const [solution, setSolution] = useState("");
  const {chain} = useNetwork();

  const { write, data ,error} = useContractWrite({
    address: chain?.id ===421614 ? contractAddress[0] :contractAddress[1],
    abi: contractABI,
    functionName: "submitSolution",
    args: [BigInt(sectionIndex),solution],
  });

  function trimMessage(message:string) {
    const contractCallIndex = message.indexOf('Contract Call');
    
    if (contractCallIndex !== -1) {
        return message.substring(0, contractCallIndex).trim();
    } else {
        return message.trim();
    }
  } 

  const { isLoading,isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setSolution(e.target.value);
  }

  
  const submitForm = () => {
    if(participantLevel >sectionIndex){
      toast.error('Already cleared this level!');
      return;
    }
    write?.();
  };

  useEffect(() => {
    if (error) {
      toast.error(trimMessage(error.message));
    }
  }, [error]);

  useEffect(() => {
    if(isSuccess){
      toast.success("You cleared this level");
    }
  }, [isSuccess]);

  return (
    <div className="w-[800px] mx-auto my-8 ">
      <div className="border border-gray-300 rounded-xl p-4 mb-4 ">
        <div
          className="flex items-center justify-between cursor-pointer text-secondary font-semibold"
          onClick={onToggle}
        >
          <div className="font-Handjet text-2xl">Puzzle {sectionIndex + 1}</div>
          {isOpen ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
        </div>
        {isOpen && (
          <div className="mt-4">
            <p className="text-gray-100">{content}</p>
            <form className="mt-4">
              <label className="block text-sm font-semibold text-gray-100 mb-1">
                Answer:
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 mb-4 rounded-sm"
                placeholder="Type Answer"
                onChange={handleInputChange}
              />

              {/* Submit button */}
              <button
                type="button"
                className="bg-secondary text-white p-2 rounded"
                onClick={submitForm}
                disabled={isLoading}
              >
                {isLoading ? 'Loading...' : 'Submit'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
