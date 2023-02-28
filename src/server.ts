import * as dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import AppDataSource from './config/typeorm';
import routes from './routes/index';

dotenv.config();
const server = express();
const SERVER_PORT = process.env.SERVER;
server.use(express.json());


AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
  })
  .catch(err => {
    console.error("Error during Data Source initialization", err)
    process.exit(1)
  });

server.get('/', (request: Request, response: Response) => {
  return response.status(200).json({ message: "Hello world" })
});

server.use(routes);

server.listen(SERVER_PORT, () => console.log(`Server is running on port ${SERVER_PORT}...`));