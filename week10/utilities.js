export function getJSON(url) {
    return fetch(url)
    .then(response => {
        if (response.ok) {
            console.log("Entered!");
            return response.json();
        } throw Error(response.statusText);
    })
    .catch(function (err) {
        console.log("There was an error: " + err);
    });
}

export const getLocation = function(options) {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
};