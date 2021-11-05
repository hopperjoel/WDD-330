const container = document.getElementById("persons");
let pageLink = "https://swapi.dev/api/people/?page=1";

//Onload, displays the names on the first page
window.onload = function () {
  fetchData(pageLink);
};

//fetches and displays data and buttons on html page
function fetchData(dataLink) {
  fetch(dataLink)
    .then((list) => list.json())
    .then(
      (data) =>
        (container.innerHTML = displayData(data) + "<br>" + displayBtns(data))
    );
}

//grabs names from object and returns string of names
function displayData(obj) {
  console.log(obj);
  let people = [];
  let objSize = obj.results.length;

  for (let i = 0; i < objSize; i++) {
    people.push(
      "<a class='personInfo()'>" + JSON.stringify(obj.results[i].name) + "</a>"
    );
  }

  return people.join(", <br>");
}

//displays buttons with link to the next or pervious pages
function displayBtns(obj) {
  let nextLink = JSON.stringify(obj.next);
  let preLink = JSON.stringify(obj.previous);

  let preBtn = "<button onclick=fetchData(" + preLink + ")>Previous</button>";
  let nextBtn = "<button onclick=fetchData(" + nextLink + ")>Next</button>";

  return preBtn + " " + nextBtn;
}
