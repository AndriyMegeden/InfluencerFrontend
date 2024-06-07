import { MongoClient, Db } from 'mongodb';

let dbConnection: Db;

export const connectToDb = (cb: (err?: Error) => void): void => {
  // Рядок підключення до локальної бази даних MongoDB
  MongoClient.connect('mongodb://localhost:27017/influencer-auth')
    .then((client: MongoClient) => {
      dbConnection = client.db();
      cb();
    })
    .catch((err: Error) => {
      console.log(err);
      cb(err);
    });
};

export const getDb = (): Db => dbConnection;
