interface FileDataProps {
  size: number;
  name: string;
}

const FileData: React.FC<FileDataProps> = ({ size, name }) => {
  const sizeInMB: number = parseFloat((size / (1024 * 1024)).toFixed(2));

  return (
    <div>
      <div className="flex justify-center items-center w-36 aspect-square bg-sky-300 mx-auto rounded-full mt-10 text-2xl font-semibold">
        {sizeInMB} MB
      </div>
      <p className="text-lg font-semibold">{name}</p>
    </div>
  );
};

export default FileData;
