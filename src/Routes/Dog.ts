import express, { Request, Response } from "express";
import axios from "axios";

const Router = express.Router();

Router.get("/", async (req: Request, res: Response) => {
    const response = await axios("https://dog.ceo/api/breeds/image/random");

    res.json(response.data);
});

Router.get("/breed", async (req: Request, res: Response) => {
    const breed = req.query.breed;
    const response = await axios(
        `https://dog.ceo/api/breed/${breed}/images/random`
    );

    res.json(response.data);
});

export default Router;
