export const isValidFile = (file: File) => {
  if (file) {
    const filename = file.name.toLowerCase();
    const size = file.size;
    if (size > 20 * 1024 * 1024) {
      alert("Please select a file smaller than 10 MB.");
      return false;
    }
    const fileExtension = filename.split(".").pop();
    if (fileExtension !== "pdf") {
      alert("Please select a PDF file.");
      return false;
    }
  }

  return true;
};
