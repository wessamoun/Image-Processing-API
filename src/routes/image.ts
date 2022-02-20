import express from "express";
const routes = express.Router();
import path from "path";
import sharp from "sharp";
const root = path.resolve("");
routes.get("/image", (req: express.Request, res: express.Response): void => {
  const sharpFunction = async function () {
    try {
      await sharp(`${root}/assets/full/${req.query.filename as string}.jpg`)
        .resize(
          Number(req.query.width) as number,
          Number(req.query.height) as number
        )
        .toFile(
          `${root}/assets/thumbs/${req.query.filename as string}-${
            Number(req.query.width) as number
          }-${Number(req.query.height) as number}.jpg`
        );
      res.sendFile(
        `${root}/assets/thumbs/${req.query.filename as string}-${Number(
          req.query.width
        )}-${Number(req.query.height)}.jpg`
      );
    } catch (error) {
      console.log(error);
      res.send("Failed");
    }
  };
  sharpFunction();
});

export default routes;
