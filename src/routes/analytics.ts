import express from "express";
import db from "../db/conn.js";
import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await db.collection("accounts").find({}).toArray();
  console.log(data);
  res.json(data);
});

export default router;
