import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();
import productRoutes from "./routes/productRoutes.js";
import productCommentRoutes from "./routes/productCommentRoutes.js";
import articleRoutes from "./routes/articleRoutes.js";
import articleCommentRoutes from "./routes/articleCommentRoutes.js";
import searchRoutes from "./routes/searchRoutes.js";

const corsOptions = {
  origin: ["*"],
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());

app.use("/products", productRoutes);
app.use("/productComments", productCommentRoutes);
app.use("/articles", articleRoutes);
app.use("/search", searchRoutes);
app.use("/articleComments", articleCommentRoutes);

app.listen(process.env.PORT || 3000, () => console.log("Server Started"));
