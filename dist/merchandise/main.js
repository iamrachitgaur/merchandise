(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/Rzx":
/*!************************************!*\
  !*** ./src/app/pipe/split.pipe.ts ***!
  \************************************/
/*! exports provided: SplitPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitPipe", function() { return SplitPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SplitPipe {
    transform(value, separator = ' ') {
        if (!value)
            return;
        // return value.split(separator);
        // Split the string into words and get the first letter of each
        const firstLetters = value.split(' ').map(word => word.charAt(0).toUpperCase());
        // Join the first letters into a single string
        return firstLetters.join('');
    }
}
SplitPipe.ɵfac = function SplitPipe_Factory(t) { return new (t || SplitPipe)(); };
SplitPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "split", type: SplitPipe, pure: true });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\RachitWork\angular_2024\merchProject\merchandise\src\main.ts */"zUnb");


/***/ }),

/***/ "2/dr":
/*!**************************************************************!*\
  !*** ./src/app/component/collection/collection.component.ts ***!
  \**************************************************************/
/*! exports provided: CollectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionComponent", function() { return CollectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer/footer.component */ "xb3B");


class CollectionComponent {
    constructor() { }
    ngOnInit() {
    }
}
CollectionComponent.ɵfac = function CollectionComponent_Factory(t) { return new (t || CollectionComponent)(); };
CollectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CollectionComponent, selectors: [["app-collection"]], decls: 16, vars: 0, consts: [[1, "container-md"], [1, "m-2", "card", "card-collection", "rounded-4"], [1, "card-body"], [1, "d-flex", "gap-3", "align-items-center"], ["src", "https://placehold.co/100x100", 1, "avatar", "rounded-circle"], [1, "heading-4"], [1, "heading-5", "text-gray"], [1, "my-2", "p-2", "badge", "rounded-pill", "fw-light", "heading-5"], [1, "d-flex", "justify-content-center", "align-items-center", "text-gray", 2, "min-height", "500px"]], template: function CollectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Rachit18");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Rachit Gaur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "rachit@example.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " No Products ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-footer");
    } }, directives: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"]], styles: [".card-collection[_ngcontent-%COMP%]{\r\n    background-color: var(--bs-gray-100);\r\n}\r\n.avatar[_ngcontent-%COMP%]{\r\n    width: 100px;\r\n    height: 100px;\r\n}\r\n.text-gray[_ngcontent-%COMP%]{\r\n    color: var(--bs-gray-600);\r\n}\r\n.badge[_ngcontent-%COMP%]{\r\n    background-color: var(--bs-gray-200);\r\n    color: var(--theme-black);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJjb2xsZWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1jb2xsZWN0aW9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnMtZ3JheS0xMDApO1xyXG59XHJcbi5hdmF0YXJ7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcbi50ZXh0LWdyYXl7XHJcbiAgICBjb2xvcjogdmFyKC0tYnMtZ3JheS02MDApO1xyXG59XHJcbi5iYWRnZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJzLWdyYXktMjAwKTtcclxuICAgIGNvbG9yOiB2YXIoLS10aGVtZS1ibGFjayk7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "6uu6":
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class AuthService {
    constructor(http) {
        this.http = http;
        this.loginForm = true;
        this.auth = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false); // {1}
    }
    get authStatus() {
        return this.auth.asObservable(); // {2}
    }
    set authStatusValue(value) {
        this.auth.next(value); // {3}
    }
    showForm() {
        return this.loginForm;
    }
    changeForm() {
        this.loginForm = !this.loginForm;
    }
    getAuthStatus() {
        return this.http.get('./userApi/getAuthStatus');
    }
    signup(cred) {
        return this.http.post('./userApi/signup', cred);
    }
    signin(cred) {
        return this.http.post('./userApi/signin', cred);
    }
    getUser() {
        return this.http.get('./userApi/getUser');
    }
    updateUser(data) {
        return this.http.patch('./userApi/updateUser', data);
    }
    updateProfileImage(image) {
        return this.http.patch('./userApi/updateUserImage', image);
    }
    logout() {
        return this.http.post('./userApi/logout', "logout");
    }
    deleteAccount() {
        return this.http.delete('./userApi/deleteUser');
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "79hO":
/*!********************************************************!*\
  !*** ./src/app/component/tabsbar/tabsbar.component.ts ***!
  \********************************************************/
/*! exports provided: TabsbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsbarComponent", function() { return TabsbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = function () { return { exact: true }; };
class TabsbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
TabsbarComponent.ɵfac = function TabsbarComponent_Factory(t) { return new (t || TabsbarComponent)(); };
TabsbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabsbarComponent, selectors: [["app-tabsbar"]], decls: 19, vars: 2, consts: [[1, "navbar", "navbar-expand-lg", "sticky-bottom", "d-block", "d-md-none"], [1, "container-fluid"], ["routerLinkActive", "active", "routerLink", "/", 1, "nav-link", 3, "routerLinkActiveOptions"], [1, "material-symbols-rounded"], [1, "position-relative"], [1, "p-1"], ["routerLinkActive", "active", "routerLink", "/cart", 1, "nav-link"], [1, "position-absolute", "top-0", "start-100", "translate-middle", "badge", "rounded-pill", "bg-danger"], [1, "visually-hidden"], ["routerLinkActive", "active", "routerLink", "/profile", 1, "nav-link"]], template: function TabsbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " shopping_bag ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " 99+ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "unread messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " favorite ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " person ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".navbar[_ngcontent-%COMP%]{\r\n    background-color: var(--background-color);\r\n    backdrop-filter: blur(12px);\r\n    -webkit-backdrop-filter:blur(12px);\r\n    --bs-navbar-padding-y:0.75rem;\r\n}\r\n.container-fluid[_ngcontent-%COMP%]{\r\n    justify-content: space-evenly;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnNiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlDQUF5QztJQUN6QywyQkFBMkI7SUFDM0Isa0NBQWtDO0lBQ2xDLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDIiwiZmlsZSI6InRhYnNiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KTtcclxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOmJsdXIoMTJweCk7XHJcbiAgICAtLWJzLW5hdmJhci1wYWRkaW5nLXk6MC43NXJlbTtcclxufVxyXG4uY29udGFpbmVyLWZsdWlke1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "7NPz":
/*!**************************************************!*\
  !*** ./src/app/component/cart/cart.component.ts ***!
  \**************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ "xb3B");



function CartComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cally Canali Collection");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Pants");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " $50.00 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CartComponent {
    constructor() {
        this.products = [1, 2, 3, 4, 5];
    }
    ngOnInit() {
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 11, vars: 1, consts: [[1, "container-md"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "my-3", "heading-3"], [1, "badge", "rounded-pill", "text-bg-success"], [1, "my-3"], [1, "m-2", "p-2", "card-orders", "rounded-4", "overflow-x-auto"], ["class", "m-2 card rounded-4", 4, "ngFor", "ngForOf"], [1, "m-2", "card", "rounded-4"], [1, "card-body"], [1, "row", "gap-3"], [1, "col-3"], ["src", "https://placehold.co/80x80", 1, "product-image", "rounded-3"], [1, "col-5"], [1, "heading-5", "text-wrap"], [1, "heading-5", "text-gray"], [1, "col"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " New Orders ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "5 Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CartComponent_div_9_Template, 12, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: [".text-gray[_ngcontent-%COMP%]{\r\n    color: var(--bs-gray-600);\r\n}\r\n.card-orders[_ngcontent-%COMP%]{\r\n        background-color: var(--bs-gray-100);\r\n}\r\n.product-image[_ngcontent-%COMP%]{\r\n    width: 80px;\r\n    height: 80px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO1FBQ1Esb0NBQW9DO0FBQzVDO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsImZpbGUiOiJjYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1ncmF5e1xyXG4gICAgY29sb3I6IHZhcigtLWJzLWdyYXktNjAwKTtcclxufVxyXG4uY2FyZC1vcmRlcnN7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnMtZ3JheS0xMDApO1xyXG59XHJcbi5wcm9kdWN0LWltYWdle1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "AF54":
/*!*************************************************!*\
  !*** ./src/app/interceptor/auth.interceptor.ts ***!
  \*************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/auth.service */ "6uu6");


class AuthInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(request, next) {
        if (localStorage.getItem('token')) {
            request = request.clone({
                headers: request.headers.set('Authorization', localStorage.getItem('token'))
            });
        }
        return next.handle(request);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "E8dp":
/*!**************************************************!*\
  !*** ./src/app/component/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product/product.component */ "tIo2");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ "xb3B");



class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 18, vars: 0, consts: [[1, "container-md"], [1, "my-3", "heading-3"], [1, "mb-5"], [1, "card"], [1, "card-body"], ["id", "carouselExampleAutoplaying", "data-bs-ride", "carousel", "data-bs-touch", "true", 1, "carousel", "slide"], [1, "carousel-inner"], [1, "carousel-item", "active"], [1, "banner", "rounded-4"], [1, "carousel-item"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Explore ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-footer");
    } }, directives: [_product_product_component__WEBPACK_IMPORTED_MODULE_1__["ProductComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: [".banner[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 15rem;\r\n    background-image: url(\"/assets/images/mobile-banner/pexels-shkrabaanthony.jpg\");\r\n    background-position: top center;\r\n    background-size: cover;\r\n    border: 1px solid var(--theme-grey-v2);\r\n}\r\n\r\n@media screen and (max-width:500px) {\r\n    .banner[_ngcontent-%COMP%]{\r\n        height: 12rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsK0VBQStFO0lBQy9FLCtCQUErQjtJQUMvQixzQkFBc0I7SUFDdEIsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0FBQ0oiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhbm5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNXJlbTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL21vYmlsZS1iYW5uZXIvcGV4ZWxzLXNoa3JhYmFhbnRob255LmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGhlbWUtZ3JleS12Mik7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTAwcHgpIHtcclxuICAgIC5iYW5uZXJ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMnJlbTtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "KO4A":
/*!********************************************************!*\
  !*** ./src/app/component/sidebar/sidebar.component.ts ***!
  \********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SidebarComponent {
    constructor() { }
    ngOnInit() {
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 2, vars: 0, template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sidebar works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "ObfR":
/*!******************************************************!*\
  !*** ./src/app/component/navbar/navbar.component.ts ***!
  \******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/auth.service */ "6uu6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pipe_split_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipe/split.pipe */ "/Rzx");





function NavbarComponent_ng_container_25_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", user_r4.user.avatar.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0) { return { "background-color": a0 }; };
function NavbarComponent_ng_container_25_div_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "split");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, user_r4.user.profileColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, user_r4.user.name), " ");
} }
function NavbarComponent_ng_container_25_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavbarComponent_ng_container_25_div_1_div_1_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavbarComponent_ng_container_25_div_1_ng_template_2_Template, 3, 6, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r4 = ctx.ngIf;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r4.user.avatar)("ngIfElse", _r6);
} }
function NavbarComponent_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavbarComponent_ng_container_25_div_1_Template, 4, 2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_ng_container_25_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r0.user$));
} }
function NavbarComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Signup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function () { return { exact: true }; };
class NavbarComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    logout() {
        this.authService.logout().subscribe(() => {
            localStorage.removeItem('token');
            this.authService.authStatusValue = false;
            this.router.navigate(['/auth']);
        });
    }
    ngOnInit() {
        this.isLoggedIn$ = this.authService.authStatus;
        this.user$ = this.authService.getUser();
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 29, vars: 6, consts: [[1, "navbar", "navbar-expand-lg", "sticky-top"], [1, "container-fluid"], [1, "d-flex", "justify-content-center", "align-items-center"], ["routerLink", "/", 1, "navbar-brand"], ["src", "./assets/logo.svg", 2, "width", "30px"], [1, "d-flex", "gap-4"], [1, "d-none", "d-md-flex", "justify-content-center", "align-items-center", "gap-4"], ["routerLinkActive", "active", "routerLink", "/", 1, "nav-link", 3, "routerLinkActiveOptions"], [1, "material-symbols-rounded"], [1, "position-relative"], [1, "p-1"], ["routerLinkActive", "active", "routerLink", "/cart", 1, "nav-link"], [1, "position-absolute", "top-0", "start-100", "translate-middle", "badge", "rounded-pill", "bg-danger"], [1, "visually-hidden"], ["routerLinkActive", "active", "routerLink", "/profile", 1, "nav-link"], [1, "d-flex", "justify-content-center", "align-items-center", "gap-2"], [4, "ngIf", "ngIfElse"], ["loggedOut", ""], [4, "ngIf"], [1, "material-symbols-rounded", 3, "click"], ["defaultAvatar", ""], [1, "avatar", "rounded-circle", 3, "src"], [1, "avatar", "rounded-circle", "d-flex", "justify-content-center", "align-items-center", 3, "ngStyle"], ["routerLink", "/auth", 1, "btn", "btn-sm", "button-blue", "rounded-pill"], ["routerLink", "/auth", 1, "btn", "btn-sm", "button-grey", "rounded-pill"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " shopping_bag ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " 99+ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "unread messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " favorite ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " person ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, NavbarComponent_ng_container_25_Template, 5, 3, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, NavbarComponent_ng_template_27_Template, 4, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 3, ctx.isLoggedIn$))("ngIfElse", _r1);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"], _pipe_split_pipe__WEBPACK_IMPORTED_MODULE_4__["SplitPipe"]], styles: [".navbar[_ngcontent-%COMP%]{\r\n    background-color: var(--background-color);\r\n    backdrop-filter: blur(12px);\r\n    -webkit-backdrop-filter:blur(12px);\r\n    --bs-navbar-padding-y:0.75rem;\r\n}\r\n.navbar-brand[_ngcontent-%COMP%]{\r\n    margin: 0px;\r\n}\r\n.avatar[_ngcontent-%COMP%]{\r\n    width: 35px;\r\n    height: 35px;\r\n    font-size: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUNBQXlDO0lBQ3pDLDJCQUEyQjtJQUMzQixrQ0FBa0M7SUFDbEMsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtBQUNuQiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KTtcclxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOmJsdXIoMTJweCk7XHJcbiAgICAtLWJzLW5hdmJhci1wYWRkaW5nLXk6MC43NXJlbTtcclxufVxyXG4ubmF2YmFyLWJyYW5ke1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLmF2YXRhcntcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59Il19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/auth.service */ "6uu6");
/* harmony import */ var _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/navbar/navbar.component */ "ObfR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _component_tabsbar_tabsbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/tabsbar/tabsbar.component */ "79hO");





class AppComponent {
    constructor(authService) {
        this.authService = authService;
        this.title = 'merchandise';
    }
    ngOnInit() {
        this.authService.getAuthStatus().subscribe((value) => {
            console.log(value);
            this.authService.authStatusValue = value;
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-tabsbar");
    } }, directives: [_component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _component_tabsbar_tabsbar_component__WEBPACK_IMPORTED_MODULE_4__["TabsbarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _interceptor_auth_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interceptor/auth.interceptor */ "AF54");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _component_signup_signin_signup_signin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/signup-signin/signup-signin.component */ "sanC");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/home/home.component */ "E8dp");
/* harmony import */ var _component_cart_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/cart/cart.component */ "7NPz");
/* harmony import */ var _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/navbar/navbar.component */ "ObfR");
/* harmony import */ var _component_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/sidebar/sidebar.component */ "KO4A");
/* harmony import */ var _component_product_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/product/product.component */ "tIo2");
/* harmony import */ var _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/footer/footer.component */ "xb3B");
/* harmony import */ var _component_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/profile/profile.component */ "rID0");
/* harmony import */ var _component_collection_collection_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/collection/collection.component */ "2/dr");
/* harmony import */ var _component_tabsbar_tabsbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/tabsbar/tabsbar.component */ "79hO");
/* harmony import */ var _pipe_split_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pipe/split.pipe */ "/Rzx");
/* harmony import */ var _component_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./component/product-detail/product-detail.component */ "e91P");
/* harmony import */ var _component_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./component/add-product/add-product.component */ "zsBM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ "fXoL");




















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _interceptor_auth_interceptor__WEBPACK_IMPORTED_MODULE_3__["AuthInterceptor"], multi: true }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _component_signup_signin_signup_signin_component__WEBPACK_IMPORTED_MODULE_6__["SignupSigninComponent"],
        _component_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _component_cart_cart_component__WEBPACK_IMPORTED_MODULE_8__["CartComponent"],
        _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
        _component_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"],
        _component_product_product_component__WEBPACK_IMPORTED_MODULE_11__["ProductComponent"],
        _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
        _component_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
        _component_collection_collection_component__WEBPACK_IMPORTED_MODULE_14__["CollectionComponent"],
        _component_tabsbar_tabsbar_component__WEBPACK_IMPORTED_MODULE_15__["TabsbarComponent"],
        _pipe_split_pipe__WEBPACK_IMPORTED_MODULE_16__["SplitPipe"],
        _component_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_17__["ProductDetailComponent"],
        _component_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_18__["AddProductComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();


/***/ }),

/***/ "cT6d":
/*!*************************************!*\
  !*** ./src/app/guard/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/auth.service */ "6uu6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        return this.authService.getAuthStatus().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((value) => {
            if (value == false) {
                console.log(value);
                this.router.navigate(['/auth']);
            }
            return value;
        }));
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "e91P":
/*!**********************************************************************!*\
  !*** ./src/app/component/product-detail/product-detail.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ProductDetailComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductDetailComponent.ɵfac = function ProductDetailComponent_Factory(t) { return new (t || ProductDetailComponent)(); };
ProductDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductDetailComponent, selectors: [["app-product-detail"]], decls: 48, vars: 0, consts: [[1, "container-md"], [1, "row", "gap-3"], [1, "col-md-5"], ["src", "https://placehold.co/300x300", 1, "rounded-4"], [1, "col-md"], [1, "my-4"], [1, "my-3", "heading-3", "text-truncate", "fw-semibold"], [1, "my-2", "heading-4"], [1, "heading-5", "text-justify"], [1, "my-3", "py-2", "px-3", "d-flex", "justify-content-between", "align-item-center", "button-group", "rounded-4", 2, "width", "200px"], [1, "material-symbols-rounded", "icon"], [1, ""], [1, "py-3"], ["type", "button", 1, "px-5", "btn", "btn-sm", "button-blue", "rounded-pill"], [1, "my-3", "heading-3"], [1, "m-2", "card", "card-owner", "rounded-4"], [1, "card-body"], [1, "d-flex", "gap-3", "align-items-center"], ["src", "https://placehold.co/100x100", 1, "avatar", "rounded-circle"], [1, "heading-4"], [1, "heading-5", "text-gray"], [1, "my-2", "p-2", "badge", "rounded-pill", "fw-light", "heading-5"]], template: function ProductDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "STMPD LIQUID HOODIE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "$ 200");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " remove ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Product Owner ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Rachit18");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Rachit Gaur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "rachit@example.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Rachit18");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Rachit Gaur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "rachit@example.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".card-owner[_ngcontent-%COMP%]{\r\n    background-color: var(--bs-gray-100);\r\n}\r\n.badge[_ngcontent-%COMP%]{\r\n    background-color: var(--bs-gray-200);\r\n    color: var(--theme-black);\r\n}\r\n.button-group[_ngcontent-%COMP%]{\r\n    background-color: var(--bs-gray-200);\r\n}\r\n.icon[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n    -webkit-user-select: none;\r\n            user-select: none;\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksZUFBZTtJQUNmLHlCQUFpQjtZQUFqQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQiIsImZpbGUiOiJwcm9kdWN0LWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtb3duZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icy1ncmF5LTEwMCk7XHJcbn1cclxuLmJhZGdle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnMtZ3JheS0yMDApO1xyXG4gICAgY29sb3I6IHZhcigtLXRoZW1lLWJsYWNrKTtcclxufVxyXG4uYnV0dG9uLWdyb3Vwe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnMtZ3JheS0yMDApO1xyXG59XHJcbi5pY29ue1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "rID0":
/*!********************************************************!*\
  !*** ./src/app/component/profile/profile.component.ts ***!
  \********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth.service */ "6uu6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pipe_split_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipe/split.pipe */ "/Rzx");







function ProfileComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", user_r5.user.avatar.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0) { return { "background-color": a0 }; };
function ProfileComponent_div_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "split");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, user_r5.user.profileColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, user_r5.user.name), " ");
} }
function ProfileComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfileComponent_div_1_div_1_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProfileComponent_div_1_ng_template_2_Template, 3, 6, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 32, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ProfileComponent_div_1_Template_input_change_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.uploadProfileImage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_1_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13); return _r9.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Add Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Remove Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r5 = ctx.ngIf;
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", user_r5.user.avatar)("ngIfElse", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r5.user.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r5.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r5.user.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !user_r5.user.avatar);
} }
function ProfileComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Username is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_12_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Username must be at least 2 characters long.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfileComponent_div_12_div_1_Template, 2, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProfileComponent_div_12_div_2_Template, 2, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.userForm.get("username").errors == null ? null : ctx_r1.userForm.get("username").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.userForm.get("username").errors == null ? null : ctx_r1.userForm.get("username").errors.minlength);
} }
function ProfileComponent_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfileComponent_div_17_div_1_Template, 2, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.userForm.get("name").errors == null ? null : ctx_r2.userForm.get("name").errors.required);
} }
function ProfileComponent_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_22_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please enter a valid email address.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfileComponent_div_22_div_1_Template, 2, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProfileComponent_div_22_div_2_Template, 2, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.userForm.get("email").errors == null ? null : ctx_r3.userForm.get("email").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.userForm.get("email").errors == null ? null : ctx_r3.userForm.get("email").errors.email);
} }
function ProfileComponent_div_32_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password must be at least 6 characters long.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfileComponent_div_32_div_1_Template, 2, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.userForm.get("password").errors == null ? null : ctx_r4.userForm.get("password").errors.minlength);
} }
const _c1 = function (a0) { return { "is-invalid": a0 }; };
class ProfileComponent {
    constructor(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
    }
    uploadProfileImage(event) {
        if (event.target.files[0] != undefined) {
            console.log(event.target.files[0]);
            const formData = new FormData();
            formData.append('avatar', event.target.files[0]);
            this.authService.updateProfileImage(formData).subscribe((data) => {
                console.log(data);
            });
        }
    }
    updateProfile() {
        if (this.userForm.valid) {
            var body = {};
            Object.keys(this.userForm.controls).forEach(key => {
                const control = this.userForm.get(key);
                if (control.dirty) {
                    body[key] = control.value;
                }
            });
            this.user$ = this.authService.updateUser(body);
        }
    }
    deleteMyAccount() {
        console.log('Account Deleted');
        this.authService.deleteAccount().subscribe((data) => {
            console.log("done");
            localStorage.removeItem('token');
            this.authService.authStatusValue = false;
            this.router.navigate(['/auth']);
        });
    }
    ngOnInit() {
        this.user$ = this.authService.getUser();
        this.userForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(2)]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6)]]
        });
        this.authService.getUser().subscribe((data) => {
            this.userForm.patchValue({ username: data.user.username, name: data.user.name, email: data.user.email });
        });
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 51, vars: 22, consts: [[1, "container-md"], ["class", "text-center", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-md"], [1, "m-2", "card", "card-profile", "rounded-4"], [1, "card-body"], [1, "mb-3"], ["for", "username", 1, "form-label"], ["id", "username", "type", "text", "formControlName", "username", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "name", 1, "form-label"], ["id", "name", "type", "text", "formControlName", "name", 1, "form-control", 3, "ngClass"], ["for", "email", 1, "form-label"], ["id", "email", "type", "email", "formControlName", "email", 1, "form-control", 3, "ngClass"], ["type", "submit", 1, "btn", "btn-sm", "button-blue", "rounded-pill", 3, "disabled"], [1, "col-md-4"], ["for", "password", 1, "form-label"], ["id", "password", "type", "password", "formControlName", "password", 1, "form-control", 3, "ngClass"], [1, "heading-4"], [1, "heading-5"], [1, "btn", "btn-sm", "button-blue", "rounded-pill"], [1, "m-2", "card", "bg-danger", "bg-opacity-25", "rounded-4"], [1, "btn", "btn-sm", "text-white", "bg-danger", "rounded-pill", 3, "click"], [1, "text-center"], [4, "ngIf", "ngIfElse"], ["defaultAvatar", ""], [1, "mb-5"], [1, "heading-2"], [1, "heading-4", "text-gray"], [1, "my-2", "p-2", "badge", "rounded-pill", "fw-light", "heading-5"], [1, "py-3", "d-flex", "justify-content-center", "gap-2"], ["type", "file", "name", "avatar", 2, "visibility", "hidden", "width", "0px", "height", "0px", 3, "change"], ["avatar", ""], [1, "btn", "btn-sm", "button-blue", "rounded-pill", 3, "click"], [1, "btn", "btn-sm", "button-grey", "rounded-pill", 3, "disabled"], [1, "my-3", "avatar", "rounded-circle", 3, "src"], [1, "mx-auto", "my-3", "avatar", "rounded-circle", "d-flex", "justify-content-center", "align-items-center", 3, "ngStyle"], [1, "invalid-feedback"], [4, "ngIf"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfileComponent_div_1_Template, 18, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ProfileComponent_Template_form_ngSubmit_3_listener() { return ctx.updateProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ProfileComponent_div_12_Template, 3, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ProfileComponent_div_17_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Your Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ProfileComponent_div_22_Template, 3, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Save Changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, ProfileComponent_div_32_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Update Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Merchant Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Get a Merchant Account. For Selling Products.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Apply Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Danger Zone");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Delete My Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_49_listener() { return ctx.deleteMyAccount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Delete Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_11_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 12, ctx.user$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c1, ctx.userForm.get("username").invalid && (ctx.userForm.get("username").dirty || ctx.userForm.get("username").touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userForm.get("username").invalid && (ctx.userForm.get("username").dirty || ctx.userForm.get("username").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](16, _c1, ctx.userForm.get("name").invalid && (ctx.userForm.get("name").dirty || ctx.userForm.get("name").touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userForm.get("name").invalid && (ctx.userForm.get("name").dirty || ctx.userForm.get("name").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](18, _c1, ctx.userForm.get("email").invalid && (ctx.userForm.get("email").dirty || ctx.userForm.get("email").touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userForm.get("email").invalid && (ctx.userForm.get("email").dirty || ctx.userForm.get("email").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.userForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](20, _c1, ctx.userForm.get("password").invalid && (ctx.userForm.get("password").dirty || ctx.userForm.get("password").touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userForm.get("password").invalid && (ctx.userForm.get("password").dirty || ctx.userForm.get("password").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.userForm.invalid || ((tmp_11_0 = ctx.userForm.get("password")) == null ? null : tmp_11_0.value.length) == 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], _pipe_split_pipe__WEBPACK_IMPORTED_MODULE_5__["SplitPipe"]], styles: [".avatar[_ngcontent-%COMP%]{\r\n    width: 150px;\r\n    height: 150px;\r\n    font-size: 40px;\r\n}\r\n.text-gray[_ngcontent-%COMP%]{\r\n    color: var(--bs-gray-600);\r\n}\r\n.badge[_ngcontent-%COMP%]{\r\n    background-color: var(--bs-gray-200);\r\n    color: var(--theme-black);\r\n}\r\n.card-profile[_ngcontent-%COMP%]{\r\n    background-color: var(--bs-gray-100);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtBQUNuQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxvQ0FBb0M7QUFDeEMiLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF2YXRhcntcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuLnRleHQtZ3JheXtcclxuICAgIGNvbG9yOiB2YXIoLS1icy1ncmF5LTYwMCk7XHJcbn1cclxuLmJhZGdle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnMtZ3JheS0yMDApO1xyXG4gICAgY29sb3I6IHZhcigtLXRoZW1lLWJsYWNrKTtcclxufVxyXG4uY2FyZC1wcm9maWxle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnMtZ3JheS0xMDApO1xyXG59Il19 */"] });


/***/ }),

/***/ "sanC":
/*!********************************************************************!*\
  !*** ./src/app/component/signup-signin/signup-signin.component.ts ***!
  \********************************************************************/
/*! exports provided: SignupSigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupSigninComponent", function() { return SignupSigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/auth.service */ "6uu6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function SignupSigninComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " error ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage.error, " ");
} }
function SignupSigninComponent_div_7_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SignupSigninComponent_div_7_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please enter a valid email address.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SignupSigninComponent_div_7_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SignupSigninComponent_div_7_div_9_div_1_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SignupSigninComponent_div_7_div_9_div_2_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.signinForm.get("email").errors == null ? null : ctx_r3.signinForm.get("email").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.signinForm.get("email").errors == null ? null : ctx_r3.signinForm.get("email").errors.email);
} }
function SignupSigninComponent_div_7_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Password is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SignupSigninComponent_div_7_div_14_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Password must be at least 6 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SignupSigninComponent_div_7_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SignupSigninComponent_div_7_div_14_div_1_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SignupSigninComponent_div_7_div_14_div_2_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.signinForm.get("password").errors == null ? null : ctx_r4.signinForm.get("password").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.signinForm.get("password").errors == null ? null : ctx_r4.signinForm.get("password").errors.minlength);
} }
function SignupSigninComponent_div_7_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SignupSigninComponent_div_7_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "path", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function SignupSigninComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Hey friend! Welcome back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function SignupSigninComponent_div_7_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.SignupSigninForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, SignupSigninComponent_div_7_div_9_Template, 3, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, SignupSigninComponent_div_7_div_14_Template, 3, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, SignupSigninComponent_div_7_span_17_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, SignupSigninComponent_div_7_span_18_Template, 3, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Don't have an account? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SignupSigninComponent_div_7_Template_span_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.changeForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_5_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.signinForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c0, ctx_r1.signinForm.get("email").invalid && (ctx_r1.signinForm.get("email").dirty || ctx_r1.signinForm.get("email").touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.signinForm.get("email").invalid && (ctx_r1.signinForm.get("email").dirty || ctx_r1.signinForm.get("email").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c0, ctx_r1.signinForm.get("password").invalid && (ctx_r1.signinForm.get("password").dirty || ctx_r1.signinForm.get("password").touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.signinForm.get("password").invalid && (ctx_r1.signinForm.get("password").dirty || ctx_r1.signinForm.get("password").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.signinForm.invalid || ctx_r1.inSubmission || ((tmp_5_0 = ctx_r1.signinForm.get("password")) == null ? null : tmp_5_0.value.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.inSubmission);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.inSubmission);
} }
function SignupSigninComponent_div_8_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Username is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SignupSigninComponent_div_8_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Username must be at least 2 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SignupSigninComponent_div_8_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SignupSigninComponent_div_8_div_8_div_1_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SignupSigninComponent_div_8_div_8_div_2_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r14.signupForm.get("username").errors == null ? null : ctx_r14.signupForm.get("username").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r14.signupForm.get("username").errors == null ? null : ctx_r14.signupForm.get("username").errors.minlength);
} }
function SignupSigninComponent_div_8_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SignupSigninComponent_div_8_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SignupSigninComponent_div_8_div_13_div_1_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r15.signupForm.get("name").errors == null ? null : ctx_r15.signupForm.get("name").errors.required);
} }
function SignupSigninComponent_div_8_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SignupSigninComponent_div_8_div_18_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please enter a valid email address.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SignupSigninComponent_div_8_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SignupSigninComponent_div_8_div_18_div_1_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SignupSigninComponent_div_8_div_18_div_2_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r16.signupForm.get("email").errors == null ? null : ctx_r16.signupForm.get("email").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r16.signupForm.get("email").errors == null ? null : ctx_r16.signupForm.get("email").errors.email);
} }
function SignupSigninComponent_div_8_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Password is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SignupSigninComponent_div_8_div_23_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Password must be at least 6 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SignupSigninComponent_div_8_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SignupSigninComponent_div_8_div_23_div_1_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SignupSigninComponent_div_8_div_23_div_2_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r17.signupForm.get("password").errors == null ? null : ctx_r17.signupForm.get("password").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r17.signupForm.get("password").errors == null ? null : ctx_r17.signupForm.get("password").errors.minlength);
} }
function SignupSigninComponent_div_8_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Sign Up ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SignupSigninComponent_div_8_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "path", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SignupSigninComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Create Your Account!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function SignupSigninComponent_div_8_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r27.SignupSigninForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, SignupSigninComponent_div_8_div_8_Template, 3, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, SignupSigninComponent_div_8_div_13_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, SignupSigninComponent_div_8_div_18_Template, 3, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, SignupSigninComponent_div_8_div_23_Template, 3, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, SignupSigninComponent_div_8_span_26_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, SignupSigninComponent_div_8_span_27_Template, 3, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Already have an account? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SignupSigninComponent_div_8_Template_span_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r29.changeForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_9_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r2.signupForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](12, _c0, ctx_r2.signupForm.get("username").invalid && (ctx_r2.signupForm.get("username").dirty || ctx_r2.signupForm.get("username").touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.signupForm.get("username").invalid && (ctx_r2.signupForm.get("username").dirty || ctx_r2.signupForm.get("username").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](14, _c0, ctx_r2.signupForm.get("name").invalid && (ctx_r2.signupForm.get("name").dirty || ctx_r2.signupForm.get("name").touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.signupForm.get("name").invalid && (ctx_r2.signupForm.get("name").dirty || ctx_r2.signupForm.get("name").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](16, _c0, ctx_r2.signupForm.get("email").invalid && (ctx_r2.signupForm.get("email").dirty || ctx_r2.signupForm.get("email").touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.signupForm.get("email").invalid && (ctx_r2.signupForm.get("email").dirty || ctx_r2.signupForm.get("email").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](18, _c0, ctx_r2.signupForm.get("password").invalid && (ctx_r2.signupForm.get("password").dirty || ctx_r2.signupForm.get("password").touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.signupForm.get("password").invalid && (ctx_r2.signupForm.get("password").dirty || ctx_r2.signupForm.get("password").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r2.signupForm.invalid || ctx_r2.inSubmission || ((tmp_9_0 = ctx_r2.signupForm.get("password")) == null ? null : tmp_9_0.value.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r2.inSubmission);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.inSubmission);
} }
class SignupSigninComponent {
    constructor(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.inSubmission = false;
    }
    SignupSigninForm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.inSubmission = true;
            try {
                if (this.authService.showForm()) {
                    console.log(this.signinForm.value);
                    this.authService.signin(this.signinForm.value).subscribe((userData) => {
                        console.log(userData);
                        this.inSubmission = false;
                        localStorage.setItem('token', `Bearer ${userData.token}`);
                        this.authService.authStatusValue = true;
                        this.router.navigate(['/']);
                    }, (error) => {
                        this.inSubmission = false;
                        this.errorMessage = error.error;
                    });
                }
                else {
                    console.log(this.signupForm.value);
                    this.authService.signup(this.signupForm.value).subscribe((userData) => {
                        console.log(userData);
                        this.inSubmission = false;
                        localStorage.setItem('token', `Bearer ${userData.token}`);
                        this.authService.authStatusValue = true;
                        this.router.navigate(['/']);
                    }, (error) => {
                        this.inSubmission = false;
                        this.errorMessage = error.error;
                    });
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    changeForm() {
        this.authService.changeForm();
    }
    ngOnInit() {
        this.signinForm = this.formBuilder.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]]
        });
        this.signupForm = this.formBuilder.group({
            username: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]]
        });
    }
}
SignupSigninComponent.ɵfac = function SignupSigninComponent_Factory(t) { return new (t || SignupSigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
SignupSigninComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SignupSigninComponent, selectors: [["app-signup-signin"]], decls: 14, vars: 3, consts: [[1, "container"], [1, "card-grid"], [1, "card"], [1, "card-body"], [1, "py-5", "heading-2", "text-center"], ["class", "alert alert-danger d-flex align-items-center gap-2", "role", "alert", 4, "ngIf"], [4, "ngIf"], [1, "py-5"], [1, "heading-5", "fw-light", "text-center", "text-gray"], [1, "heading-4", "fw-light", "text-center"], ["role", "alert", 1, "alert", "alert-danger", "d-flex", "align-items-center", "gap-2"], [1, "material-symbols-rounded"], [1, "py-3", "heading-4", "fw-light", "text-center"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "mb-3"], ["for", "loginEmail", 1, "form-label"], ["type", "email", "id", "loginEmail", "formControlName", "email", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "loginPassword", 1, "form-label"], ["type", "password", "id", "loginPassword", "formControlName", "password", 1, "form-control", 3, "ngClass"], [1, "d-grid", "gap-2"], ["type", "submit", 1, "btn", "btn-sm", "button-blue", "rounded-3", 3, "disabled"], [1, "text-center"], [1, "text-primary", 2, "cursor", "pointer", 3, "click"], [1, "invalid-feedback"], ["xmlns", "http://www.w3.org/2000/svg", "height", "20px", "viewBox", "0 -960 960 960", "width", "20px", "fill", "var(--theme-white)", 1, "material-loading"], ["d", "M480-96q-78.72 0-148.8-30.24-70.08-30.24-122.4-82.56-52.32-52.32-82.56-122.4Q96-401.28 96-480q0-79.68\n                       30.22-149.28 30.21-69.6 82.49-121.92 52.28-52.32 122.3-82.56Q401.04-864 479.69-864 496-864 506-854t10 25.51q0\n                        15.51-10 26T480-792q-129.67 0-220.84 90.5Q168-611 168-480.5T259.16-259q91.17 91 220.84 91 131 0 \n                        221.5-91.16Q792-350.33 792-480q0-16 10.49-26t26-10Q844-516 854-506q10 10 10 26.31 0 78.65-30.24 \n                        148.68-30.24 70.02-82.56 122.3-52.32 52.28-121.92 82.49Q559.68-96 480-96Z"], ["for", "username", 1, "form-label"], ["type", "text", "id", "username", "formControlName", "username", 1, "form-control", 3, "ngClass"], ["for", "signupName", 1, "form-label"], ["type", "text", "id", "signupName", "formControlName", "name", 1, "form-control", 3, "ngClass"], ["for", "signupEmail", 1, "form-label"], ["type", "email", "id", "signupEmail", "formControlName", "email", 1, "form-control", 3, "ngClass"], ["for", "signupPassword", 1, "form-label"], ["type", "password", "id", "signupPassword", "formControlName", "password", 1, "form-control", 3, "ngClass"], ["d", "M480-96q-78.72 0-148.8-30.24-70.08-30.24-122.4-82.56-52.32-52.32-82.56-122.4Q96-401.28 96-480q0-79.68\n                     30.22-149.28 30.21-69.6 82.49-121.92 52.28-52.32 122.3-82.56Q401.04-864 479.69-864 496-864 506-854t10 25.51q0\n                      15.51-10 26T480-792q-129.67 0-220.84 90.5Q168-611 168-480.5T259.16-259q91.17 91 220.84 91 131 0 \n                      221.5-91.16Q792-350.33 792-480q0-16 10.49-26t26-10Q844-516 854-506q10 10 10 26.31 0 78.65-30.24 \n                      148.68-30.24 70.02-82.56 122.3-52.32 52.28-121.92 82.49Q559.68-96 480-96Z"]], template: function SignupSigninComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Merchandise ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, SignupSigninComponent_div_6_Template, 5, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, SignupSigninComponent_div_7_Template, 25, 12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, SignupSigninComponent_div_8_Template, 34, 20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Powered by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Merchandise");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.authService.showForm());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.authService.showForm());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: [".card-grid[_ngcontent-%COMP%]{\r\n    display: grid;\r\n    grid-template-columns: repeat( auto-fit, minmax(300px, 350px) );\r\n    justify-content: center;\r\n    grid-gap: 2rem;\r\n}\r\n.text-gray[_ngcontent-%COMP%]{\r\n    color: var(--bs-gray-500);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC1zaWduaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiwrREFBK0Q7SUFDL0QsdUJBQXVCO0lBQ3ZCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzaWdudXAtc2lnbmluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1ncmlke1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KCBhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAzNTBweCkgKTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZ3JpZC1nYXA6IDJyZW07XHJcbn1cclxuLnRleHQtZ3JheXtcclxuICAgIGNvbG9yOiB2YXIoLS1icy1ncmF5LTUwMCk7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "tIo2":
/*!********************************************************!*\
  !*** ./src/app/component/product/product.component.ts ***!
  \********************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ProductComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductComponent.ɵfac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(); };
ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductComponent, selectors: [["app-product"]], decls: 43, vars: 0, consts: [[1, "my-3"], ["data-bs-toggle", "collapse", "data-bs-target", "#collapseFilter", "aria-expanded", "false", "aria-controls", "collapseFilter", 1, "btn", "btn-sm", "button-grey", "rounded-pill"], [1, "d-flex", "align-items-center", "gap-1"], [1, "material-symbols-rounded"], ["id", "collapseFilter", 1, "collapse"], [1, "m-2", "card", "card-body"], [1, "py-3"], [1, "card-grid"], [1, "card"], [1, "card-header"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "p-1", "d-flex"], [1, "avatar", "avatar-stack", "rounded-circle", "d-flex", "justify-content-center", "align-items-center"], [1, "avatar", "avatar-stack", "avatar-more", "rounded-circle", "d-flex", "justify-content-center", "align-items-center"], [1, "p-1", "card-heading", "text-truncate"], [1, "card-body"], ["src", "/assets/images/products/DSC19823.webp", 1, "product-image"], [1, "card-footer"], [1, "text-truncate", "fw-semibold"], [1, "py-2", "d-grid"], ["type", "button", 1, "btn", "btn-sm", "button-blue", "rounded-pill"]], template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " tune ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Filters ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "RG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "RG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "+3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "rachit18");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u00A0and\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "4\u00A0others");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " favorite ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "STMPD LIQUID HOODIE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "$ 200");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".card-grid[_ngcontent-%COMP%]{\r\n    display: grid;\r\n    grid-template-columns: repeat( auto-fit, minmax(300px, 350px) );\r\n    justify-content: center;\r\n    grid-gap: 2rem;\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n    border-radius: 0.9rem;\r\n    overflow: hidden;\r\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\r\n}\r\n.card-header[_ngcontent-%COMP%], .card-footer[_ngcontent-%COMP%]{\r\n    background-color: var(--theme-white);\r\n}\r\n.avatar-stack[_ngcontent-%COMP%]{\r\n position: relative;\r\n margin-right: -10px;   \r\n}\r\n.avatar-more[_ngcontent-%COMP%]{\r\n    background-color: var(--bs-gray-500) !important;\r\n    color: var(--theme-white);    \r\n}\r\n.avatar[_ngcontent-%COMP%]{\r\n    width: 30px;\r\n    height: 30px;\r\n    background-color: var(--light-green);\r\n    font-size: 10px;\r\n}\r\n.card-heading[_ngcontent-%COMP%]{\r\n    margin-left: 10px;\r\n    font-size: 15px;\r\n}\r\n.product-image[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7QUFDSDs7OztHQUlHO0FBQ0g7SUFDSSxhQUFhO0lBQ2IsK0RBQStEO0lBQy9ELHVCQUF1QjtJQUN2QixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLHdGQUF3RjtBQUM1RjtBQUNBO0lBQ0ksb0NBQW9DO0FBQ3hDO0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsbUJBQW1CO0FBQ3BCO0FBQ0E7SUFDSSwrQ0FBK0M7SUFDL0MseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InByb2R1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5jYXRlZ29yaWVze1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdGhlbWUtYmxhY2spO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59ICovXHJcbi8qIC5hY3RpdmV7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10aGVtZS1ibGFjayk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1ibGFjayk7XHJcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtd2hpdGUpO1xyXG59ICovXHJcbi5jYXJkLWdyaWR7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoIGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDM1MHB4KSApO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBncmlkLWdhcDogMnJlbTtcclxufVxyXG4uY2FyZHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuOXJlbTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDBweCAycHggNXB4IC0xcHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggMXB4IDNweCAtMXB4O1xyXG59XHJcbi5jYXJkLWhlYWRlciwuY2FyZC1mb290ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS13aGl0ZSk7XHJcbn1cclxuLmF2YXRhci1zdGFja3tcclxuIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuIG1hcmdpbi1yaWdodDogLTEwcHg7ICAgXHJcbn1cclxuLmF2YXRhci1tb3Jle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnMtZ3JheS01MDApICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtd2hpdGUpOyAgICBcclxufVxyXG4uYXZhdGFye1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmVlbik7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuLmNhcmQtaGVhZGluZ3tcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi5wcm9kdWN0LWltYWdle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _component_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/add-product/add-product.component */ "zsBM");
/* harmony import */ var _component_cart_cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/cart/cart.component */ "7NPz");
/* harmony import */ var _component_collection_collection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/collection/collection.component */ "2/dr");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/home/home.component */ "E8dp");
/* harmony import */ var _component_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/product-detail/product-detail.component */ "e91P");
/* harmony import */ var _component_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/profile/profile.component */ "rID0");
/* harmony import */ var _component_signup_signin_signup_signin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/signup-signin/signup-signin.component */ "sanC");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guard/auth.guard */ "cT6d");
/* harmony import */ var _guard_unauth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guard/unauth.guard */ "yyaJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");












const routes = [
    { path: 'auth', component: _component_signup_signin_signup_signin_component__WEBPACK_IMPORTED_MODULE_7__["SignupSigninComponent"], canActivate: [_guard_unauth_guard__WEBPACK_IMPORTED_MODULE_9__["UnauthGuard"]] },
    { path: '', component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'collection', component: _component_collection_collection_component__WEBPACK_IMPORTED_MODULE_3__["CollectionComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'product/:id', component: _component_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_5__["ProductDetailComponent"] },
    { path: 'addproduct', component: _component_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_1__["AddProductComponent"] },
    { path: 'cart', component: _component_cart_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'profile', component: _component_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xb3B":
/*!******************************************************!*\
  !*** ./src/app/component/footer/footer.component.ts ***!
  \******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 20, vars: 0, consts: [[1, "footer"], [1, "container-fluid"], [1, "py-3"], ["routerLink", "/", 1, "navbar-brand"], [1, "row"], [1, "col-lg-6", "col-md-12", "mb-4", "mb-md-0"], [1, "text-uppercase"], [1, "text-center"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " LOGO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Footer text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam, est atque cumque eum delectus sint! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Footer text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam, est atque cumque eum delectus sint! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " \u00A9 2024 Copyright: LOGO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".footer[_ngcontent-%COMP%]{\r\n    background-color: var(--theme-black);\r\n    color: var(--theme-white);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DO0lBQ3BDLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1ibGFjayk7XHJcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtd2hpdGUpO1xyXG59Il19 */"] });


/***/ }),

/***/ "yyaJ":
/*!***************************************!*\
  !*** ./src/app/guard/unauth.guard.ts ***!
  \***************************************/
/*! exports provided: UnauthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnauthGuard", function() { return UnauthGuard; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/auth.service */ "6uu6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class UnauthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        return this.authService.getAuthStatus().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((value) => {
            if (value == true) {
                console.log(value);
                this.router.navigate(['/']);
            }
            return !value;
        }));
    }
}
UnauthGuard.ɵfac = function UnauthGuard_Factory(t) { return new (t || UnauthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
UnauthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UnauthGuard, factory: UnauthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zsBM":
/*!****************************************************************!*\
  !*** ./src/app/component/add-product/add-product.component.ts ***!
  \****************************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function AddProductComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Product name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddProductComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Product image URL is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddProductComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Price is required and must be a positive number. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddProductComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Description is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class AddProductComponent {
    constructor(fb) {
        this.fb = fb;
        this.imagePreview = null;
    }
    uploadProductImage(event) {
        console.log(event.target.files[0]);
        this.productImage = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            this.imagePreview = reader.result;
        };
        reader.readAsDataURL(this.productImage);
        this.productForm.patchValue({ 'product_image': this.productImage });
    }
    addProduct() {
        if (this.productForm.valid) {
            console.log(this.productForm.value);
            // Here you would typically send the form data to a service
        }
    }
    ngOnInit() {
        this.productForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            product_image: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(0)]],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
    }
}
AddProductComponent.ɵfac = function AddProductComponent_Factory(t) { return new (t || AddProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
AddProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddProductComponent, selectors: [["app-add-product"]], decls: 32, vars: 7, consts: [[1, "container", "mt-5"], [1, "my-3", "heading-3"], ["novalidate", "", 1, "needs-validation", 3, "formGroup", "ngSubmit"], [1, "py-3"], ["alt", "product_image", 1, "product_image", "rounded-2", 3, "src"], [1, "mb-3"], ["for", "name", 1, "form-label"], ["type", "text", "id", "name", "formControlName", "name", "required", "", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "product_image", 1, "form-label"], ["type", "file", "id", "product_image", "formControlName", "product_image", "required", "", 1, "p-0", "form-control", 2, "visibility", "hidden", "width", "0px", "height", "0px", 3, "change"], ["productImage", ""], [1, "btn", "btn-sm", "button-blue", "rounded-pill", 3, "click"], ["for", "price", 1, "form-label"], ["type", "number", "id", "price", "formControlName", "price", "required", "", "min", "0", "step", "0.01", 1, "form-control"], ["for", "description", 1, "form-label"], ["id", "description", "formControlName", "description", "rows", "3", "required", "", 1, "form-control"], ["type", "submit", 1, "btn", "btn-sm", "button-blue", "rounded-pill", 3, "disabled"], [1, "invalid-feedback"]], template: function AddProductComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Add Product ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddProductComponent_Template_form_ngSubmit_3_listener() { return ctx.addProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AddProductComponent_div_10_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Product Image URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AddProductComponent_Template_input_change_14_listener($event) { return ctx.uploadProductImage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddProductComponent_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15); return _r1.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Product Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, AddProductComponent_div_18_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, AddProductComponent_div_23_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "textarea", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, AddProductComponent_div_28_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Add Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.productForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.imagePreview ? ctx.imagePreview : "https://placehold.co/300x300?text=No+Preview", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.productForm.get("name").invalid && (ctx.productForm.get("name").dirty || ctx.productForm.get("name").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.productForm.get("product_image").invalid && (ctx.productForm.get("product_image").dirty || ctx.productForm.get("product_image").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.productForm.get("price").invalid && (ctx.productForm.get("price").dirty || ctx.productForm.get("price").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.productForm.get("description").invalid && (ctx.productForm.get("description").dirty || ctx.productForm.get("description").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.productForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"]], styles: [".product_image[_ngcontent-%COMP%]{\r\n    width: 150px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1wcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6ImFkZC1wcm9kdWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdF9pbWFnZXtcclxuICAgIHdpZHRoOiAxNTBweDtcclxufSJdfQ== */"] });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map