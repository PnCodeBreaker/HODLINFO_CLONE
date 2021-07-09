import { pool } from "../models/db.js";
import { apiFetchCryptoInfo } from '../api/api.js';

export const getCryptoStats = async (req,res) => {
    try {
        const cryptoDataFromDB  = await pool.query("SELECT * from cryptocurrency");
        console.log(cryptoDataFromDB.rows);
        res.json(cryptoDataFromDB.rows);
    } catch (error) {
        return res.status(404).json({message: "Some Error Occured", error: error.message });
    }
}

// additional/extra controller to update Data in Postgres Database fetched from WazirX api

export const updateCryptoStats = async (req,res) => {
    try {
            const updateStats = await apiFetchCryptoInfo();
            console.log(updateStats);
            if(updateStats === 1)
            {
            return res.status(201).json({ message: "Data Successfully fetched from Wazirx api and updated to Database"});
            }
            else {
            return res.status(404).json({ message: "Could not update Data, Some error occured"});
        }
    } catch (error) {
            return res.status(404).json({ message: "Could not update Data, Some error occured", error: error.message});
    }
    
}