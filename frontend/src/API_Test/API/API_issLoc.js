// API : https://wheretheiss.at/w/developer

// Url API 
const API_URL1 = "https://api.wheretheiss.at/v1/satellites/25544" ;

async function getIss(){
    const response = await fetch(API_URL1);
    const data = await response.json();
    document.getElementById('lon').innerHTML = data.longitude;
    document.getElementById('lat').innerHTML = data.latitude;
}


