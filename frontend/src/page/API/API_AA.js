const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://uphere-space1.p.rapidapi.com/satellite/25544/orbit?period=90");
xhr.setRequestHeader("x-rapidapi-host", "uphere-space1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "08951c840cmsh68eed7cd1870c8fp1230b9jsn5dd46e9157bc");

xhr.send(data);