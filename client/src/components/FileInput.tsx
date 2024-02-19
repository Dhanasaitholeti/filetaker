import axios from "axios";
import { ChangeEvent, DragEvent, useRef, useState } from "react";
import UploadBtns from "./UploadBtns";
import { useNavigate } from "react-router-dom";
import FileData from "./FileData";
import { isValidFile } from "../utils/validFile";
import toast from "react-hot-toast";

const FileInput: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [queryState, setQueryState] = useState({
    data: undefined,
    error: false,
    isLoading: false,
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) isValidFile(file) && setSelectedFile(file);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) isValidFile(file) && setSelectedFile(file);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleSubmit = async () => {
    setQueryState({ data: undefined, error: false, isLoading: true });

    if (!selectedFile) {
      toast.error("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const result = await axios.post(
        "https://filetaker.onrender.com//file/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setQueryState({ data: result.data, error: false, isLoading: false });
      toast.success("File submitted successfully!");
    } catch (error) {
      console.error("Error submitting file:", error);
      setQueryState({ data: undefined, error: true, isLoading: false });
      toast.error("An error occurred while submitting the file.");
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <>
      <div
        className="border-2 border-dashed rounded-lg border-sky-500 min-h-96 text-center w-full max-w-sm lg:max-w-4xl mx-auto"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {selectedFile ? (
          <FileData size={selectedFile.size} name={selectedFile.name} />
        ) : (
          <UploadBtns
            fileInputRef={fileInputRef}
            handleButtonClick={handleButtonClick}
            selectedFile={selectedFile}
            handleFileChange={handleFileChange}
          />
        )}
        <label htmlFor="file" className="hidden">
          File input
        </label>
        <input
          id="file"
          type="file"
          name="file"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
      <button
        onClick={
          queryState.data ? () => navigate("/questionnaire") : handleSubmit
        }
        disabled={!selectedFile}
        className={`mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded max-w-xs w-full mx-auto
        ${queryState.data && "bg-emerald-400"}
        ${
          selectedFile
            ? ""
            : "disabled:bg-gray-400 disabled:text-black cursor-not-allowed"
        }`}
      >
        {queryState.data ? "Generate Questions" : "Submit"}
      </button>
    </>
  );
};

export default FileInput;
