import { FC, useState } from "react";
import Accordion from "./Accordion";

import { useAccount, useContractRead, useNetwork } from "wagmi";
import { contractABI, contractAddress } from "../utils/contractInfo";

const AccordionContainer: FC = () => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(
    null,
  );

  const { address } = useAccount();
  const {chain} = useNetwork();
  const { data: level } = useContractRead({
    address: chain?.id ===421614 ? contractAddress[0] :contractAddress[1],
    abi: contractABI,
    functionName: "participantLevels",
    args: [address ? address : "0x"],
    watch:true
  });
  const toggleAccordion = (index: number) => {
    setOpenAccordionIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // Array of content data for each accordion
  const accordionData = [
    {
      content:
        "Can you hear this image ? Image hash(QmbxrL8e9vpGeb9frrCEQgcRSDvrYchDq8fyyb4n6BwU4J) on IPFS",
    },
    {
      content:
        "At the dawn of a decentralized era, a digital whisper echoed, 'That's when it all started.' Seek the origin point, the cryptic fingerprint.",
    },
    {
      content: "Name of the character dancing in this song  (small case)",
    },

    {
      content:
        "Strange Amazon product: not a Jedi's weapon, just fancy utensils. Lights up for meals. What's this odd discovery?(all smalle no space)",
    },
    {
      content:
        "In pixels' regular party, a secret hides shy. No alarms, no cries, just a quiet ally. It's steganography's game, where data learns to fly.(Start from here QmTpxRJHHCR96JkVbNJsWHWFu7ssf9Pyk2LQKMsv8LQeFA it's IPFS hash)",
    },
  ];

  return (
    <div>
      {typeof level !== 'undefined' && (
        <p className="text-white text-xl font-semibold mt-10 text-center">
          Your are currently at level: {Number(level) + 1}
        </p>
      )}
      {accordionData.map((data, index) => (
        <Accordion
          key={index}
          isOpen={index === openAccordionIndex}
          onToggle={() => toggleAccordion(index)}
          sectionIndex={index}
          content={data.content}
          participantLevel={Number(level)}
        />
      ))}
    </div>
  );
};

export default AccordionContainer;
