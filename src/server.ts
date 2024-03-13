import express, {Request, Response} from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.listen(process.env.PORT, () => console.log(`Server is running in port ${process.env.PORT}`));

app.get('/', (req: Request, res: Response) => {
    return res.status(200).send('Node example for image builder is working now yeay')
})