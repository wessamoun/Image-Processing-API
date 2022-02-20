import express from "express";
const routes = express.Router();
import sharpFunction from "../utilities/imageResize";

// route endpoint
routes.get("/image", (req: express.Request, res: express.Response): void => {
  sharpFunction(req, res);
});

export default routes;
