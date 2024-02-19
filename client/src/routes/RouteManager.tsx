import { Route, Routes } from "react-router-dom";
import HomeScreen from "../pages/HomeScreen";
import NotFoundScreen from "../pages/NotFoundScreen";
import QuestionnaireScreen from "../pages/QuestionnaireScreen";

const RouteManager: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="questionnaire" element={<QuestionnaireScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </>
  );
};

export default RouteManager;
