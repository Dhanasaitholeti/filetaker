const Navbar: React.FC = () => {
  return (
    <>
      <div className="p-4 border-b shadow-md border-b-gray-300 flex justify-between px-4 lg:px-36">
        <h1 className="text-2xl font-bold">FileTaker</h1>
        <div>
          <button className="bg-blue-500 text-white px-2 py-1">login</button>
          <button className="bg-white text-blue-500 px-2 py-1">signup</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
