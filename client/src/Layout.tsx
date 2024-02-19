import Navbar from "./components/Navbar";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="bg-blue-50 h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow bg-red-300 flex flex-col justify-center align-middle">
          {children}
        </main>
      </div>
    </>
  );
};

export default RootLayout;
