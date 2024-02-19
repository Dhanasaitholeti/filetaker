import axios from "axios";
import { useState } from "react";

interface IIndividualQuestion {
  question: string;
}

const IndividualQuestion: React.FC<IIndividualQuestion> = ({ question }) => {
  const [ans, setAns] = useState(null);
  const handleAnswer = async () => {
    try {
      const result = await axios.get("http://localhost:8000/file/question");
      setAns(result.data);
    } catch (error) {
      setAns(null);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center max-w-6xl mx-auto my-8 w-full">
        <p className="font-semibold text-xl">{question}</p>
        {ans ? (
          <p className="font-semibold text-xl">{ans}</p>
        ) : (
          <button
            className="bg-blue-400 px-4 py-2 rounded-md font-semibold text-white"
            onClick={() => handleAnswer()}
          >
            Answer
          </button>
        )}
      </div>
    </>
  );
};

export default IndividualQuestion;
