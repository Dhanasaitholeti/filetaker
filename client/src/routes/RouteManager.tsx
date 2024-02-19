import { Route, Routes } from "react-router-dom";
import HomeScreen from "../pages/HomeScreen";
import NotFoundScreen from "../pages/NotFoundScreen";

const RouteManager: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </>
  );
};

export default RouteManager;
