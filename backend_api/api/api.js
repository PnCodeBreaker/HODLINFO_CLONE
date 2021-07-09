import fetch from "node-fetch";
import { pool } from "../models/db.js";

export const apiFetchCryptoInfo = async () => {

        const DataExistsQuery = await pool.query("SELECT count(*) FROM (SELECT 1 FROM cryptocurrency LIMIT 1) t");
        const DataExists = parseInt(DataExistsQuery.rows[0].count);
    
        if(DataExists === 1)
        {
            await pool.query("TRUNCATE TABLE cryptocurrency RESTART IDENTITY");
            console.log("Old Data Deleted Or Truncated to fetch New Data");
        }

    try {
        const cryptoInfoFetch = await fetch("https://api.wazirx.com/api/v2/tickers");
        const cryptoInfo  = await cryptoInfoFetch.json();
        const cryptoInfoSliced = Object.entries(cryptoInfo).slice(0,10);
        
        for(let i=0; i < cryptoInfoSliced.length; i++)
        {
            try {
                await pool.query("INSERT INTO cryptocurrency (crypto_name, crypto_last, crypto_buy, crypto_sell, crypto_volume, crypto_baseunit) VALUES($1,$2,$3,$4,$5,$6)",
                [   cryptoInfoSliced[i][1].name, 
                    Number(cryptoInfoSliced[i][1].last), 
                    Number(cryptoInfoSliced[i][1].buy),
                    Number(cryptoInfoSliced[i][1].sell),
                    Number(cryptoInfoSliced[i][1].volume),
                    cryptoInfoSliced[i][1].base_unit,    
                ]);
            } catch (error) {
                return console.log(error);
            }
        }
        console.log("Data inserted");
        return 1;
    } catch (error) {
        return console.log(error);
    }

}