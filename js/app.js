

//Wrap entire application in a closure. This is good practice in JavaScript.
(function() {
    var app = angular.module('store', []);

    //STORE CONTROLLER
    app.controller('StoreController', function() {
        this.products = gems;
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

    var gems = [

        {
            name: 'Dodecahedron',
            price: 2.00,
            description: 'A really awesome bar of soap!',
            canPurchase: true,
            soldOut: false,
            images: [{
                full: 'img/images-2.jpeg',
                thumb: 'img/images-2.jpeg'
            }]
        }, {
            name: 'Pentagon',
            price: 5.95,
            description: 'A really cool slide!',
            canPurchase: true,
            soldOut: false,
            images: [{
                full: 'img/images-3.jpeg',
                thumb: 'img/images-2.jpeg'
            }]
        }, {
            name: 'Retarded Dolls',
            price: 22.95,
            description: 'A really retarded looking doll!',
            canPurchase: true,
            soldOut: false,
            images: [{
                full: 'img/images-2.jpeg',
                thumb: 'img/images-2.jpeg'
            }]
        }
    ];

})();
