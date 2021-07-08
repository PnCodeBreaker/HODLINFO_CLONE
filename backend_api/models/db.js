import pkg from 'pg'
const { Pool }  = pkg;


export const pool = new Pool({
    host: process.env.DATABASE_URL,
    ssl: true,
});