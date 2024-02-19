import toast from "react-hot-toast";

export const isValidFile = (file: File) => {
  if (file) {
    const filename = file.name.toLowerCase();
    const size = file.size;
    if (size > 20 * 1024 * 1024) {
      toast.error("Please select a file smaller than 20 MB.");
      return false;
    }
    const fileExtension = filename.split(".").pop();
    if (fileExtension !== "pdf") {
      toast.error("Please select a PDF file.");
      return false;
    }
  }

  return true;
};
