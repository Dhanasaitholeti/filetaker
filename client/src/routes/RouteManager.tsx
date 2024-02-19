import { Route, Routes } from "react-router-dom";
import HomeScreen from "../pages/HomeScreen";
import NotFoundScreen from "../pages/NotFoundScreen";

const RouteManager = () => {
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
