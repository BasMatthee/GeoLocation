/**
 * @author Bas Matthee <basmatthee@gmail.com>
 */

var GeoLocation;

GeoLocation = (function () {
    'use strict';

    var config = {
        'maximumAge': 100000,
        'timeout': 10000,
        'highAccuracy': true
    };

    /**
     * @param {Object} configuration
     * @constructor
     */
    function GeoLocation(configuration) {
        configuration = configuration || {};

        var objectKeys = Object.keys(configuration);

        for (var i = 0, l = objectKeys.length; i < l; i++) {
            config[objectKeys] = configuration[objectKeys[i]];
        }
    }

    /**
     * @param {Function} successCallback
     * @returns {void}
     */
    GeoLocation.prototype.get = function (successCallback) {
        if (undefined === navigator.geolocation) {
            throw "GeoLocation is not supported by your browser.";
        }

        navigator.geolocation.getCurrentPosition(
            successCallback,
            this.error,
            {
                maximumAge: config['maximumAge'],
                timeout: config['timeout'],
                enableHighAccuracy: config['highAccuracy']
            }
        );
    };

    /**
     * @param {Object} error
     * @returns {void}
     */
    GeoLocation.prototype.error = function (error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                throw 'User denied the request for GeoLocation.';
                break;
            case error.POSITION_UNAVAILABLE:
                throw 'Location information is unavailable.';
                break;
            case error.TIMEOUT:
                throw 'The request to get user location timed out.';
                break;
            default:
                throw 'An unknown error occurred.';
                break;
        }
    };

    return GeoLocation;
})();