import Navbar from "./components/Navbar";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="bg-slate-100 h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex flex-col justify-center align-middle">
          {children}
        </main>
      </div>
    </>
  );
};

export default RootLayout;
