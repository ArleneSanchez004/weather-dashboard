var city = document.querySelector("#city");
var submitBtn = document.querySelector("#submitBtn");
var searchList = document.querySelector("#searchList");

//create element to store city list vars
var listOfCities = [];
$( document ).ready(function() {
$(submitBtn).click(function(event){
    event.preventDefault();
    //create li 
    //var newli = $("<li>").addClass("list-group-item");
    var newlistChild = $("<li></li>").addClass("list-group-item");
    console.log($(city).val());
    newlistChild.text = $(city).val();
    searchList.append(newlistChild.text);
    searchList.innerHTML += ("<br>");
    infoGenerator();
});

function infoGenerator(){
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q=" + $(city).val() + "&appid=a4f825dd15cc236a136cd2fd592c0b68",
        method: "GET"
      }).then(function(response) {
        console.log(response);
        
      });
};

});