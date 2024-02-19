import axios from "axios";
import { ChangeEvent, DragEvent, useState } from "react";

const FileInput: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setSelectedFile(file);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      alert("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      await axios.post("http://localhost:8000/file/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("File submitted successfully!");
    } catch (error) {
      console.error("Error submitting file:", error);
      alert("An error occurred while submitting the file.");
    }
  };

  return (
    <>
      <div
        className="border-2 border-dashed border-sky-500 p-8 text-center w-full max-w-lg mx-auto"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {selectedFile ? (
          <div>
            <p>Selected file: {selectedFile.name}</p>
            <p>File size: {selectedFile.size} bytes</p>
          </div>
        ) : (
          <p className="text-2xl">Select your file</p>
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
        onClick={handleSubmit}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </>
  );
};

export default FileInput;
