// API : https://github.com/nasa/apod-api

// Clé API
const API_key2 = 'I9zujY3IIuLDhoyOpvh5K5PDXayBLskqhHS5klFi';
// Url API 
const API_URL2 = "https://api.nasa.gov/planetary/apod?api_key=";

var req2 = new XMLHttpRequest();


async function showApod(){
    req2.open("GET", API_URL2 + API_key2);
    req2.send();

    req2.addEventListener("load", function(){
        if(req2.status == 200 && req2.readyState == 4){
          var response = JSON.parse(req2.responseText);
        document.getElementById("title").textContent = response.title;
        document.getElementById("date").textContent = response.date;
        document.getElementById("pic").src = response.hdurl;
      }
    })
}


