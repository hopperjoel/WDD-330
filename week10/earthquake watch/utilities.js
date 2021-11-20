
export function getJSON(url) {
    fetch(url)
    .then((response) => {if (!response.ok) {
        throw Error(response.statusText);
    } else {
        return response.json();
    }
    })
    .catch(error => {
        console.log(error)
    })
}

export const getLocation = function(options) {
    response = new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    })

}

export const getLocationTest = function() {
    if (navigator.geolocation) {
        let position = navigator.geolocation.getCurrentPosition((position) => {
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;
            let string = `&latitude=${latitude}&longitude=${longitude}&maxradiuskm=100`;
            return string;
        })
    } else {
        console.log("Geolocation not supported");
    }
}

export const fThisShiz = function() {
    navigator.geolocation.getCurrentPosition((position) => {
        return displayPosition(position.coords.latitude, position.coords.longitude);
        
    });
    
}

function displayPosition(latitude, longitude) {
    let string = `&latitude=${latitude}&longitude=${longitude}&maxradiuskm=100`;
    return string;
}

export function callbackClosure(i, callback) {
    return function() {
        return callback(i);
    }
}

export function iHateThis() {
    let x = ["f you", "piece of shit"];
    let xy = x.forEach(callbackClosure(item, function(item) {return item + "dude"})
    );  
}