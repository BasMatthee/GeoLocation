# GeoLocation
#### HTML5 Javascript GeoLocation
by Bas Matthee

Basic usage:
```
function successCallback(coordinates) {
    console.log(coordinates);
}

var geo = new GeoLocation();
geo.get(successCallback);
```

Usage with your own settings:
```
function successCallback(coordinates) {
    console.log(coordinates);
}

var settings = {
    'timeout': 10000 // Timeout in milliseconds
    'maximumAge': 20000 // Cache lifetime in milliseconds
    'highAccuracy': true // Use high accuracy in positioning
};

var geo = new GeoLocation(settings);
geo.get(successCallback);
```
