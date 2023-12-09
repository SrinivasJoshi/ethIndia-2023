import React, { useState } from "react";

const FirstRiddle: React.FC = () => {
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to validate the answer goes here
    // For this example, let's assume the correct answer is 'example'
    const correctAnswer = "example";

    if (answer.toLowerCase() === correctAnswer) {
      alert("Congratulations! You solved the riddle.");
      setSubmitted(true);
    } else {
      alert("Incorrect answer. Please try again.");
      setAnswer("");
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{ color: "white" }}
    >
      <h1 className="text-3xl font-bold mb-4">Riddle Hint</h1>
      <p className="text-center mb-6" style={{ color: "white" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Enter your answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 mb-4"
            style={{ color: "black" }}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      ) : (
        <p className="text-green-500 font-semibold">
          Congratulations! You solved the riddle.
        </p>
      )}
    </div>
  );
};

export default FirstRiddle;
