const url = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';

export function getJSON(url) {
    fetch(url)
    .then(response => {
        if (response.ok) {
            return response.json();
        } throw Error(response.statusText);
    })
    .catch(function (err) {
        console.log("There was an error: " + err);
    });
}

export const getLocation = function() {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
};