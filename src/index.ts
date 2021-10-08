import express, { Request, Response } from "express";
import cors from "cors";
import dogRoute from "./Routes/Dog";

const app = express();

app.use(cors());
app.use("/dog", dogRoute);
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/public/views");
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

const port = process.env.PORT || 3003;

app.get("/", (req: Request, res: Response) => {
    res.render("dog.html");
});

app.listen(port, (): void => {
    console.log("Server running");
});

//implementar sistemas de like
