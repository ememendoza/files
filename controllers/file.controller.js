import getConnection from "../database/database.js";
import File from "../models/file.js";
import {
  uploadFile,
  getFiles,
  getFile,
  downloadFile,
  getFileURL,
} from "../config/s3.js";

const postFile = async (req, res) => {
  const { name, size } = req.files.file;

  const file = new File(name, size);
  const connection = await getConnection();
  const dbResult = await connection.query("INSERT INTO File SET ?", file);
  const s3Result = await uploadFile(req.files.file);

  res.json({
    "Database Response": dbResult,
    "Bucket Response": s3Result,
  });
};

const getMyFile = async (req, res) => {
  const result = await getFiles();
  res.json(result.Contents);
};

const findFile = async (req, res) => {
  const result = await getFileURL(req.params.fileName);
  res.json({
    url: result,
  });
};

const downloadFile = async (req, res) => {
  await downloadFile(req.params.fileName);
  res.json({
    message: "File Downloaded",
  });
};

export const methods = {
  postFile,
  getMyFile,
  findFile,
  downloadFile,
};
