// API : https://wheretheiss.at/w/developer

// Clé API
const API_key2 = 'I9zujY3IIuLDhoyOpvh5K5PDXayBLskqhHS5klFi';
// Url API 
const API_URL2 = "https://api.nasa.gov/planetary/apod?api_key=";

var req = new XMLHttpRequest();


function showApod(){
    req.open("GET", API_URL2 + API_key2);
    req.send();

    req.addEventListener("load", function(){
        if(req.status == 200 && req.readyState == 4){
          var response = JSON.parse(req.responseText);
          document.getElementById("title").textContent = response.title;
          document.getElementById("date").textContent = response.date;
          document.getElementById("pic").src = response.hdurl;
        }
    })
}

