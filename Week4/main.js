var myCity = [
    {
        "name": "Dubai",
        "country": "UAE",
        "place": "Dubai Mall"
    },
    {
        "name": "Milan",
        "country": "Italy",
        "place": "Domo Di Milan",
    },

    {
        "name": "Abu Dhabi",
        "country": "UAE",
        "place": "Marina Mall",
    }
]

console.log(myCity[1].country);


var cityContainer = document.getElementById("city-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://mohammadnawid.github.io/ma2218-Nawid/Week4/cities1.json');

ourRequest.onload = function() {
var ourData = JSON.parse(ourRequest.responseText);
console.log(ourData[0]);
};
ourRequest.send();
})

function renderHTML(Data){
    var htmlString = "this is a test";
    cityContainer.insertAdjacentHTML('beforeend' , htmlString);
    }