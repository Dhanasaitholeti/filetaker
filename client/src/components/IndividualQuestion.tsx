import axios from "axios";
import { useState } from "react";
import SpinnerIcon from "./Spinner";

interface IIndividualQuestion {
  question: string;
}

const IndividualQuestion: React.FC<IIndividualQuestion> = ({ question }) => {
  const [ans, setAns] = useState<{
    data: null | string;
    error: boolean;
    loading: boolean;
  }>({
    data: null,
    error: false,
    loading: false,
  });
  const handleAnswer = async () => {
    setAns({ data: null, error: false, loading: true });
    try {
      const result = await axios.get("http://localhost:8000/file/question");
      setAns({ data: result.data, loading: false, error: false });
    } catch (error) {
      setAns({ data: null, loading: false, error: true });
    }
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-center max-w-4xl  mx-auto my-8 w-full">
        <p className="font-semibold text-md lg:text-xl">{question}</p>
        {ans.data ? (
          <p className="font-semibold text-md lg:text-xl">
            {"Ans:" + ans.data}
          </p>
        ) : (
          <button
            className="bg-blue-400 px-4 py-2 rounded-md font-semibold text-white"
            onClick={() => handleAnswer()}
          >
            {ans.loading ? <SpinnerIcon /> : "Answer"}
          </button>
        )}
      </div>
    </>
  );
};

export default IndividualQuestion;
