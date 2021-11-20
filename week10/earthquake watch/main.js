
import { getJSON, getLocation} from "./utilities.js";

const baseURL = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';

const position = await getLocation();
console.log(position);
let radius = "100";
const locationString = await getPosition(position);
let quakes = [];

async function getPosition(position, radius) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let string = `&latitude=${latitude}&longitude=${longitude}&maxradiuskm=100`;
    return string;
};

// this function works...but is doing way too much. Large functions like this tend to be brittle and hard to maintain and test
// a function should do one thing and do it well. Not everything!
async function retrieveQuakeInfo(locationString, baseURL) {
    // get location
    const query = baseURL + locationString;
    console.log(query);
    // fetch the data
    quakes = await getJSON(query);
    return quakes;

async function extractQuakeList(quakes) {
    // get the element we will render the list in
    const listElement = document.querySelector("#quakeList");
    // render the list of quakes
    // how did I know to look at quakes.features? I looked at the returned data from the fetch!
    const listHtml = quakes.features.map((quake) => {
        console.log(quake);
      return `${quake.properties.title}${new Date(quake.properties.time)}`;
    });
    console.log(listHtml);
    return listHtml;
  }

async function renderQuakeList(listHtml) {

    listElement.innerHTML = listHtml.join("");
    // attach a listener to watch for a click on the quake. If it sees one then render out the details of the quake
    listElement.addEventListener("click", (event) => {
      console.log(event.currentTarget); // note the difference between target and currentTarget
      console.log(event.target);
      const quakeId = event.target.dataset.id;
      // find the quake with that ID
      const quake = quakes.features.find((item) => item.id === quakeId);
      // render details
      const detailsElement = document.querySelector("#quakeDetails");
      // our quake information is inside of an object called properties. Objects are sometimes hard to iterate over...below is a nice way to convert an object into an array.
      const quakeProperties = Object.entries(quake.properties);
      detailsElement.innerHTML = quakeProperties
        .map((item) => {
          if (item[0] === "time" || item[0] === "updated") {
            return `
  ${item[0]}: ${new Date(item[1])}
  `;
          } else return `
  ${item[0]}: ${item[1]}
  `;
        })
        .join("");
    });
  }
}

const quakeInfo = retrieveQuakeInfo(locationString, baseURL);

const quakeData = () => {
  quakeInfo.then((a) => {
    console.log(a);
    return a;
  });
};

let quakeResolve = quakeData();

extractQuakeList(quakeResolve);
