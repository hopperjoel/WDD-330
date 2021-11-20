
import { getJSON, getLocation, getLocationTest, fThisShiz, iHateThis} from "./utilities.js";

const baseURL = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';

let getStuff = getJSON(baseURL);
let location = getLocationTest();

console.log(iHateThis());

let test3 = fThisShiz();
console.log(fThisShiz);

