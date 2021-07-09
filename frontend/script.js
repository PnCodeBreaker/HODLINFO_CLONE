// for fetching data from database
const api = "https://hodlinfo-clone-api.herokuapp.com/datafromdb";

async function getapi(url) {
    
    const response = await fetch(url);
    let data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
getapi(api);

function hideloader() {
    document.getElementById('loader').style.display = 'none';
}

function show(data) {
    let tab = 
        `<tr>
          <th>#</th>
          <th>name</th>
          <th>Last</th>
          <th>Buy/Sell Price</th>
          <th>Volume</th>
          <th>base_unit</th>
         </tr>`;
        
    
    for (let i=0; i<data.length; i++) {
        tab += `<tr> 
    <td>${data[i].crypto_id} </td>
    <td>${data[i].crypto_name}</td>
    <td>&#x20b9; ${data[i].crypto_last}</td> 
    <td>&#x20b9; ${data[i].crypto_buy} / &#x20b9; ${data[i].crypto_sell}</td>
    <td>${data[i].crypto_volume}</td> 
    <td>${data[i].crypto_baseunit}</td> 
</tr>`;
    }
   
    document.getElementById("crypto").innerHTML = tab;
}

// for updating data into the database in backend which will be updated from the latest wazirx api data.

async function updateData() {
    document.getElementById("crypto").innerHTML = '';
    document.getElementById('loader').style.display = 'block';
    const updateApi = "https://hodlinfo-clone-api.herokuapp.com/datafromdb/updatedata";
    const response = await fetch(updateApi);
    if(response.status === 201)
    {
        console.log("Data Successfully Updated in Database (postgres)");
        window.location.reload();
    }
    else {
        return console.log("unable to Update Database");
    }
}

