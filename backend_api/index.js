import express from 'express';
import cors from 'cors';
import { apiFetchCryptoInfo } from './api/api.js';
import cryptostats from './routes/cryptostats.js';


const app = express();

// middleware
app.use(express.json());
app.use(cors());

// To Fetch The Data from API Wazirx and Store it into Database 
apiFetchCryptoInfo();

// routes to get the data from Database to Frontend 
// and also an additional route is also included to update the database with new WazirX api Data.
app.use('/datafromdb', cryptostats);

app.get('/', (req,res) => {
    res.send("Welcome to HODLINFO_CLONE API, go to /datafromdb route to fetch data");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server has Started on port " + PORT);
})