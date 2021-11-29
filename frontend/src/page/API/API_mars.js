const API_KEY4 = "I9zujY3IIuLDhoyOpvh5K5PDXayBLskqhHS5klFi" ;
const API_URL4 = "https://api.nasa.gov/insight_weather/?api_key=";

var req4 = new XMLHttpRequest();
async function showMarsInfo(){
    req4.open("GET", API_URL4 + API_KEY4 + "&feedtype=json&ver=1.0");
    req4.send();

    req3.addEventListener("load", function(){
        if(req3.status == 200 && req3.readyState == 4){
          var response3 = JSON.parse(req3.responseText);
          document.getElementById("mylat").textContent = response3.latitude;

        }
    })

}