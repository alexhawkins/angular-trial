//Wrap entire application in a closure. This is good practice in JavaScript.
(function() {
    var app = angular.module('store', []);

    //STORE CONTROLLER
    app.controller('StoreController', function() {
        this.products = stuff;
    });

    //PANEL CONTROLLER
    app.controller('PanelController', function() {

        /** @type {Number} keeps track of the tab number */
        this.tab = 1;

        /**
         * selects the tab that has been clicked
         * @param  {Number} setTab
         */
        this.selectTab = function(setTab) {
            this.tab = setTab;
        };
        /**
         * checks to see if the tab has been selected
         * @param  {Number}  checkTab
         * @return {Boolean}
         */
        this.isSelected = function(checkTab) {
            return this.tab === checkTab;
        };
    });

    var stuff = [

        {
            name: 'Nike Air Swoosh',
            price: 2.00,
            description: 'A really awesome bar of soap!',
            canPurchase: true,
            soldOut: false,
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
            price: 5.95,
            description: 'A really cool slide!',
            canPurchase: true,
            soldOut: false,
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
            price: 22.95,
            description: 'A really retarded looking doll!',
            canPurchase: true,
            soldOut: false,
            images: [{
                full: 'img/images-2.jpeg',
                thumb: 'img/images-2.jpeg'
            }],
            reviews: [{
                stars: 4,
                body: 'I love this product!',
                author: 'doug@thomas.com'
            }]
        }
    ];

})();
