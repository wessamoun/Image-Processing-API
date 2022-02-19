import express from "express";
const routes = express.Router();
import sharp from "sharp";
import path from "path";
const root = path.resolve("");
routes.get("/image", (req, res) => {
  const fun = async function () {
    try {
      await sharp(`${root}/assets/full/${req.query.filename as string}.jpg`)
        .resize(Number(req.query.width), Number(req.query.height))
        .toFile(
          `${root}/assets/thumbs/${req.query.filename as string}-${Number(
            req.query.width
          )}-${Number(req.query.height)}.jpg`
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
  fun();
});

export default routes;
