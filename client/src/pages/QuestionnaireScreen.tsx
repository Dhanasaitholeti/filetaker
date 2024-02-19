import IndividualQuestion from "../components/IndividualQuestion";
import { dummyQuestions } from "../resources/dummyQuestions";

const QuestionnaireScreen = () => {
  return (
    <div>
      {dummyQuestions.map((question) => (
        <IndividualQuestion question={question} key={question} />
      ))}
    </div>
  );
};

export default QuestionnaireScreen;
