import { Toaster } from "react-hot-toast";
import RootLayout from "./Layout";
import RouteManager from "./routes/RouteManager";

const App: React.FC = () => {
  return (
    <>
      <Toaster />
      <RootLayout>
        <RouteManager />
      </RootLayout>
    </>
  );
};

export default App;
