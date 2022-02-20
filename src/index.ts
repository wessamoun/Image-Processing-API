import express from "express";
import routes from "./routes/image";
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send(
    "Insert image info in the URL to resize .. example: (http://localhost:8000/api/image?filename=fjord&width=600&height=300) "
  );
});
app.use("/api", routes);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

export default app;
