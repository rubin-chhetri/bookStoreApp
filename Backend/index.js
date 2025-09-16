import express from "express";
import dotenv from "dotenv";
import dbConnect from "./database/dbconnect.js";
import bookRouter from "./route/book.route.js";
import userRouter from "./route/user.route.js";
import cors from "cors";

const app = express();

dotenv.config();
const PORT=process.env.PORT||3001;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

dbConnect();
app.use(express.json());
app.use(cors());
//defining routes
app.use("/api/v1/book", bookRouter);
app.use("/api/v1/user", userRouter);


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})