 'use strict';

 /**
  *  PRDODUCT DIRECTIVES MODULE
  */

 (function() {
     var app = angular.module('store-products', []);

     /** Product Panels Element Directive w/ Panel Controller */
     app.directive('productPanels', function() {
         return {
             restrict: 'E',
             templateUrl: 'partials/product-panels.html',
             controller: function() {
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

             },
             /** @type {String} create alias for our Controller above to use in html */
             controllerAs: 'panel'
         };
     });

     /** Product Title Element Directive */
     app.directive('productTitle', function() {
         return {
             restrict: 'E', //type of directive E = element
             templateUrl: 'partials/product-title.html' //url of template
         };
     });

     /** Product Description Element Directive  */
     app.directive('productDescription', function() {
         return {
             restrict: 'E',
             templateUrl: 'partials/product-description.html'
         };
     });

     /** Product Reviews Element Directive  */
     app.directive('productReviews', function() {
         return {
             restrict: 'E',
             templateUrl: 'partials/product-reviews.html'
         };
     });

     /** Product Specs Attribute Directive  */
     app.directive('productSpecs', function() {
         return {
             restrict: 'A',
             templateUrl: 'partials/product-specs.html'
         };
     });

 })();
