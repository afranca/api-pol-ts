import express, { NextFunction, Request, Response } from 'express';
import { json } from 'body-parser';
import apiRoutes from './routes/api-routes';

const app = express();

// parse body of any incoming requests
app.use(json());

app.use('/api', apiRoutes);

// basic error handling
app.use((err: Error, req: Request, res: Response, next: NextFunction)=>{
    res.status(500).json({message: err.message});
});

app.listen(3000);