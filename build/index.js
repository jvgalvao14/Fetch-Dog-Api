"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Dog_1 = __importDefault(require("./Routes/Dog"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use("/dog", Dog_1.default);
app.use(express_1.default.static(__dirname + "/public"));
app.set("views", __dirname + "/public/views");
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
const port = process.env.PORT || 3003;
app.get("/", (req, res) => {
    res.render("dog.html");
});
app.listen(port, () => {
    console.log("Server running");
});
//implementar sistemas de like
