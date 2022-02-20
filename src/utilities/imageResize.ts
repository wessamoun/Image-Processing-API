import path from "path";
import sharp from "sharp";
import fs from "fs";
import express from "express";

//  to get the absolute path
const root = path.resolve("");

const sharpFunction = async function (
  req: express.Request,
  res: express.Response
) {
  // to use stored images, not regenerating a new image each time.
  if (
    fs.existsSync(
      `${root}/assets/thumbs/${req.query.filename as string}-${Number(
        req.query.width
      )}-${Number(req.query.height)}.jpg`
    )
  ) {
    res.sendFile(
      `${root}/assets/thumbs/${req.query.filename as string}-${Number(
        req.query.width
      )}-${Number(req.query.height)}.jpg`
    );
  } else {
    try {
      // using sharp to resize the images and save the new image
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
      res.send(
        error +
          " ,Image resizing field, please make sure you have inserted valid filename, width and height"
      );
    }
  }
};

export default sharpFunction;
