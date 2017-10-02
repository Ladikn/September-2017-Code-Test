webpackJsonp([0],{

/***/ 107:
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
webpackEmptyAsyncContext.id = 107;

/***/ }),

/***/ 149:
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
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_data_data__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, dataProvider) {
        this.navCtrl = navCtrl;
        this.dataProvider = dataProvider;
        this.data = dataProvider.getData();
        this.sorter = 1;
        this.viewMore = false;
        this.viewText = 'Load More';
        this.accountArrow = '˄';
    }
    //Reminder for sorting: 1 and 2 are for by account (ascending and descending), 3 and 4 are for by available funds (ascending and descending)
    HomePage.prototype.accountSort = function () {
        if (this.sorter == 1) {
            this.sorter = 2;
            this.accountArrow = '˅';
        }
        else {
            this.sorter = 1;
            this.accountArrow = '˄';
            this.cashArrow = ' ';
        }
    };
    HomePage.prototype.availableSort = function () {
        if (this.sorter == 3) {
            this.sorter = 4;
            this.cashArrow = '˅';
        }
        else {
            this.sorter = 3;
            this.cashArrow = '˄';
            this.accountArrow = ' ';
        }
    };
    HomePage.prototype.viewButton = function () {
        this.viewMore = !this.viewMore;
        if (this.viewMore) {
            this.viewText = 'Load Less';
        }
        else {
            this.viewText = 'Load More';
        }
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Ladikn\Documents\Code\Ionic\SepTest\SepTest\src\pages\home\home.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title text-center>\n            Accounts\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card>\n\n        <ion-card-header>\n            <div class=\'topBar\' id=\'leftButton\' (click)=\'accountSort()\'>Account <span class=\'arrow\'>{{accountArrow}}</span></div>\n            <div class=\'topBar\' id=\'rightButton\' (click)=\'availableSort()\'>\n                <span class=\'arrow\'>{{cashArrow}}</span> Available Cash <br/>\n                <span class=\'grey\'>Today\'s Change</span>\n            </div>\n        </ion-card-header>\n\n        <ion-list>\n            <account *ngFor="let d of data.accounts| accountOrder: sorter; let i = index" [i] = "i" [name]="d.name" [accountNumber]="d.accountNumber" [today]="d.today" [yesterday]="d.yesterday" [viewMore]="viewMore"></account>\n            <div ion-item class=\'viewButton\' (click)=\'viewButton()\'>{{viewText}}</div>\n        </ion-list>\n\n    </ion-card>\n</ion-content>'/*ion-inline-end:"C:\Users\Ladikn\Documents\Code\Ionic\SepTest\SepTest\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__providers_data_data__["a" /* DataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_data_data__["a" /* DataProvider */]) === "function" && _b || Object])
], HomePage);

var _a, _b;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataProvider = (function () {
    function DataProvider() {
        //This provider is what would normally query the server api for the information.  However, only dummy information is being provided.  This can be expanded on indefinately.
        this.data = {
            "accounts": [
                {
                    "name": "IRA",
                    "accountNumber": 7483,
                    "today": 52976.23,
                    "yesterday": 54687.21
                },
                {
                    "name": "IRA",
                    "accountNumber": 9462,
                    "today": 9862523.11,
                    "yesterday": 9767852.36
                },
                {
                    "name": "REG",
                    "accountNumber": 6857,
                    "today": 102.36,
                    "yesterday": 101.58
                },
                {
                    "name": "REG",
                    "accountNumber": 1937,
                    "today": 32596471.20,
                    "yesterday": 32495867.85
                },
                {
                    "name": "AAA",
                    "accountNumber": 7685,
                    "today": 5768.77,
                    "yesterday": 5768.77
                },
                {
                    "name": "BBB",
                    "accountNumber": 1237,
                    "today": 983527.85,
                    "yesterday": 985863.85
                },
                {
                    "name": "CCC",
                    "accountNumber": 9846,
                    "today": 374859.89,
                    "yesterday": 397843.08
                }
            ]
        };
    }
    DataProvider.prototype.getData = function () {
        return this.data;
    };
    return DataProvider;
}());
DataProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], DataProvider);

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(212);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipes_account_order_account_order__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_account_account__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_data_data__ = __webpack_require__(192);
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
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_1__components_account_account__["a" /* AccountComponent */], __WEBPACK_IMPORTED_MODULE_0__pipes_account_order_account_order__["a" /* AccountOrderPipe */]],
        imports: [__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                links: []
            }), __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_4__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_10__providers_data_data__["a" /* DataProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountOrderPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//Pipe applied to the list of accounts loop to handle sorting via account number or available funds
var AccountOrderPipe = (function () {
    function AccountOrderPipe() {
    }
    AccountOrderPipe.prototype.transform = function (accounts, sorter) {
        //sorter 1 = account number, 2 account number descending, 3 is available cash, 4 is available cash descending
        if (sorter == 1) {
            return __WEBPACK_IMPORTED_MODULE_1_lodash__["sortBy"](accounts, ['accountNumber']);
        }
        if (sorter == 2) {
            var temp1 = __WEBPACK_IMPORTED_MODULE_1_lodash__["sortBy"](accounts, ['accountNumber']);
            return __WEBPACK_IMPORTED_MODULE_1_lodash__["reverse"](temp1);
        }
        if (sorter == 3) {
            return __WEBPACK_IMPORTED_MODULE_1_lodash__["sortBy"](accounts, ['today']);
        }
        if (sorter == 4) {
            var temp2 = __WEBPACK_IMPORTED_MODULE_1_lodash__["sortBy"](accounts, ['today']);
            return __WEBPACK_IMPORTED_MODULE_1_lodash__["reverse"](temp2);
        }
    };
    return AccountOrderPipe;
}());
AccountOrderPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'accountOrder',
    })
], AccountOrderPipe);

//# sourceMappingURL=account-order.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccountComponent = (function () {
    function AccountComponent() {
    }
    AccountComponent.prototype.ngAfterViewInit = function () {
        this.difference = this.today - this.yesterday;
        this.percentage = 1 - (this.today / this.yesterday);
        this.setColor();
    };
    AccountComponent.prototype.setColor = function () {
        if (this.percentage > 0) {
            this.color = "#006600";
            this.positive = "+";
        }
        else if (this.percentage < 0) {
            this.color = "#660000";
            this.positive = "";
        }
        else {
            this.color = "#444444";
            this.positive = "+";
        }
    };
    return AccountComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], AccountComponent.prototype, "name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], AccountComponent.prototype, "accountNumber", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], AccountComponent.prototype, "today", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], AccountComponent.prototype, "yesterday", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], AccountComponent.prototype, "viewMore", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], AccountComponent.prototype, "i", void 0);
AccountComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'account',template:/*ion-inline-start:"C:\Users\Ladikn\Documents\Code\Ionic\SepTest\SepTest\src\components\account\account.html"*/'<div class=\'list-item\' ion-item *ngIf=\'i < 3 || viewMore\'>\n  <span class=\'account\'>{{name}} - {{accountNumber}}</span>\n  <span class=\'balance\'>{{today | currency: \'USD\':true:\'3.2-2\'}} <br/>\n  <span [style.color]="color">{{positive}}{{percentage | percent:\'1.2-2\'}}</span></span>\n</div>\n'/*ion-inline-end:"C:\Users\Ladikn\Documents\Code\Ionic\SepTest\SepTest\src\components\account\account.html"*/
    }),
    __metadata("design:paramtypes", [])
], AccountComponent);

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyApp = (function () {
    function MyApp(platform) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Ladikn\Documents\Code\Ionic\SepTest\SepTest\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Ladikn\Documents\Code\Ionic\SepTest\SepTest\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[193]);
//# sourceMappingURL=main.js.map