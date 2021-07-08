CREATE DATABASE cryptostats;

CREATE TABLE cryptocurrency(
    crypto_id SERIAL PRIMARY KEY,
    crypto_name VARCHAR(50) NOT NULL,
    crypto_last numeric NOT NULL,
    crypto_buy  numeric NOT NULL, 
    crypto_sell numeric NOT NULL,
    crypto_volume numeric NOT NULL,
    crypto_baseunit VARCHAR(50) NOT NULL
);