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

  return (
    <>
      <div
        className="border-2 border-dashed border-black p-4 text-center max-w-lg"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {selectedFile ? (
          <div>
            <p>Selected file: {selectedFile.name}</p>
            <p>File size: {selectedFile.size} bytes</p>
          </div>
        ) : (
          <p>Select your file</p>
        )}
        <label htmlFor="file" className="hidden">
          File input
        </label>
        <input
          id="file"
          type="file"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
    </>
  );
};

export default FileInput;
