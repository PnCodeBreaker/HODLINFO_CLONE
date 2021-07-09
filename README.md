# HODLINFO_ClONE
<b> A Repo of HODLINFO_CLONE for Internship Interview Task using Node.js, Express.js and PostgreSQL for backend and simple HTML,CSS in Frontend. </b> <br><br>
<b> Top 10 results from api(https://api.wazirx.com/api/v2/tickers) is fetched in Nodejs express server and name, last, buy, Sell, volume, base_unit of all top 10 results in the   database (PostgreSQL) is stored.  <br> <br>
A route using express to get the above stored data from the database to the frontend is also created. </b>
<br> <br> An Addtional/extra Route is also created to update Data in database(PosgreSQL) by fetching the latest data from Wazirx api. <b> https://hodlinfo-clone-api.herokuapp.com/datafromdb/updatedata </b>  

## Live Deployed FrontEnd Website :- https://hodlinfo-clone.netlify.app/ 
## Live Deployed Backend API :- https://hodlinfo-clone-api.herokuapp.com/datafromdb

## Screenshots :-
<img src="/screenshots/hodlinfoClone.jpg" alt="signup Screenshot" height="auto" width="auto">
<br>
<img src="/screenshots/postgresDatabase.jpg" alt="signup Screenshot" height="auto" width="auto">
 <h3> To Run the Backend Nodejs API in Local machine </h4>
 
```bash
   $ git clone the above repo OR git clone https://github.com/PnCodeBreaker/HODLINFO_ClONE.git
   $ cd to the directory and cd to backend_api
   $ npm install ( node.js must be installed )
   $ if local postgres is to be connected with the api then setup the config accordingly in new Pool() which is in models/db.js otherwise ignore as postgres is hosted in heroku
   $ use nodemon to start the API OR use node index.js
```
