webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GaleriaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__historiador_historiador__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GaleriaPage = /** @class */ (function () {
    function GaleriaPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.historiadorPage = __WEBPACK_IMPORTED_MODULE_2__historiador_historiador__["a" /* HistoriadorPage */];
        this.slides = [
            {
                image: "assets/imgs/galeria/galeria-1.png"
            },
            {
                image: "assets/imgs/galeria/galeria-2.png"
            },
            {
                image: "assets/imgs/galeria/galeria-3.png"
            },
            {
                image: "assets/imgs/galeria/galeria-4.png"
            },
            {
                image: "assets/imgs/galeria/galeria-5.png"
            },
            {
                image: "assets/imgs/galeria/galeria-6.png"
            },
            {
                image: "assets/imgs/galeria/galeria-7.png"
            },
            {
                image: "assets/imgs/galeria/galeria-8.png"
            }
        ];
    }
    GaleriaPage.prototype.voltarPaginaHistoriador = function () {
        this.navCtrl.setRoot(this.historiadorPage);
    };
    GaleriaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-galeria',template:/*ion-inline-start:"D:\smdesign\src\pages\galeria\galeria.html"*/'<ion-content>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n\n\n      <ion-col col-1>\n\n        <div>\n\n          <button (click)="voltarPaginaHistoriador()" style="background: transparent;">\n\n            <ion-icon class="botaoVoltar"></ion-icon>\n\n          </button>\n\n          <span class="titulo-galeria">Galeria</span>\n\n        </div>\n\n      </ion-col>\n\n\n\n      <ion-col col-11>\n\n        <ion-slides pager>\n\n          <ion-slide *ngFor="let slide of slides">\n\n            <img [src]="slide.image" class="slide-image" />\n\n          </ion-slide>\n\n        </ion-slides>\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"D:\smdesign\src\pages\galeria\galeria.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], GaleriaPage);
    return GaleriaPage;
}());

//# sourceMappingURL=galeria.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreditosPage = /** @class */ (function () {
    function CreditosPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.homePage = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
    }
    CreditosPage.prototype.voltarPaginaInicial = function () {
        this.navCtrl.push(this.homePage);
    };
    CreditosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-creditos',template:/*ion-inline-start:"D:\smdesign\src\pages\creditos\creditos.html"*/'<!--\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>(LOGO) Saiba Mais Design</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n-->\n\n<ion-content>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n\n\n        <div id="botao-voltar">\n\n          <button (click)="voltarPaginaInicial()" style="background-color:transparent;">\n\n            <ion-icon class="botaoVoltar"></ion-icon>\n\n          </button>\n\n        </div>\n\n\n\n        <div class="titulo"></div>\n\n        <div class="texto"></div>\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"D:\smdesign\src\pages\creditos\creditos.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], CreditosPage);
    return CreditosPage;
}());

//# sourceMappingURL=creditos.js.map

/***/ }),

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
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
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"D:\smdesign\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\smdesign\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_historiador_historiador__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_creditos_creditos__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_galeria_galeria__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_historiador_historiador__["a" /* HistoriadorPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_creditos_creditos__["a" /* CreditosPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_galeria_galeria__["a" /* GaleriaPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_historiador_historiador__["a" /* HistoriadorPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_creditos_creditos__["a" /* CreditosPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_galeria_galeria__["a" /* GaleriaPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_historiador_historiador__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_creditos_creditos__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_galeria_galeria__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Historiador', component: __WEBPACK_IMPORTED_MODULE_6__pages_historiador_historiador__["a" /* HistoriadorPage */] },
            { title: 'Creditos', component: __WEBPACK_IMPORTED_MODULE_7__pages_creditos_creditos__["a" /* CreditosPage */] },
            { title: 'Galeria', component: __WEBPACK_IMPORTED_MODULE_8__pages_galeria_galeria__["a" /* GaleriaPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\smdesign\src\app\app.html"*/'<ion-menu [content]="content" type="overlay">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\smdesign\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__historiador_historiador__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__creditos_creditos__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.historiadorPage = __WEBPACK_IMPORTED_MODULE_2__historiador_historiador__["a" /* HistoriadorPage */];
        this.creditosPage = __WEBPACK_IMPORTED_MODULE_3__creditos_creditos__["a" /* CreditosPage */];
    }
    HomePage.prototype.abrirAplicacao = function () {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.navCtrl.push(this.historiadorPage);
    };
    HomePage.prototype.abrirPaginaCreditos = function () {
        this.navCtrl.push(this.creditosPage);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\smdesign\src\pages\home\home.html"*/'<ion-content>\n\n\n\n  <div class="div-botoes">\n\n\n\n    <div class="colunaBotaoIniciar">\n\n      <button (click)="abrirAplicacao()" style="background-color:transparent; text-align: right;">\n\n        <ion-icon class="botaoIniciar sombra-botoes"></ion-icon>\n\n      </button>\n\n    </div>\n\n\n\n    <div class="colunaBotaoCredito">\n\n      <button (click)="abrirPaginaCreditos()" style="background-color:transparent;">\n\n        <ion-icon class="botaoCreditos sombra-botoes"></ion-icon>\n\n      </button>\n\n    </div>\n\n\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\smdesign\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoriadorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__galeria_galeria__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HistoriadorPage = /** @class */ (function () {
    function HistoriadorPage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.homePage = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.galeriaPage = __WEBPACK_IMPORTED_MODULE_3__galeria_galeria__["a" /* GaleriaPage */];
        this.caracteristicas = ["N", "N", "N"];
        this.botaoDeCorAtivo = [1, 1, 1, 1];
        this.botaoDeTipografiaAtivo = [1, 1, 1, 1];
        this.botaoDeLayoutAtivo = [1, 1, 1, 1];
        this.bonecoAcordado = true;
        this.primeiroClique = true;
    }
    HistoriadorPage.prototype.selecionaTodosOsBotoes = function (comando) {
        if (comando) {
            for (var i = 0; i < this.botaoDeLayoutAtivo.length; i++) {
                document.getElementById('escola-layout-' + (i + 1)).setAttribute("style", "opacity: 1;");
            }
            for (var i = 0; i < this.botaoDeCorAtivo.length; i++) {
                document.getElementById('escola-cor-' + (i + 1)).setAttribute("style", "opacity: 1;");
            }
            for (var i = 0; i < this.botaoDeTipografiaAtivo.length; i++) {
                document.getElementById('escola-tipografia-' + (i + 1)).setAttribute("style", "opacity: 1;");
            }
        }
        else {
            for (var i = 0; i < this.botaoDeLayoutAtivo.length; i++) {
                document.getElementById('escola-layout-' + (i + 1)).setAttribute("style", "opacity: 0.5;");
            }
            for (var i = 0; i < this.botaoDeCorAtivo.length; i++) {
                document.getElementById('escola-cor-' + (i + 1)).setAttribute("style", "opacity: 0.5;");
            }
            for (var i = 0; i < this.botaoDeTipografiaAtivo.length; i++) {
                document.getElementById('escola-tipografia-' + (i + 1)).setAttribute("style", "opacity: 0.5;");
            }
        }
    };
    HistoriadorPage.prototype.ionViewDidLoad = function () {
        this.carregaLayoutNormal();
        // document.getElementById("balaoDeDialogo").style.opacity = "0";
        // this.desselecionaBotoes();
    };
    HistoriadorPage.prototype.voltarPaginaInicial = function () {
        this.navCtrl.setRoot(this.homePage);
    };
    HistoriadorPage.prototype.abrirGaleria = function () {
        this.navCtrl.setRoot(this.galeriaPage);
    };
    HistoriadorPage.prototype.carregaLayoutNormal = function () {
        // this.desselecionaBotoes();
        this.caracteristicas[0] = "N";
        this.caracteristicas[1] = "N";
        this.caracteristicas[2] = "N";
        var objetoDeEstudo = document.getElementById("imagem1");
        var novoObjetoDeEstudo = document.getElementById("imagem2");
        var sufixo = "";
        for (var i = 0; i < this.caracteristicas.length; i++) {
            sufixo += this.caracteristicas[i];
        }
        objetoDeEstudo.className = sufixo;
        novoObjetoDeEstudo.className = sufixo;
        if (this.bonecoAcordado) {
            var balaoDeDialogo = document.getElementById('balaoDeDialogo');
            balaoDeDialogo.style.opacity = "1";
            balaoDeDialogo.innerHTML =
                "Olá! Eu sou José. Estou aqui para te ajudar a entender melhor as mudanças que ocorrerão na tela conforme você for alterando a tipografia, a cor ou o layout. Vamos lá?";
        }
    };
    // -------------- ART DECO --------------
    HistoriadorPage.prototype.exibeDialogoArtDeco = function () {
        var balaoDeDialogo = document.getElementById('balaoDeDialogo');
        balaoDeDialogo.innerHTML =
            "Art Déco é um estilo de artes visuais, arquitetura e design internacional que começou na Europa, em 1910, e teve o seu apogeu entre os anos 1920 e 1930. O Art Déco era criticado por correntes modernistas por seu excesso de decoração. Por conta disso, acabava beneficiando os mais ricos. Teve seu declínio entre os anos de 1935 e 1939.";
        if (this.bonecoAcordado) {
            balaoDeDialogo.style.opacity = "1";
            var jose = document.getElementById('jose');
            jose.className = "jose feliz";
        }
        else {
            balaoDeDialogo.style.opacity = "0";
        }
    };
    HistoriadorPage.prototype.aplicaLayoutArtDeco = function () {
        var balaoDeDialogo = document.getElementById('balaoDeDialogo');
        balaoDeDialogo.innerHTML =
            "O layout reforça as fortes linhas verticais, os seus ornamentos e as formas aerodinâmicas da Art Deco, que refletiam os arranha-céus, carros, arte, móveis, jóias, moda e até a música da época.";
        if (this.bonecoAcordado) {
            balaoDeDialogo.style.opacity = "1";
        }
        else {
            balaoDeDialogo.style.opacity = "0";
        }
        if (this.primeiroClique) {
            this.primeiroClique = false;
            this.selecionaTodosOsBotoes(false);
        }
        // Linha abaixo só permite clicar quando não já está clicado
        if (document.getElementById("escola-layout-1").style.opacity != "1") {
            var classeAntiga = this.caracteristicas[0] + this.caracteristicas[1] + this.caracteristicas[2];
            this.caracteristicas[0] = "D";
            var sufixo = "";
            for (var i = 0; i < this.caracteristicas.length; i++) {
                sufixo += this.caracteristicas[i];
            }
            var velhoObjetoDeEstudo = document.getElementById("imagem1");
            velhoObjetoDeEstudo.className = classeAntiga;
            var novoObjetoDeEstudo = document.getElementById("imagem2");
            novoObjetoDeEstudo.className = sufixo;
            novoObjetoDeEstudo.style.position = "relative";
            novoObjetoDeEstudo.style.left = "-982px";
            this.fadeOut(velhoObjetoDeEstudo, 1);
            this.fadeIn(novoObjetoDeEstudo, 1);
            this.botaoDeLayoutAtivo = [1, 0, 0, 0];
            for (var i = 0; i < this.botaoDeLayoutAtivo.length; i++) {
                if (this.botaoDeLayoutAtivo[i] !== 1) {
                    document.getElementById('escola-layout-' + (i + 1)).setAttribute("style", "opacity: 0.5;");
                }
                else {
                    document.getElementById('escola-layout-' + (i + 1)).setAttribute("style", "opacity: 1;");
                }
            }
        }
    };
    HistoriadorPage.prototype.aplicaCorArtDeco = function () {
        var balaoDeDialogo = document.getElementById('balaoDeDialogo');
        balaoDeDialogo.innerHTML =
            "Cores como prata, ouro, azul metálico e cinzas de carvão também representavam a riqueza e a prosperidade da década de 20. Acabamentos metálicos adicionam brilho, glamour e implicam em luxo e riqueza.";
        if (this.bonecoAcordado) {
            balaoDeDialogo.style.opacity = "1";
        }
        else {
            balaoDeDialogo.style.opacity = "0";
        }
        if (this.primeiroClique) {
            this.primeiroClique = false;
            this.selecionaTodosOsBotoes(false);
        }
        // Linha abaixo só permite clicar quando não já está clicado
        if (document.getElementById("escola-cor-1").style.opacity != "1") {
            var classeAntiga = this.caracteristicas[0] + this.caracteristicas[1] + this.caracteristicas[2];
            this.caracteristicas[1] = "D";
            var sufixo = "";
            for (var i = 0; i < this.caracteristicas.length; i++) {
                sufixo += this.caracteristicas[i];
            }
            var velhoObjetoDeEstudo = document.getElementById("imagem1");
            velhoObjetoDeEstudo.className = classeAntiga;
            var novoObjetoDeEstudo = document.getElementById("imagem2");
            novoObjetoDeEstudo.className = sufixo;
            novoObjetoDeEstudo.style.position = "relative";
            novoObjetoDeEstudo.style.left = "-982px";
            this.fadeOut(velhoObjetoDeEstudo, 1);
            this.fadeIn(novoObjetoDeEstudo, 1);
            this.botaoDeCorAtivo = [1, 0, 0, 0];
            for (var i = 0; i < this.botaoDeCorAtivo.length; i++) {
                if (this.botaoDeCorAtivo[i] !== 1) {
                    document.getElementById('escola-cor-' + (i + 1)).setAttribute("style", "opacity: 0.5;");
                }
                else {
                    document.getElementById('escola-cor-' + (i + 1)).setAttribute("style", "opacity: 1;");
                }
            }
        }
    };
    HistoriadorPage.prototype.aplicaFonteArtDeco = function () {
        var balaoDeDialogo = document.getElementById('balaoDeDialogo');
        balaoDeDialogo.innerHTML =
            "A estética da tipografia Art Déco refletia grande parte das transições culturais entre as décadas de 1920 e 1940, quando máquinas, metais e trens de carga começaram a mudar o mundo. As tipografias sem serifa e geométricas são refinadas e elegantes, com maior contraste e junções abruptas.";
        if (this.bonecoAcordado) {
            balaoDeDialogo.style.opacity = "1";
        }
        else {
            balaoDeDialogo.style.opacity = "0";
        }
        if (this.primeiroClique) {
            this.primeiroClique = false;
            this.selecionaTodosOsBotoes(false);
        }
        // Linha abaixo só permite clicar quando não já está clicado
        if (document.getElementById("escola-tipografia-1").style.opacity != "1") {
            var classeAntiga = this.caracteristicas[0] + this.caracteristicas[1] + this.caracteristicas[2];
            this.caracteristicas[2] = "D";
            var sufixo = "";
            for (var i = 0; i < this.caracteristicas.length; i++) {
                sufixo += this.caracteristicas[i];
            }
            var velhoObjetoDeEstudo = document.getElementById("imagem1");
            velhoObjetoDeEstudo.className = classeAntiga;
            var novoObjetoDeEstudo = document.getElementById("imagem2");
            novoObjetoDeEstudo.className = sufixo;
            novoObjetoDeEstudo.style.position = "relative";
            novoObjetoDeEstudo.style.left = "-982px";
            this.fadeOut(velhoObjetoDeEstudo, 1);
            this.fadeIn(novoObjetoDeEstudo, 1);
            this.botaoDeTipografiaAtivo = [1, 0, 0, 0];
            for (var i = 0; i < this.botaoDeTipografiaAtivo.length; i++) {
                if (this.botaoDeTipografiaAtivo[i] !== 1) {
                    document.getElementById('escola-tipografia-' + (i + 1)).setAttribute("style", "opacity: 0.5;");
                }
                else {
                    document.getElementById('escola-tipografia-' + (i + 1)).setAttribute("style", "opacity: 1;");
                }
            }
        }
    };
    // -------------- ART NOVEAU --------------
    HistoriadorPage.prototype.exibeDialogoArtNoveau = function () {
        var balaoDeDialogo = document.getElementById('balaoDeDialogo');
        balaoDeDialogo.innerHTML =
            "Art Nouveau foi um estilo internacional que prosperou no fim do século XIX e começo do século XX. Englobou todas as artes projetuais – arquitetura, design de mobiliário e produto, moda e artes gráficas. Uso da linha orgânica, baseada na natureza. Movimentos lineares naturais dominavam a área espacial e outras propriedades visuais.";
        if (this.bonecoAcordado) {
            balaoDeDialogo.style.opacity = "1";
            var jose = document.getElementById('jose');
            jose.className = "jose confuso";
        }
        else {
            balaoDeDialogo.style.opacity = "0";
        }
    };
    HistoriadorPage.prototype.aplicaLayoutArtNoveau = function () {
        var balaoDeDialogo = document.getElementById('balaoDeDialogo');
        balaoDeDialogo.innerHTML = "O layout Art Nouveau caracteriza-se pelo uso de ornamentos florais, traçados curvilíneos com fortes contornos como numa moldura. As flores, os arcos, as formas da natureza trazem a ideia de movimento às obras.";
        if (this.bonecoAcordado) {
            balaoDeDialogo.style.opacity = "1";
        }
        else {
            balaoDeDialogo.style.opacity = "0";
        }
        if (this.primeiroClique) {
            this.primeiroClique = false;
            this.selecionaTodosOsBotoes(false);
        }
        // Linha abaixo só permite clicar quando não já está clicado
        if (document.getElementById("escola-layout-2").style.opacity != "1") {
            var classeAntiga = this.caracteristicas[0] + this.caracteristicas[1] + this.caracteristicas[2];
            this.caracteristicas[0] = "Nv";
            var sufixo = "";
            for (var i = 0; i < this.caracteristicas.length; i++) {
                sufixo += this.caracteristicas[i];
            }
            var velhoObjetoDeEstudo = document.getElementById("imagem1");
            velhoObjetoDeEstudo.className = classeAntiga;
            var novoObjetoDeEstudo = document.getElementById("imagem2");
            novoObjetoDeEstudo.className = sufixo;
            novoObjetoDeEstudo.style.position = "relative";
            novoObjetoDeEstudo.style.left = "-982px";
            this.fadeOut(velhoObjetoDeEstudo, 1);
            this.fadeIn(novoObjetoDeEstudo, 1);
            this.botaoDeLayoutAtivo = [0, 1, 0, 0];
            for (var i = 0; i < this.botaoDeLayoutAtivo.length; i++) {
                if (this.botaoDeLayoutAtivo[i] !== 1) {
                    document.getElementById('escola-layout-' + (i + 1)).setAttribute("style", "opacity: 0.5;");
                }
                else {
                    document.getElementById('escola-layout-' + (i + 1)).setAttribute("style", "opacity: 1;");
                }
            }
        }
    };
    HistoriadorPage.prototype.aplicaCorArtNoveau = function () {
        var balaoDeDialogo = document.getElementById('balaoDeDialogo');
        balaoDeDialogo.innerHTML =
            "O Art Nouveau concentra-se fortemente em cores quentes e dessaturadas, dando um ar de desbotado, empoeirado. Quando se adiciona cores quentes, por conta da falta de saturação, obtém-se um efeito romântico, nostálgico, sonhador.";
        if (this.bonecoAcordado) {
            balaoDeDialogo.style.opacity = "1";
        }
        else {
            balaoDeDialogo.style.opacity = "0";
        }
        if (this.primeiroClique) {
            this.primeiroClique = false;
            this.selecionaTodosOsBotoes(false);
        }
        // Linha abaixo não permite que usuário clique em botão já clicado
        if (document.getElementById("escola-cor-2").style.opacity != "1") {
            var classeAntiga = this.caracteristicas[0] + this.caracteristicas[1] + this.caracteristicas[2];
            this.caracteristicas[1] = "Nv";
            var sufixo = "";
            for (var i = 0; i < this.caracteristicas.length; i++) {
                sufixo += this.caracteristicas[i];
            }
            var velhoObjetoDeEstudo = document.getElementById("imagem1");
            velhoObjetoDeEstudo.className = classeAntiga;
            var novoObjetoDeEstudo = document.getElementById("imagem2");
            novoObjetoDeEstudo.className = sufixo;
            novoObjetoDeEstudo.style.position = "relative";
            novoObjetoDeEstudo.style.left = "-982px";
            this.fadeOut(velhoObjetoDeEstudo, 1);
            this.fadeIn(novoObjetoDeEstudo, 1);
            this.botaoDeCorAtivo = [0, 1, 0, 0];
            for (var i = 0; i < this.botaoDeCorAtivo.length; i++) {
                if (this.botaoDeCorAtivo[i] !== 1) {
                    document.getElementById('escola-cor-' + (i + 1)).setAttribute("style", "opacity: 0.5;");
                }
                else {
                    document.getElementById('escola-cor-' + (i + 1)).setAttribute("style", "opacity: 1;");
                }
            }
        }
    };
    HistoriadorPage.prototype.aplicaFonteArtNoveau = function () {
        var balaoDeDialogo = document.getElementById('balaoDeDialogo');
        balaoDeDialogo.innerHTML =
            "A tipologia Art Nouveau é estilizada, elegante e com fontes extremamente decorativas, derivadas de formas orgânicas. Incluem acabamentos decorativos, “cinturas” altas ou baixas, formas triangulares e diagonais dos caracteres, ênfase nas partes superior ou inferior e linhas transversais angulosas";
        if (this.bonecoAcordado) {
            balaoDeDialogo.style.opacity = "1";
        }
        else {
            balaoDeDialogo.style.opacity = "0";
        }
        if (this.primeiroClique) {
            this.primeiroClique = false;
            this.selecionaTodosOsBotoes(false);
        }
        // Linha abaixo só permite clicar quando não já está clicado
        if (document.getElementById("escola-tipografia-2").style.opacity != "1") {
            var classeAntiga = this.caracteristicas[0] + this.caracteristicas[1] + this.caracteristicas[2];
            this.caracteristicas[2] = "Nv";
            var sufixo = "";
            for (var i = 0; i < this.caracteristicas.length; i++) {
                sufixo += this.caracteristicas[i];
            }
            var velhoObjetoDeEstudo = document.getElementById("imagem1");
            velhoObjetoDeEstudo.className = classeAntiga;
            var novoObjetoDeEstudo = document.getElementById("imagem2");
            novoObjetoDeEstudo.className = sufixo;
            novoObjetoDeEstudo.style.position = "relative";
            novoObjetoDeEstudo.style.left = "-982px";
            this.fadeOut(velhoObjetoDeEstudo, 1);
            this.fadeIn(novoObjetoDeEstudo, 1);
            this.botaoDeTipografiaAtivo = [0, 1, 0, 0];
            for (var i = 0; i < this.botaoDeTipografiaAtivo.length; i++) {
                if (this.botaoDeTipografiaAtivo[i] !== 1) {
                    document.getElementById('escola-tipografia-' + (i + 1)).setAttribute("style", "opacity: 0.5;");
                }
                else {
                    document.getElementById('escola-tipografia-' + (i + 1)).setAttribute("style", "opacity: 1;");
                }
            }
        }
    };
    // -------------- BAUHAUS --------------
    HistoriadorPage.prototype.exibeDialogoBauhaus = function () {
        var balaoDeDialogo = document.getElementById('balaoDeDialogo');
        balaoDeDialogo.innerHTML =
            "Bauhaus foi a primeira escola de Design do mundo. Ela surgiu na Alemanha e é uma das maiores expressões do Modernismo. Características como um leque reduzido de cores, uso de formas geométricas claras e simples e construção da informação visual dentro de um sistema rígido (grid) foram aplicadas a problemas funcionais e à produção mecânica dentro da escola.";
        if (this.bonecoAcordado) {
            balaoDeDialogo.style.opacity = "1";
            var jose = document.getElementById('jose');
            jose.className = "jose surpreso";
        }
        else {
            balaoDeDialogo.style.opacity = "0";
        }
    };
    HistoriadorPage.prototype.aplicaLayoutBauhaus = function () {
        var balaoDeDialogo = document.getElementById('balaoDeDialogo');
        balaoDeDialogo.innerHTML =
            "No layout as formas primárias geométricas definem-se como elementos dinâmicos, bordas que são ultrapassadas e linhas firmes.";
        if (this.bonecoAcordado) {
            balaoDeDialogo.style.opacity = "1";
        }
        else {
            balaoDeDialogo.style.opacity = "0";
        }
        if (this.primeiroClique) {
            this.primeiroClique = false;
            this.selecionaTodosOsBotoes(false);
        }
        // Linha abaixo só permite clicar quando não já está clicado
        if (document.getElementById("escola-layout-3").style.opacity != "1") {
            var classeAntiga = this.caracteristicas[0] + this.caracteristicas[1] + this.caracteristicas[2];
            this.caracteristicas[0] = "B";
            var sufixo = "";
            for (var i = 0; i < this.caracteristicas.length; i++) {
                sufixo += this.caracteristicas[i];
            }
            var velhoObjetoDeEstudo = document.getElementById("imagem1");
            velhoObjetoDeEstudo.className = classeAntiga;
            var novoObjetoDeEstudo = document.getElementById("imagem2");
            novoObjetoDeEstudo.className = sufixo;
            novoObjetoDeEstudo.style.position = "relative";
            novoObjetoDeEstudo.style.left = "-982px";
            this.fadeOut(velhoObjetoDeEstudo, 1);
            this.fadeIn(novoObjetoDeEstudo, 1);
            this.botaoDeLayoutAtivo = [0, 0, 1, 0];
            for (var i = 0; i < this.botaoDeLayoutAtivo.length; i++) {
                if (this.botaoDeLayoutAtivo[i] !== 1) {
                    document.getElementById('escola-layout-' + (i + 1)).setAttribute("style", "opacity: 0.5;");
                }
                else {
                    document.getElementById('escola-layout-' + (i + 1)).setAttribute("style", "opacity: 1;");
                }
            }
        }
    };
    HistoriadorPage.prototype.aplicaCorBauhaus = function () {
        var balaoDeDialogo = document.getElementById('balaoDeDialogo');
        balaoDeDialogo.innerHTML =
            "Forte uso das cores primárias e vibrantes eram tomadas como ponto de partida para qualquer produção. As cores também eram representadas pelas formas primárias (vermelho = quadrado, triângulo = amarelo, azul = circulo).";
        if (this.bonecoAcordado) {
            balaoDeDialogo.style.opacity = "1";
        }
        else {
            balaoDeDialogo.style.opacity = "0";
        }
        if (this.primeiroClique) {
            this.primeiroClique = false;
            this.selecionaTodosOsBotoes(false);
        }
        // Linha abaixo só permite clicar quando não já está clicado
        if (document.getElementById("escola-cor-3").style.opacity != "1") {
            var classeAntiga = this.caracteristicas[0] + this.caracteristicas[1] + this.caracteristicas[2];
            this.caracteristicas[1] = "B";
            var sufixo = "";
            for (var i = 0; i < this.caracteristicas.length; i++) {
                sufixo += this.caracteristicas[i];
            }
            var velhoObjetoDeEstudo = document.getElementById("imagem1");
            velhoObjetoDeEstudo.className = classeAntiga;
            var novoObjetoDeEstudo = document.getElementById("imagem2");
            novoObjetoDeEstudo.className = sufixo;
            novoObjetoDeEstudo.style.position = "relative";
            novoObjetoDeEstudo.style.left = "-982px";
            this.fadeOut(velhoObjetoDeEstudo, 1);
            this.fadeIn(novoObjetoDeEstudo, 1);
            this.botaoDeCorAtivo = [0, 0, 1, 0];
            for (var i = 0; i < this.botaoDeCorAtivo.length; i++) {
                if (this.botaoDeCorAtivo[i] !== 1) {
                    document.getElementById('escola-cor-' + (i + 1)).setAttribute("style", "opacity: 0.5;");
                }
                else {
                    document.getElementById('escola-cor-' + (i + 1)).setAttribute("style", "opacity: 1;");
                }
            }
        }
    };
    HistoriadorPage.prototype.aplicaFonteBauhaus = function () {
        var balaoDeDialogo = document.getElementById('balaoDeDialogo');
        balaoDeDialogo.innerHTML =
            "A Bauhaus utiliza de uma tipografia mais moderna, enxuta e precisa, com princípios do construtivismo. Mistura versões condensadas e expandidas de fontes góticas e sem serifa.";
        if (this.bonecoAcordado) {
            balaoDeDialogo.style.opacity = "1";
        }
        else {
            balaoDeDialogo.style.opacity = "0";
        }
        if (this.primeiroClique) {
            this.primeiroClique = false;
            this.selecionaTodosOsBotoes(false);
        }
        // Linha abaixo só permite clicar quando não já está clicado
        if (document.getElementById("escola-tipografia-3").style.opacity != "1") {
            var classeAntiga = this.caracteristicas[0] + this.caracteristicas[1] + this.caracteristicas[2];
            this.caracteristicas[2] = "B";
            var sufixo = "";
            for (var i = 0; i < this.caracteristicas.length; i++) {
                sufixo += this.caracteristicas[i];
            }
            var velhoObjetoDeEstudo = document.getElementById("imagem1");
            velhoObjetoDeEstudo.className = classeAntiga;
            var novoObjetoDeEstudo = document.getElementById("imagem2");
            novoObjetoDeEstudo.className = sufixo;
            novoObjetoDeEstudo.style.position = "relative";
            novoObjetoDeEstudo.style.left = "-982px";
            this.fadeOut(velhoObjetoDeEstudo, 1);
            this.fadeIn(novoObjetoDeEstudo, 1);
            this.botaoDeTipografiaAtivo = [0, 0, 1, 0];
            for (var i = 0; i < this.botaoDeTipografiaAtivo.length; i++) {
                if (this.botaoDeTipografiaAtivo[i] !== 1) {
                    document.getElementById('escola-tipografia-' + (i + 1)).setAttribute("style", "opacity: 0.5;");
                }
                else {
                    document.getElementById('escola-tipografia-' + (i + 1)).setAttribute("style", "opacity: 1;");
                }
            }
        }
    };
    // -------------- POP ART --------------
    HistoriadorPage.prototype.exibeDialogoPopArt = function () {
        var balaoDeDialogo = document.getElementById('balaoDeDialogo');
        balaoDeDialogo.innerHTML =
            "O Pop Art surge em meados de 1950, na Inglaterra, mas alcança sua maior fama nos Estados Unidos em 1960. O movimento buscava unir a familiaridade da sociedade com a cultura de consumo e de massa. O resultado eram imagens que documentavam, ao mesmo tempo que parodiavam, conceitos familiares dos Estados Unidos modernos.";
        if (this.bonecoAcordado) {
            balaoDeDialogo.style.opacity = "1";
            var jose = document.getElementById('jose');
            jose.className = "jose explicando";
        }
        else {
            balaoDeDialogo.style.opacity = "0";
        }
    };
    HistoriadorPage.prototype.aplicaLayoutPopArt = function () {
        var balaoDeDialogo = document.getElementById('balaoDeDialogo');
        balaoDeDialogo.innerHTML =
            "O layout traz a estética dos quadrinhos que o artista Roy Lichtenstein usava como uma forma de criticar a cultura de massas, o consumismo e a economia doméstica.";
        if (this.bonecoAcordado) {
            balaoDeDialogo.style.opacity = "1";
        }
        else {
            balaoDeDialogo.style.opacity = "0";
        }
        if (this.primeiroClique) {
            this.primeiroClique = false;
            this.selecionaTodosOsBotoes(false);
        }
        // Linha abaixo só permite clicar quando não já está clicado
        if (document.getElementById("escola-layout-4").style.opacity != "1") {
            var classeAntiga = this.caracteristicas[0] + this.caracteristicas[1] + this.caracteristicas[2];
            this.caracteristicas[0] = "P";
            var sufixo = "";
            for (var i = 0; i < this.caracteristicas.length; i++) {
                sufixo += this.caracteristicas[i];
            }
            var velhoObjetoDeEstudo = document.getElementById("imagem1");
            velhoObjetoDeEstudo.className = classeAntiga;
            var novoObjetoDeEstudo = document.getElementById("imagem2");
            novoObjetoDeEstudo.className = sufixo;
            novoObjetoDeEstudo.style.position = "relative";
            novoObjetoDeEstudo.style.left = "-982px";
            this.fadeOut(velhoObjetoDeEstudo, 1);
            this.fadeIn(novoObjetoDeEstudo, 1);
            this.botaoDeLayoutAtivo = [0, 0, 0, 1];
            for (var i = 0; i < this.botaoDeLayoutAtivo.length; i++) {
                if (this.botaoDeLayoutAtivo[i] !== 1) {
                    document.getElementById('escola-layout-' + (i + 1)).setAttribute("style", "opacity: 0.5;");
                }
                else {
                    document.getElementById('escola-layout-' + (i + 1)).setAttribute("style", "opacity: 1;");
                }
            }
        }
    };
    HistoriadorPage.prototype.aplicaCorPopArt = function () {
        var balaoDeDialogo = document.getElementById('balaoDeDialogo');
        balaoDeDialogo.innerHTML =
            "O design pop inspirava-se nas cores do arco íris: saturadas e contrastantes. Tons vibrantes para criar deliberadamente efeitos ópticos dissonantes.";
        if (this.bonecoAcordado) {
            balaoDeDialogo.style.opacity = "1";
        }
        else {
            balaoDeDialogo.style.opacity = "0";
        }
        if (this.primeiroClique) {
            this.primeiroClique = false;
            this.selecionaTodosOsBotoes(false);
        }
        // Linha abaixo só permite clicar quando não já está clicado
        if (document.getElementById("escola-cor-4").style.opacity != "1") {
            var classeAntiga = this.caracteristicas[0] + this.caracteristicas[1] + this.caracteristicas[2];
            this.caracteristicas[1] = "P";
            var sufixo = "";
            for (var i = 0; i < this.caracteristicas.length; i++) {
                sufixo += this.caracteristicas[i];
            }
            var velhoObjetoDeEstudo = document.getElementById("imagem1");
            velhoObjetoDeEstudo.className = classeAntiga;
            var novoObjetoDeEstudo = document.getElementById("imagem2");
            novoObjetoDeEstudo.className = sufixo;
            novoObjetoDeEstudo.style.position = "relative";
            novoObjetoDeEstudo.style.left = "-982px";
            this.fadeOut(velhoObjetoDeEstudo, 1);
            this.fadeIn(novoObjetoDeEstudo, 1);
            this.botaoDeCorAtivo = [0, 0, 0, 1];
            for (var i = 0; i < this.botaoDeCorAtivo.length; i++) {
                if (this.botaoDeCorAtivo[i] !== 1) {
                    document.getElementById('escola-cor-' + (i + 1)).setAttribute("style", "opacity: 0.5;");
                }
                else {
                    document.getElementById('escola-cor-' + (i + 1)).setAttribute("style", "opacity: 1;");
                }
            }
        }
    };
    HistoriadorPage.prototype.aplicaFontePopArt = function () {
        var balaoDeDialogo = document.getElementById('balaoDeDialogo');
        balaoDeDialogo.innerHTML =
            "A tipografia Pop Art geralmente eram manuscritos, posteriormente com referências ao Art Nouveau, até mesmo psicodélicos. Chamativa, principalmente ligada ao consumismo e à venda exagerada.";
        if (this.bonecoAcordado) {
            balaoDeDialogo.style.opacity = "1";
        }
        else {
            balaoDeDialogo.style.opacity = "0";
        }
        if (this.primeiroClique) {
            this.primeiroClique = false;
            this.selecionaTodosOsBotoes(false);
        }
        // Linha abaixo só permite clicar quando não já está clicado
        if (document.getElementById("escola-tipografia-4").style.opacity != "1") {
            var classeAntiga = this.caracteristicas[0] + this.caracteristicas[1] + this.caracteristicas[2];
            this.caracteristicas[2] = "P";
            var sufixo = "";
            for (var i = 0; i < this.caracteristicas.length; i++) {
                sufixo += this.caracteristicas[i];
            }
            var velhoObjetoDeEstudo = document.getElementById("imagem1");
            velhoObjetoDeEstudo.className = classeAntiga;
            var novoObjetoDeEstudo = document.getElementById("imagem2");
            novoObjetoDeEstudo.className = sufixo;
            novoObjetoDeEstudo.style.position = "relative";
            novoObjetoDeEstudo.style.left = "-982px";
            this.fadeOut(velhoObjetoDeEstudo, 1);
            this.fadeIn(novoObjetoDeEstudo, 1);
            this.botaoDeTipografiaAtivo = [0, 0, 0, 1];
            for (var i = 0; i < this.botaoDeTipografiaAtivo.length; i++) {
                if (this.botaoDeTipografiaAtivo[i] !== 1) {
                    document.getElementById('escola-tipografia-' + (i + 1)).setAttribute("style", "opacity: 0.5;");
                }
                else {
                    document.getElementById('escola-tipografia-' + (i + 1)).setAttribute("style", "opacity: 1;");
                }
            }
        }
    };
    // Personagem parceiro do discurso
    HistoriadorPage.prototype.desapareceBalao = function () {
        if (document.getElementById("balaoDeDialogo").innerHTML.trim() != "") {
            this.bonecoAcordado = !this.bonecoAcordado;
            if (!this.bonecoAcordado) {
                var jose = document.getElementById('jose');
                jose.className = "jose dormindo";
                var opacidade = document.getElementById("balaoDeDialogo").style.opacity;
                if (opacidade != "1" && opacidade != "") {
                    document.getElementById("balaoDeDialogo").style.opacity = "1";
                }
                else {
                    document.getElementById("balaoDeDialogo").style.opacity = "0";
                }
            }
            else {
                var jose = document.getElementById('jose');
                jose.className = "jose explicando";
                var opacidade = document.getElementById("balaoDeDialogo").style.opacity;
                if (opacidade != "1" && opacidade != "") {
                    document.getElementById("balaoDeDialogo").style.opacity = "1";
                }
                else {
                    document.getElementById("balaoDeDialogo").style.opacity = "0";
                }
            }
        }
    };
    HistoriadorPage.prototype.geraModoAleatorio = function () {
        var balaoDeDialogo = document.getElementById('balaoDeDialogo');
        balaoDeDialogo.innerHTML =
            "Hmmm, você gostou desta combinação de cores? Quais escolas você consegue consegue identificar?";
        if (this.bonecoAcordado) {
            balaoDeDialogo.style.opacity = "1";
            var jose = document.getElementById('jose');
            jose.className = "jose confuso";
        }
        else {
            balaoDeDialogo.style.opacity = "0";
        }
        if (this.primeiroClique) {
            this.primeiroClique = false;
            this.selecionaTodosOsBotoes(false);
        }
        var classeAntiga = this.caracteristicas[0] + this.caracteristicas[1] + this.caracteristicas[2];
        var escolas = ["D", "Nv", "B", "P"];
        var escolaEscolhida;
        for (var i = 0; i < 3; i++) {
            escolaEscolhida = Math.floor(Math.random() * 4);
            this.caracteristicas[i] = escolas[escolaEscolhida];
        }
        var sufixo = "";
        for (var i = 0; i < this.caracteristicas.length; i++) {
            sufixo += this.caracteristicas[i];
        }
        var velhoObjetoDeEstudo = document.getElementById("imagem1");
        velhoObjetoDeEstudo.className = classeAntiga;
        var novoObjetoDeEstudo = document.getElementById("imagem2");
        novoObjetoDeEstudo.className = sufixo;
        novoObjetoDeEstudo.style.position = "relative";
        novoObjetoDeEstudo.style.left = "-982px";
        this.fadeOut(velhoObjetoDeEstudo, 1);
        this.fadeIn(novoObjetoDeEstudo, 1);
        switch (this.caracteristicas[0]) {
            case "D":
                this.botaoDeLayoutAtivo = [1, 0, 0, 0];
                break;
            case "Nv":
                this.botaoDeLayoutAtivo = [0, 1, 0, 0];
                break;
            case "B":
                this.botaoDeLayoutAtivo = [0, 0, 1, 0];
                break;
            case "P":
                this.botaoDeLayoutAtivo = [0, 0, 0, 1];
                break;
        }
        switch (this.caracteristicas[1]) {
            case "D":
                this.botaoDeCorAtivo = [1, 0, 0, 0];
                break;
            case "Nv":
                this.botaoDeCorAtivo = [0, 1, 0, 0];
                break;
            case "B":
                this.botaoDeCorAtivo = [0, 0, 1, 0];
                break;
            case "P":
                this.botaoDeCorAtivo = [0, 0, 0, 1];
                break;
        }
        switch (this.caracteristicas[2]) {
            case "D":
                this.botaoDeTipografiaAtivo = [1, 0, 0, 0];
                break;
            case "Nv":
                this.botaoDeTipografiaAtivo = [0, 1, 0, 0];
                break;
            case "B":
                this.botaoDeTipografiaAtivo = [0, 0, 1, 0];
                break;
            case "P":
                this.botaoDeTipografiaAtivo = [0, 0, 0, 1];
                break;
        }
        for (var i = 0; i < this.botaoDeCorAtivo.length; i++) {
            if (this.botaoDeCorAtivo[i] !== 1) {
                document.getElementById('escola-cor-' + (i + 1)).setAttribute("style", "opacity: 0.5;");
            }
            else {
                document.getElementById('escola-cor-' + (i + 1)).setAttribute("style", "opacity: 1;");
            }
        }
        for (var i = 0; i < this.botaoDeTipografiaAtivo.length; i++) {
            if (this.botaoDeTipografiaAtivo[i] !== 1) {
                document.getElementById('escola-tipografia-' + (i + 1)).setAttribute("style", "opacity: 0.5;");
            }
            else {
                document.getElementById('escola-tipografia-' + (i + 1)).setAttribute("style", "opacity: 1;");
            }
        }
        for (var i = 0; i < this.botaoDeLayoutAtivo.length; i++) {
            if (this.botaoDeLayoutAtivo[i] !== 1) {
                document.getElementById('escola-layout-' + (i + 1)).setAttribute("style", "opacity: 0.5;");
            }
            else {
                document.getElementById('escola-layout-' + (i + 1)).setAttribute("style", "opacity: 1;");
            }
        }
    };
    HistoriadorPage.prototype.fadeIn = function (element, time) {
        if (element.style.opacity == 0 || element.style.opacity == 1) {
            this.processa(element, time, 0, 100);
        }
    };
    HistoriadorPage.prototype.fadeOut = function (element, time) {
        if (element.style.opacity == 0 || element.style.opacity == 1) {
            this.processa(element, time, 100, 0);
        }
    };
    HistoriadorPage.prototype.processa = function (element, time, initial, end) {
        var increment, opc, intervalo;
        if (initial == 0) {
            increment = 2;
            element.style.display = "block";
        }
        else {
            increment = -2;
        }
        opc = initial;
        intervalo = setInterval(function () {
            if ((opc == end)) {
                if (end == 0) {
                    element.style.display = "block";
                }
                clearInterval(intervalo);
            }
            else {
                opc += increment;
                element.style.opacity = opc / 100;
                element.style.filter = "alpha(opacity=" + opc + ")";
            }
        }, time * 50);
    };
    HistoriadorPage.prototype.recarregaAplicacao = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Reiniciar o infográfico?',
            message: 'Tem certeza que deseja reiniciar o visual do infográfico?',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function () {
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        _this.carregaLayoutNormal();
                        _this.selecionaTodosOsBotoes(true);
                        _this.primeiroClique = true;
                    }
                }
            ]
        });
        confirm.present();
    };
    HistoriadorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-historiador',template:/*ion-inline-start:"D:\smdesign\src\pages\historiador\historiador.html"*/'<ion-content padding>\n\n\n\n  <!-- Teste de mouseFlow quando subir para site -->\n\n  <!--\n\n  <script type="text/javascript">\n\n    window._mfq = window._mfq || [];\n\n    (function () {\n\n      var mf = document.createElement("script");\n\n      mf.type = "text/javascript"; mf.async = true;\n\n      mf.src = "//cdn.mouseflow.com/projects/a66f8894-535d-47b9-9065-806d3b2faac8.js";\n\n      document.getElementsByTagName("head")[0].appendChild(mf);\n\n    })();\n\n  </script>\n\n  -->\n\n\n\n  <div class="botao-voltar-div">\n\n    <button (click)="voltarPaginaInicial()" style="background: transparent;">\n\n      <ion-icon class="botaoVoltar"></ion-icon>\n\n    </button>\n\n  </div>\n\n\n\n  <ion-grid id="gridMaior">\n\n    <ion-row>\n\n      <ion-col col-1 style="max-height: 80vh">\n\n        <ion-grid id="gridDeBotoes">\n\n          <ion-row id="linha01">\n\n            <ion-col id="celulaBotaoArtDeco">\n\n              <div class="divComFab">\n\n                <ion-fab vertical="center" horizontal="center">\n\n\n\n                  <button ion-fab mini fab-close-active artDeco (click)="exibeDialogoArtDeco()" class="sombraEscolas">\n\n                    <ion-icon class="botaoArtDeco">Art Deco</ion-icon>\n\n                  </button>\n\n\n\n                  <ion-fab-list side="right" style="margin: -10px 10px 20px 90px">\n\n                    <div class="tooltip">\n\n                      <button ion-fab (click)="aplicaCorArtDeco()" id="escola-cor-1">\n\n                        <ion-icon class="botaoPaletaCores"></ion-icon>\n\n                      </button>\n\n                      <span class="tooltiptext">Paleta de cores</span>\n\n                    </div>\n\n                  </ion-fab-list>\n\n\n\n                  <ion-fab-list side="right" style="margin: 32px 70px 0px 110px">\n\n                    <div class="tooltip">\n\n                      <button ion-fab (click)="aplicaFonteArtDeco()" id="escola-tipografia-1" class="sombraEscolas">\n\n                        <ion-icon class="botaoTipografia"></ion-icon>\n\n                      </button>\n\n                      <span class="tooltiptext">Tipografia</span>\n\n                    </div>\n\n                  </ion-fab-list>\n\n\n\n                  <ion-fab-list side="right" style="margin: 75px 10px 20px 90px">\n\n                    <div class="tooltip">\n\n                      <button ion-fab (click)="aplicaLayoutArtDeco()" id="escola-layout-1" class="sombraEscolas">\n\n                        <ion-icon class="botaoLayout"></ion-icon>\n\n                      </button>\n\n                      <span class="tooltiptext">Layout</span>\n\n                    </div>\n\n                  </ion-fab-list>\n\n                </ion-fab>\n\n              </div>\n\n              <br>\n\n              <br>\n\n              <br>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n          <ion-row id="linha02">\n\n            <ion-col id="celulaBotaoArtNoveau">\n\n              <div class="divComFab">\n\n                <ion-fab vertical="center" horizontal="center">\n\n\n\n                  <button ion-fab mini fab-close-active artNoveau (click)="exibeDialogoArtNoveau()"\n\n                    class="sombraEscolas">\n\n                    <ion-icon class="botaoArtNoveau"></ion-icon>\n\n                  </button>\n\n\n\n                  <ion-fab-list side="right" style="margin: -10px 10px 20px 90px">\n\n                    <div class="tooltip">\n\n                      <button ion-fab (click)="aplicaCorArtNoveau()" id="escola-cor-2" class="sombraEscolas">\n\n                        <ion-icon class="botaoPaletaCores"></ion-icon>\n\n                      </button>\n\n                      <span class="tooltiptext">Paleta de cores</span>\n\n                    </div>\n\n                  </ion-fab-list>\n\n\n\n                  <ion-fab-list side="right" style="margin: 32px 70px 0px 110px">\n\n                    <div class="tooltip">\n\n                      <button ion-fab (click)="aplicaFonteArtNoveau()" id="escola-tipografia-2" class="sombraEscolas">\n\n                        <ion-icon class="botaoTipografia"></ion-icon>\n\n                      </button>\n\n                      <span class="tooltiptext">Tipografia</span>\n\n                    </div>\n\n                  </ion-fab-list>\n\n\n\n                  <ion-fab-list side="right" style="margin: 75px 10px 20px 90px">\n\n                    <div class="tooltip">\n\n                      <button ion-fab (click)="aplicaLayoutArtNoveau()" id="escola-layout-2" class="sombraEscolas">\n\n                        <ion-icon class="botaoLayout"></ion-icon>\n\n                      </button>\n\n                      <span class="tooltiptext">Layout</span>\n\n                    </div>\n\n                  </ion-fab-list>\n\n\n\n                </ion-fab>\n\n              </div>\n\n              <br>\n\n              <br>\n\n              <br>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n          <ion-row id="linha03">\n\n            <ion-col id="celulaBotaoBauhaus">\n\n              <div class="divComFab">\n\n                <ion-fab vertical="center" horizontal="center">\n\n\n\n                  <button ion-fab mini fab-close-active bauhaus (click)="exibeDialogoBauhaus()" class="sombraEscolas">\n\n                    <ion-icon class="botaoBauhaus"></ion-icon>\n\n                  </button>\n\n\n\n                  <ion-fab-list side="right" style="margin: -10px 10px 20px 90px">\n\n                    <div class="tooltip">\n\n                      <button ion-fab (click)="aplicaCorBauhaus()" id="escola-cor-3" class="sombraEscolas">\n\n                        <ion-icon class="botaoPaletaCores"></ion-icon>\n\n                      </button>\n\n                      <span class="tooltiptext">Paleta de cores</span>\n\n                    </div>\n\n                  </ion-fab-list>\n\n\n\n                  <ion-fab-list side="right" style="margin: 32px 70px 0px 110px">\n\n                    <div class="tooltip">\n\n                      <button ion-fab (click)="aplicaFonteBauhaus()" id="escola-tipografia-3" class="sombraEscolas">\n\n                        <ion-icon class="botaoTipografia"></ion-icon>\n\n                      </button>\n\n                      <span class="tooltiptext">Tipografia</span>\n\n                    </div>\n\n                  </ion-fab-list>\n\n\n\n                  <ion-fab-list side="right" style="margin: 75px 10px 20px 90px">\n\n                    <div class="tooltip">\n\n                      <button ion-fab (click)="aplicaLayoutBauhaus()" id="escola-layout-3" class="sombraEscolas">\n\n                        <ion-icon class="botaoLayout"></ion-icon>\n\n                      </button>\n\n                      <span class="tooltiptext">Layout</span>\n\n                    </div>\n\n                  </ion-fab-list>\n\n                </ion-fab>\n\n              </div>\n\n              <br>\n\n              <br>\n\n              <br>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n          <ion-row id="linha04">\n\n            <ion-col id="celulaBotaoPopArt">\n\n              <div class="divComFab">\n\n                <ion-fab vertical="center" horizontal="center">\n\n\n\n                  <button ion-fab mini fab-close-active popArt (click)="exibeDialogoPopArt()" class="sombraEscolas">\n\n                    <ion-icon class="botaoPopArt"></ion-icon>\n\n                  </button>\n\n\n\n                  <ion-fab-list side="right" style="margin: -10px 10px 20px 90px">\n\n                    <div class="tooltip">\n\n                      <button ion-fab (click)="aplicaCorPopArt()" id="escola-cor-4" class="sombraEscolas">\n\n                        <ion-icon class="botaoPaletaCores"></ion-icon>\n\n                      </button>\n\n                      <span class="tooltiptext">Paleta de cores</span>\n\n                    </div>\n\n                  </ion-fab-list>\n\n\n\n                  <ion-fab-list side="right" style="margin: 32px 70px 0px 110px">\n\n                    <div class="tooltip">\n\n                      <button ion-fab (click)="aplicaFontePopArt()" id="escola-tipografia-4" class="sombraEscolas">\n\n                        <ion-icon class="botaoTipografia"></ion-icon>\n\n                      </button>\n\n                      <span class="tooltiptext">Tipografia</span>\n\n                    </div>\n\n                  </ion-fab-list>\n\n\n\n                  <ion-fab-list side="right" style="margin: 75px 10px 20px 90px">\n\n                    <div class="tooltip">\n\n                      <button ion-fab (click)="aplicaLayoutPopArt()" id="escola-layout-4" class="sombraEscolas">\n\n                        <ion-icon class="botaoLayout"></ion-icon>\n\n                      </button>\n\n                      <span class="tooltiptext">Layout</span>\n\n                    </div>\n\n                  </ion-fab-list>\n\n                </ion-fab>\n\n              </div>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n          <!--\n\n          <ion-row id="linha05">\n\n            <div style="margin-top: 45px; border: none;">\n\n              <ion-col id="celulaBotaoReiniciar">\n\n                <div class="tooltip">\n\n                  <button (click)="carregaLayoutNormal()" style="background-color: transparent;">\n\n                    <ion-icon class="botaoReiniciar botaoCelula"></ion-icon>\n\n                  </button>\n\n                  <span class="tooltiptext">Reiniciar</span>\n\n                </div>\n\n              </ion-col>\n\n              <ion-col id="celulaBotaoAleatorio">\n\n                <div class="tooltip">\n\n                  <button (click)="geraModoAleatorio()" style="background-color: transparent;">\n\n                    <ion-icon class="botaoAleatorio botaoCelula"></ion-icon>\n\n                  </button>\n\n                  <span class="tooltiptext">Modo Aleatório</span>\n\n                </div>\n\n              </ion-col>\n\n              <ion-col id="celulaBotaoGaleria">\n\n                <div class="tooltip">\n\n                  <button (click)="abrirGaleria()" style="background-color: transparent;">\n\n                    <ion-icon class="botaoGaleria botaoCelula"></ion-icon>\n\n                  </button>\n\n                  <span class="tooltiptext">Galeria</span>\n\n                </div>\n\n              </ion-col>\n\n            </div>\n\n          </ion-row>\n\n        -->\n\n        </ion-grid>\n\n      </ion-col>\n\n      <ion-col col-11>\n\n        <ion-grid id="gridDeEstudo">\n\n          <ion-row id="linha01">\n\n            <ion-col>\n\n              <div id="objetoDeEstudo" class="objetoDeEstudo flex-container " onload="carregaLayoutNormal()">\n\n                <img id = "imagem1" class = "NNN">\n\n                <img id = "imagem2" class = "NNN" style = "opacity: 0;" >\n\n              </div>\n\n              <div id="divJose">\n\n                <div id="balaoDeDialogo" class="balaoDeDialogo shadow"><p></p>\n\n                  <!--\n\n                  <span id="text"></span>\n\n                  <span id="blinker">|</span>\n\n                  -->\n\n                </div>\n\n                <div id="jose" class="jose explicando" (click)="desapareceBalao()"></div>\n\n              </div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <div class = "divBotoesInferiores">\n\n        <ion-col id="celulaBotaoReiniciar">\n\n          <div class="tooltip">\n\n            <button (click)="recarregaAplicacao()" style="background-color: transparent;">\n\n              <ion-icon class="botaoReiniciar botaoCelula"></ion-icon>\n\n            </button>\n\n            <span class="tooltiptext">Reiniciar</span>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col id="celulaBotaoAleatorio">\n\n          <div class="tooltip">\n\n            <button (click)="geraModoAleatorio()" style="background-color: transparent;">\n\n              <ion-icon class="botaoAleatorio botaoCelula"></ion-icon>\n\n            </button>\n\n            <span class="tooltiptext">Modo Aleatório</span>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col id="celulaBotaoGaleria">\n\n          <div class="tooltip">\n\n            <button (click)="abrirGaleria()" style="background-color: transparent;">\n\n              <ion-icon class="botaoGaleria botaoCelula"></ion-icon>\n\n            </button>\n\n            <span class="tooltiptext">Galeria</span>\n\n          </div>\n\n        </ion-col>\n\n      </div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\smdesign\src\pages\historiador\historiador.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HistoriadorPage);
    return HistoriadorPage;
}());

//# sourceMappingURL=historiador.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map