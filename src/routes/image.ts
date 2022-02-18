import express from "express";
const routes = express.Router();

routes.get("/image", (req, res) => {
  res.send("image");
});

export default routes;
