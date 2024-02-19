import { ChangeEvent, RefObject } from "react";
import { FaFile } from "react-icons/fa6";

interface UploadBtnProps {
  fileInputRef: RefObject<HTMLInputElement>;
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleButtonClick: () => void;
  selectedFile: File | null;
}

const UploadBtns: React.FC<UploadBtnProps> = ({
  fileInputRef,
  handleFileChange,
  handleButtonClick,
  selectedFile,
}) => {
  return (
    <>
      <div className="flex justify-center items-center w-36 aspect-square bg-sky-300 mx-auto rounded-full mt-10">
        <FaFile size={64} color="blue" />
      </div>
      <p className="text-2xl">Drop your file here</p>
      <span>----or----</span>
      <div className="mt-10">
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <button
          onClick={handleButtonClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Select File
        </button>
        {selectedFile && (
          <div>
            <p>Selected file: {selectedFile.name}</p>
            <p>File size: {selectedFile.size} bytes</p>
          </div>
        )}
      </div>
    </>
  );
};

export default UploadBtns;
