import * as dotenv from 'dotenv';
dotenv.config();

export const DATABASE_URL = process.env.DATABASE_URL;
export const PGSSLMODE = process.env.PGSSLMODE || '';
export const PORT = process.env.PORT || 7890;
