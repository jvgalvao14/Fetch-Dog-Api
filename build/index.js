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
app.listen("3000", () => {
    console.log("Server running");
});
