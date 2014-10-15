//Wrap entire application in a closure. This is good practice in JavaScript.
(function() {
    var app = angular.module('store', []);

    //STORE CONTROLLER
    app.controller('StoreController', function() {
        this.products = gems;
    });

    //PANEL CONTROLLER
    app.controller('PanelController', function() {
        this.tab = 1;

        this.selectTab = function(setTab) {
            this.tab = setTab;
        };

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
