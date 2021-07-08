import { pool } from "../models/db.js";

export const getCryptoStats = async (req,res) => {
    try {
        const cryptoDataFromDB  = await pool.query("SELECT * from cryptocurrency");
        console.log(cryptoDataFromDB.rows);
        res.json(cryptoDataFromDB.rows);
    } catch (error) {
        return res.status(404).json({message: "Some Error Occured", error: error.message });
    }
}