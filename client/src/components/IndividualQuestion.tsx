interface IIndividualQuestion {
  question: string;
}

const IndividualQuestion: React.FC<IIndividualQuestion> = ({ question }) => {
  return (
    <>
      <div className="flex justify-between items-center max-w-4xl mx-auto w-full">
        <p className="font-semibold text-xl">{question}</p>
        <button className="bg-blue-400 px-4 py-2 rounded-md font-semibold text-white">
          Answer
        </button>
      </div>
    </>
  );
};

export default IndividualQuestion;
