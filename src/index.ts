import express, { Express } from "express";
import cors from "cors";
import "./loadEnvironment.js";
import analytics from "./routes/analytics.js";

const PORT = process.env.PORT || 5050;

const app: Express = express();

app.use(cors());
app.use(express.json());

app.use("/analytics", analytics);

app.get("/", (req, res) => {
  res.send("Hello hello");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
