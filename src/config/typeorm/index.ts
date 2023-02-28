import * as dotenv from 'dotenv';
import { DataSource } from "typeorm";

dotenv.config();

const DATABASE_TYPE = 'mysql';
const DATABASE_PORT = process.env.DATABASE_PORT ? parseInt(process.env.DATABASE_PORT) : 3306 ;
const MIGRATIONS_PATH = String(process.env.MIGRATIONS_PATH);

const AppDataSource = new DataSource({
  type: DATABASE_TYPE,
  host: process.env.DATABASE_HOST,
  port: DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [],
  migrations: [MIGRATIONS_PATH],
  logging: true
});

export default AppDataSource;