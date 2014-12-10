'use strict';

angular.module('ngFrench', [])
    .service('ParcelService', function () {
        this.saySomethingFrench = function () {
            console.log('believe really awesome?!!!! Et re-voila! Oops! lol!');
        };
    });