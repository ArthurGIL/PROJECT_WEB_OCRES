// API3 : https://ipgeolocation.io/documentation/astronomy-api.html


// Clé API
const API_key3 = '140b3179a9ed496b917681c7cfd1a1af';
// Url API 
const API_URL3 = "'https://api.ipgeolocation.io/astronomy?apiKey=";


var req3 = new XMLHttpRequest();


async function showloc(){
    req3.open("GET", API_URL3 + API_key3);
    req3.send();

    req3.addEventListener("load", function(){
        if(req3.status == 200 && req3.readyState == 4){
          var response3 = JSON.parse(req3.responseText);
          document.getElementById("mylat").textContent = response3.latitude;
          document.getElementById("mylong").textContent = response3.longitude;
          document.getElementById("myip").textContent = response3.ip;

          document.getElementById("sundis").textContent = response3.sun_distance
          document.getElementById("moondis").textContent = response3.moon_distance
          document.getElementById("sunrise").textContent = response3.sunrise
          document.getElementById("sunset").textContent = response3.sunset
      }
    })
}

