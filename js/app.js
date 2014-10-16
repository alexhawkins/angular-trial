//Wrap entire application in a closure. This is good practice in JavaScript.
//'use strict';
(function() {
    /** @type {module} store module with dependencies store-products */
    var app = angular.module('store', ['store-products']);

    /**
     * CONTROLLERS
     */

    /** STORE CONTROLLER */
    app.controller('StoreController', ['$http', function($http) {
        /** save value of this in var to use in success callback below */
        var store = this;
        /** initialize to an empty array so there are no erros on page load */
        store.products = [];
        /** get json product date from server **/
        $http.get('store-products.json').success(function(data) {
            store.products = data;
        });
    }]);

    /** REVIEW CONTROLLER */
    app.controller('ReviewController', function() {
        this.review = {};

        this.addReview = function(product) {
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = {};
        };
    });

    /**
     * DIRECTIVES (dependent on store-products)
     */
    /** see products.js */
    
})();
