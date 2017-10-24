webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auction_auction_component__ = __webpack_require__("../../../../../src/app/auction/auction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__results_results_component__ = __webpack_require__("../../../../../src/app/results/results.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'auctions', component: __WEBPACK_IMPORTED_MODULE_3__auction_auction_component__["a" /* AuctionComponent */] },
    { path: 'results', component: __WEBPACK_IMPORTED_MODULE_4__results_results_component__["a" /* ResultsComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{ title }}</h1>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Disaterous Auction';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auction_service__ = __webpack_require__("../../../../../src/app/auction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auction_auction_component__ = __webpack_require__("../../../../../src/app/auction/auction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__results_results_component__ = __webpack_require__("../../../../../src/app/results/results.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__auction_auction_component__["a" /* AuctionComponent */],
            __WEBPACK_IMPORTED_MODULE_10__results_results_component__["a" /* ResultsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_5__auction_service__["a" /* AuctionService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auction.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuctionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuctionService = (function () {
    function AuctionService(_http, _login) {
        this._http = _http;
        this._login = _login;
    }
    AuctionService.prototype.getProducts = function () {
        return this._http.get('/product').map(function (data) { return data.json(); }).toPromise();
    };
    AuctionService.prototype.makeBid = function (productNo, bids) {
        console.log("Bid service is making a bid for product", productNo);
        if (this._login.checkUser()) {
            var payload = {
                product: productNo,
                bids: bids
            };
            return this._http.post('/bid', payload).toPromise();
        }
    };
    AuctionService.prototype.endAuction = function () {
        console.log("Ending auction");
        return this._http.post('/auction/end', { name: this._login.checkUser() }).toPromise();
    };
    AuctionService.prototype.resetAuction = function () {
        var _this = this;
        console.log("Resetting auction");
        this.getProducts().then(function (data) {
            console.log();
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var product = data_1[_i];
                _this.makeBid(product._id, []);
            }
        })
            .catch(function (err) { console.log("We have an error", err); });
        return this._http.get('/auction/reset').toPromise();
    };
    AuctionService.prototype.checkAuction = function () {
        console.log("Checking auction status");
        return this._http.get('/auction/status').map(function (data) { return data.json(); }).toPromise();
    };
    return AuctionService;
}());
AuctionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */]) === "function" && _b || Object])
], AuctionService);

var _a, _b;
//# sourceMappingURL=auction.service.js.map

/***/ }),

/***/ "../../../../../src/app/auction/auction.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auction/auction.component.html":
/***/ (function(module, exports) {

module.exports = "<p class=\"logout\" (click)=\"logout()\">Logout</p>\n<h2>Bid Now!</h2>\n<section class=\"products\">\n  <div class=\"product product1\" *ngFor=\"let product of products; let idx = index\">\n    <div class=\"title outline\">\n      Product {{ idx + 1 }}\n    </div>\n    <form>\n      <input type=\"text\" name=\"ammount\" [(ngModel)]=\"bidFields[idx]\">\n      <input class=\"outline\" type=\"submit\" value=\"BID\" (click)=\"processBid(idx)\">\n    </form>\n    <p *ngIf=\"badBidFields[idx]\" class=\"error\">Your bid must be higher than existing bids!</p>\n    <div class=\"current_status\">\n      <h3>Current Bids:</h3>\n      <ul class=\"bids outline\">\n        <ng-container *ngIf=\"product.bids[0]\">\n          <li *ngFor=\"let bid of product.bids\">\n            {{bid.name}}: £{{bid.ammount}}\n          </li>\n        </ng-container>\n        <ng-container *ngIf=\"!product.bids[0]\">\n          <li>No Bids Yet</li>\n        </ng-container>\n      </ul>\n      <form>\n        <input class=\"outline search\" type=\"text\" name=\"search\" placeholder=\"search\" [(ngModel)]=\"searchFields[idx]\">\n      </form>\n    </div>\n  </div>\n</section>\n\n<button class=\"end_bidding outline\" (click)=\"processEnd()\">End Bidding</button>"

/***/ }),

/***/ "../../../../../src/app/auction/auction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuctionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auction_service__ = __webpack_require__("../../../../../src/app/auction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuctionComponent = (function () {
    function AuctionComponent(_login, _router, _auction) {
        this._login = _login;
        this._router = _router;
        this._auction = _auction;
        this.searchFields = [];
        this.bidFields = [];
        this.badBidFields = [false, false, false];
    }
    AuctionComponent.prototype.ngOnInit = function () {
        console.log("Made it to the auction");
        if (this._login.checkUser() === false) {
            this._router.navigate(['/']);
        }
        this.isOver();
        this.getProducts();
    };
    AuctionComponent.prototype.isOver = function () {
        var _this = this;
        this._auction.checkAuction()
            .then(function (data) {
            console.log("Got auction data back", data);
            if (data.over) {
                console.log("Auction is over");
                _this._router.navigate(['/results']);
            }
        })
            .catch(function (err) { console.log("No time for this shit! Auction check failed", err); });
    };
    AuctionComponent.prototype.getProducts = function () {
        var _this = this;
        this._auction.getProducts()
            .then(function (data) {
            console.log("We have the products", data);
            _this.products = data;
        })
            .catch(function (err) {
            console.log("Something went wrong loading products to auction", err);
        });
    };
    AuctionComponent.prototype.logout = function () {
        this._login.unsetUser();
        this._router.navigate(['/']);
    };
    AuctionComponent.prototype.processBid = function (productNum) {
        var _this = this;
        console.log("Bid placed for product", productNum);
        var newBidNum = this.bidFields[productNum];
        if (this.isHigher(productNum, newBidNum)) {
            this.badBidFields[productNum] = false;
            var newBidObj = {
                name: this._login.checkUser(),
                ammount: newBidNum
            };
            console.log("New bid object created", newBidObj);
            var newBids = this.products[productNum].bids;
            if (newBids === undefined) {
                newBids = [newBidObj];
            }
            else {
                newBids.push(newBidObj);
            }
            console.log("New list of bids generated", newBids);
            this._auction.makeBid(this.products[productNum]._id, newBids)
                .then(function (data) {
                console.log("We made a bid!");
                _this.getProducts();
            })
                .catch(function (err) {
                console.log("Bidding went wrong", err);
            });
        }
        else {
            this.badBidFields[productNum] = true;
        }
    };
    AuctionComponent.prototype.isHigher = function (num, bid) {
        var numBids = this.products[num].bids.length;
        if (numBids == 0) {
            console.log("Bid is good");
            return true;
        }
        else if (bid > this.products[num].bids[numBids - 1].ammount) {
            console.log("Bid is good");
            return true;
        }
        console.log("Bid is bad", bid, this.products[num].bids[numBids - 1]);
        return false;
    };
    AuctionComponent.prototype.processEnd = function () {
        var allBidded = true;
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var product = _a[_i];
            if (product.bids.length == 0) {
                allBidded = false;
            }
        }
        if (allBidded) {
            this._auction.endAuction()
                .then(function (data) { console.log("Ended auction", data); })
                .catch(function (err) { console.log("Auction attempted to end auction, fail", err); });
            this._router.navigate(['/results']);
        }
        else {
            alert("Cannot end bidding!\nSome items still have no bids");
        }
    };
    return AuctionComponent;
}());
AuctionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-auction',
        template: __webpack_require__("../../../../../src/app/auction/auction.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auction/auction.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__auction_service__["a" /* AuctionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auction_service__["a" /* AuctionService */]) === "function" && _c || Object])
], AuctionComponent);

var _a, _b, _c;
//# sourceMappingURL=auction.component.js.map

/***/ }),

/***/ "../../../../../src/app/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = (function () {
    function LoginService(_router) {
        var _this = this;
        this._router = _router;
        this.storeRef = "ohdearme_time";
        this.setUser = function (newName) {
            console.log("Our user is", newName);
            localStorage.setItem(_this.storeRef, newName);
        };
        this.unsetUser = function () {
            localStorage.clear();
        };
        this.checkUser = function () {
            var existingUser = localStorage.getItem(_this.storeRef);
            if (existingUser) {
                return existingUser;
            }
            return false;
        };
    }
    return LoginService;
}());
LoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], LoginService);

var _a;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Please Log In</h2>\n<form>\n  <label>\n    <input type=\"text\" name=\"name\" [(ngModel)]=\"name\">\n    <button (click)=\"processLogin()\">Let's go!</button>\n  </label>\n</form>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(_login, _router) {
        this._login = _login;
        this._router = _router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.processLogin = function () {
        console.log('Trying to log in', this.name);
        this._login.setUser(this.name);
        this._router.navigate(['/auctions']);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/results/results.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/results/results.component.html":
/***/ (function(module, exports) {

module.exports = "<p class=\"logout\" (click)=\"logout()\">Logout</p>\n<h2>{{ ender }} ended the auction</h2>\n<p>Below are the highest bidders per product!</p>\n<ul>\n  <li *ngFor=\"let product of products; let idx = index\" class=\"result_product\">\n    <div class=\"product_title\">\n      <h3>Product {{ idx + 1 }}</h3>\n    </div>\n      <h4>{{ product.winner.name }}</h4>\n      £{{ product.winner.ammount }}\n  </li>\n</ul>\n<button class=\"outline\" (click)=\"beginAgain()\">Go Again</button>"

/***/ }),

/***/ "../../../../../src/app/results/results.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auction_service__ = __webpack_require__("../../../../../src/app/auction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ResultsComponent = (function () {
    function ResultsComponent(_login, _router, _auction) {
        this._login = _login;
        this._router = _router;
        this._auction = _auction;
    }
    ResultsComponent.prototype.ngOnInit = function () {
        console.log("Made it to the auction");
        if (this._login.checkUser() === false) {
            this._router.navigate(['/']);
        }
        this.isOver();
        this.getProducts();
    };
    ResultsComponent.prototype.getProducts = function () {
        var _this = this;
        this._auction.getProducts()
            .then(function (data) {
            console.log("We have the products", data);
            _this.products = data;
            _this.getWinner();
        })
            .catch(function (err) {
            console.log("Something went wrong loading products to auction", err);
        });
    };
    ResultsComponent.prototype.logout = function () {
        this._login.unsetUser();
        this._router.navigate(['/']);
    };
    ResultsComponent.prototype.isOver = function () {
        var _this = this;
        this._auction.checkAuction()
            .then(function (data) {
            console.log("Got auction data back", data);
            if (!data.over) {
                console.log("Auction is not yet over");
                _this._router.navigate(['/auctions']);
            }
            else {
                _this.ender = data.name;
            }
        })
            .catch(function (err) { console.log("No time for this shit! Auction check failed", err); });
    };
    ResultsComponent.prototype.getWinner = function () {
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var product = _a[_i];
            product.winner = product.bids[product.bids.length - 1];
        }
    };
    ResultsComponent.prototype.beginAgain = function () {
        var _this = this;
        this._auction.resetAuction()
            .then(function (data) {
            _this._router.navigate(['/auctions']);
        })
            .catch(function (err) {
            console.log("Something went wrong", err);
        });
    };
    return ResultsComponent;
}());
ResultsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-results',
        template: __webpack_require__("../../../../../src/app/results/results.component.html"),
        styles: [__webpack_require__("../../../../../src/app/results/results.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__auction_service__["a" /* AuctionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auction_service__["a" /* AuctionService */]) === "function" && _c || Object])
], ResultsComponent);

var _a, _b, _c;
//# sourceMappingURL=results.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map