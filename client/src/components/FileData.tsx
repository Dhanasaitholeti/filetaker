interface FileDataProps {
  size: number;
  name: string;
}

const FileData: React.FC<FileDataProps> = ({ size, name }) => {
  const sizeInMB: number = size / (1024 * 1024);

  return (
    <div>
      <div className="flex justify-center items-center w-36 aspect-square bg-sky-300 mx-auto rounded-full mt-10">
        {sizeInMB} MB
      </div>
      <p>{name}</p>
    </div>
  );
};

export default FileData;
