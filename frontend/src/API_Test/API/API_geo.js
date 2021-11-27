// API : https://ipgeolocation.io/documentation/astronomy-api.html

// Clé API
const API_key3 = '140b3179a9ed496b917681c7cfd1a1af';
// Url API 
const API_URL3 = "'https://api.ipgeolocation.io/astronomy?apiKey=";


&lat=-27.4748&long=153.017

var req3 = new XMLHttpRequest();


function getloc(){
    req3.open("GET", API_URL3 + API_key3);
    req3.send();

    req3.addEventListener("load", function(){
        if(req3.status == 200 && req3.readyState == 4){
          var response = JSON.parse(req3.responseText);
        document.getElementById("title").textContent = response.title;
        document.getElementById("date").textContent = response.date;
        document.getElementById("pic").src = response.hdurl;
      }
    })
}

