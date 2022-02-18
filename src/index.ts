import express from "express";
import routes from "./routes/image";
const app = express();
const port = 8000;

app.use("/api", routes);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

export default app;
