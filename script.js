var city = document.querySelector("#city");
var submitBtn = document.querySelector("#submitBtn");
var searchList = document.querySelector("#searchList");
var displayWindow = document.querySelector("#displayWindow");

//create element to store city list vars
var listOfCities = [];
$( document ).ready(function() {
$(submitBtn).click(function(event){
    event.preventDefault();
    infoGenerator();
});

function infoGenerator(){
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q=" + $(city).val() + "&appid=a4f825dd15cc236a136cd2fd592c0b68",
        method: "GET"
      }).then(function(response) {
        //console.log(response); 

        //create li element
        var newli = $("<li></li>");
        newli.addClass("list-group-item");
        console.log($(city).val());
        newli.text = $(city).val();
        searchList.append(newli.text);
        searchList.innerHTML += ("<br>");

        //pull pertinent info and store in vars
        console.log("weather: " + response.weather[0].main);
        console.log("temp: " + response.main.temp);
        console.log("humidity: " + response.main.humidity);
        console.log("wind speed: " + response.wind.speed);

        //display in display window
        $(displayWindow).prepend("<h3>Wind Speed: "+ response.wind.speed +"</h3>");
        $(displayWindow).prepend("<h3>Humidity: "+ response.main.humidity +"</h3>");
        $(displayWindow).prepend("<h3>Temperature: "+ response.main.temp +"</h3>");
        $(displayWindow).prepend("<h3>Weather: "+ response.weather[0].main +"</h3>");
        $(displayWindow).prepend("<h1>"+ $(city).val() +"</h1>");
        
        
      });
};

});