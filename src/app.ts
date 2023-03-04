import express, { Request, Response } from "express";
import config from "../config/index";


const app = express();

// Parse JSON 
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    req
    res.json({
        message: "Hello, this is Node.js, Express.js and TypeScript."
    })
})

const port = config.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})