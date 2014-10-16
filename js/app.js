//Wrap entire application in a closure. This is good practice in JavaScript.
//'use strict';
(function() {
    /** @type {module} store module with dependencies store-products */
    var app = angular.module('store', ['store-products']);

    /**
     * CONTROLLERS
     */

    /** STORE CONTROLLER */
    app.controller('StoreController', function() {
        this.products = stuff;
    });

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

    /**
     * MOCK DATABASE
     */

    var stuff = [

        {
            name: 'Nike Air Swoosh',
            price: 110.50,
            description: 'A really awesome bar of soap!',
            canPurchase: true,
            soldOut: false,
            shine: 8,
            rarity: 7,
            color: '#CCC',
            faces: 14,
            images: [{
                full: 'img/images-2.jpeg',
                thumb: 'img/images-2.jpeg'
            }],
            reviews: [{
                stars: 5,
                body: 'I love this product!',
                author: 'joe@thomas.com'
            }]
        }, {
            name: 'Bilbo Baggins Dunk',
            price: 55.95,
            description: 'A really cool slide!',
            canPurchase: true,
            soldOut: false,
            shine: 9,
            rarity: 6,
            color: '#EEE',
            faces: 12,
            images: [{
                full: 'img/images-3.jpeg',
                thumb: 'img/images-2.jpeg'
            }],
            reviews: [{
                stars: 3,
                body: 'I love this product!',
                author: 'alex@thomas.com'
            }]
        }, {
            name: 'Retarded Doll Shoes',
            price: 72.95,
            description: 'A really retarded looking doll!',
            canPurchase: true,
            soldOut: false,
            shine: 70,
            rarity: 2,
            color: '#000',
            faces: 6,
            images: [{
                full: 'img/images-2.jpeg',
                thumb: 'img/images-2.jpeg'
            }],
            reviews: [{
                stars: 4,
                body: 'I love this product!',
                author: 'doug@thomas.com'
            }, {
                stars: 1,
                body: 'I hate this product!',
                author: 'hauser@doogie.com'
            }]
        }
    ];

})();
