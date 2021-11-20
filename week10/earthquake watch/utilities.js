export function getJSON(url) {
    return fetch(url)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        } else {
          return response.json();
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  export const getLocation = function(options) {
    return new Promise(function(resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  };

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





