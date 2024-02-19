import mongoose, { model } from "mongoose";
const schema = mongoose.Schema;

const fileSchema = new schema({
  name: {
    type: String,
    require: true,
  },
  file: {
    type: Buffer,
    require: true,
  },
  fileSize: {
    type: Number,
    require: true,
  },
});

const fileModel = model("files", fileSchema);

export default fileModel;
