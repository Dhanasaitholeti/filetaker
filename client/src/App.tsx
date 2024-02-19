import RootLayout from "./Layout";
import RouteManager from "./routes/RouteManager";

const App: React.FC = () => {
  return (
    <RootLayout>
      <RouteManager />
    </RootLayout>
  );
};

export default App;
