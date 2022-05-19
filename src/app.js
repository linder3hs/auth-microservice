import express from "express";
import cors from "cors";
import { productRouter, spotifyRouter } from "./components";

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", productRouter);
app.use("/spotify", spotifyRouter);
