import express from "express";
import cors from "cors";
import dogRoute from "./Routes/Dog";

const app = express();

app.use(cors());
app.use("/dog", dogRoute);

app.listen("3000", (): void => {
    console.log("Server running");
});
