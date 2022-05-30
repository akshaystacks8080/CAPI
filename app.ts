import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { connect } from 'mongoose';
import { getAssets, getExchanges } from './api';
import { StatusCodes } from 'http-status-codes';
import { assetModel, exchangeModel } from './models/exchange-db';

dotenv.config();

connect(process.env.MONGO_URI as string);

const app: Express = express();
const port = process.env.PORT;

app.get('/api/exchanges', async (req: Request, res: Response) => {
    const data = await getExchanges();
    // store in db
    for (let i = 0; i < data.length; i++) {
        const dataItem = data[i];
        const exc = new exchangeModel(dataItem);
        exc.save();
    }
    res.status(StatusCodes.OK).json(data);
});

app.get('/api/assets', async(req:Request, res:Response)=>{
  const data = await getAssets();
  // store in db
  for (let i = 0; i < data.length; i++) {
      const dataItem = data[i];
      const exc = new assetModel(dataItem);
      exc.save();
  }
  res.status(StatusCodes.OK).json(data);
})

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
