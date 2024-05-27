import { Router } from "express";
import { methods as fileController } from "../controllers/file.controller.js";

const router = Router();

router.post("/files", fileController.postFile);
router.get("/files", fileController.getMyFile);
router.get("/file/:fileName", fileController.findFile);
router.get("/downloadFile/:fileName", fileController.downloadMyFile);

export default router;
