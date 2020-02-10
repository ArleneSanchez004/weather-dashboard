var city = document.querySelector("#city");
var submitBtn = document.querySelector("#submitBtn");
var searchList = document.querySelector("#searchList");

//create element to store city list vars
var listOfCities = [];

$(submitBtn).click(function(event){
    event.preventDefault();
    //create li 
    var newli = $("<li>").addClass("list-group-item");
    console.log($(city).val());
    console.log(newli);
    newli.text = $(city).val();
    searchList.prepend(newli.text);
    searchList.innerHTML += ("<br>");
   // newli.push(listOfCities);

});