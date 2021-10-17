let temperature = 70;
let weather = "sunny";

if (temperature < 60) {
    if (weather === "raining") {
        console.log("It's cold and raining. Time for a heavy rain jacket.");
    } else if (weather === "snowing") {
        console.log("It's cold and snowing. Get out the parka.");
    } else {
        console.log("It's cold and clear. Feels like sweater weather today.");
    }
} else {
    if (weather === "raining") {
        console.log("It's warm but it's raining. A light windbreaker will do.");
    } else if (weather === "sunny") {
        console.log("It's warm and sunny. Tank top it is.");
    } else {
        console.log("It's warm and clear. Regular old T-shirt day.");
    }
}
if(temperature === "cold" &&  windSpeed > 10){
    console.log("Time for the windbreaker!");
}
if(weather === "snowing" || weather === "raining"){
    console.log("Looks like we need to wear boots today.");
}
const cookies = ["chocolate chip", "gingersnap", "oatmeal raisin", "shortbread"];
for (let i = 0; i < cookies.length; i++) {
    console.log(cookies[i]);
}
let number = 10;
while (number < 500) {
    number = number - 1;
}
let investment = 1000;
for(let year = 1; year < 11; year++){
    if(year === 7){
        investment = investment * 0.25;
    }else{
        investment = investment * 1.10;
    }
    console.log("Years: " + year + " Value: " + investment);

}
