webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__ = __webpack_require__("../../../../../src/app/lists/lists.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_constants__ = __webpack_require__("../../../../../src/app/utils/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__ = __webpack_require__("../../../../../src/app/resolvers/resolvers.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// core


// components

// constants

// resolvers

// variables
var routes = [
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_BANCURI_ANIMALE,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_BANCURI_DIVERSE,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_CULMI,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_GHICITORI,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_FABULE,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_POEZII,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_POVESTI,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_JOCURI_MEMORY_GAME,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        data: {
            data: [
                {
                    'banc': 'lorem'
                }
            ]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_JOCURI_APA_APA_FOC_FOC,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_JOCURI_CAPRA,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_JOCURI_CASTELUL_123,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_JOCURI_LAPTE_GROS,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_JOCURI_INCETUL_CU_INCETUL_SE_FABRICA_OTETUL,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_JOCURI_SOTRONUL,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_JOCURI_NUMARATORI,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_WALLPAPERS,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        data: {
            data: [
                {
                    'banc': 'lorem'
                }
            ]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_ANUNTURI_ROMANESTI,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_CARTI_CRESTINE,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_CARTI_INTERESANTE,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_TOP_DESENE,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_TOP_FILME,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_TOP_LISTE_UIMITOARE,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_GIFS_COOL,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_GIFS_FAIL,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_GIFS_FUNNY,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_GIFS_INTERESTING,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_GIFS_WOW,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_GIFS_REACTION,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_YOUTUBE_DOCUMENTARIES,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_YOUTUBE_FUNNY,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_YOUTUBE_CHANNELS,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_MUSIC_CALM,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_MUSIC_CHILL,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_MUSIC_CLUB,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_MUSIC_SPACE_OUT,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_AFORSIME_MAXIME,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_CREZUL_CRESTIN,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_EREZII,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_SFINTII_PARINTI,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_DICTONURI,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_EXPRESII,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_SANATATE,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_POVETE,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_SUPERSTITII,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_CITATE_ABRAHAM_LINCOLN,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_CITATE_ALBERT_EINSTEIN,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_CITATE_ARISTOTEL,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_CITATE_BENJAMIN_FRANKLIN,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_CITATE_BUDDHA,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_CITATE_CONFUCIUS,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_CITATE_DALAI_LAMA,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_CITATE_DEMOCRIT,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_CITATE_EURIPIDE,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_CITATE_GEORGE_BERNARD_SHAW,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_CITATE_GEORGE_WASHINGTON,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_CITATE_IMMANUEL_KANT,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_CITATE_LAO_TZU,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_CITATE_LUCIUS_ANNAEUS_SENECA,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_CITATE_MAHATMA_GANDHI,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_CITATE_MAICA_TEREZA,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_CITATE_MARK_TWAIN,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_CITATE_MARTIN_LUTHER_KING_JR,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_CITATE_NAPOLEON_BONAPARTE,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_CITATE_NEALE_DONALD_WALSH,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_CITATE_OSCAR_WILDE,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_CITATE_PABLO_PICASSO,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_CITATE_PLATON,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_CITATE_PUBLILIUS_SYRUS,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_CITATE_RALPH_WALDO_EMERSON,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_CITATE_RICHARD_WURMBRAND,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_CITATE_SFANTUL_AUGUSTIN,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_CITATE_SFANTUL_CIPRIAN,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_CITATE_SFANTUL_IOAN_GURA_DE_AUR,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_CITATE_SFANTUL_IOAN_SCARARUL,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_CITATE_SFANTUL_IRINEU,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_CITATE_SFANTUL_PETRU,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_CITATE_SFANTUL_SIMEON_NOUL_TEOLOG,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_CITATE_SFANTUL_VASILE_CEL_MARE,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_CITATE_SOCRATES,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_CITATE_STEVEN_WRIGHT,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_CITATE_SUN_TZU,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_CITATE_THOMAS_JEFFERSON,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_CITATE_WILLIAM_SHAKESPEARE,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_CITATE_WINSTON_CHURCHILL,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_CITATE_ALTE_CITATE,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_CUVINTE,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_DEVIZE_DE_VIATA,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_LOZINCI,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_FACTS,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_CONSTITUTIA_ROMANIEI,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_DREPTURILE_OMULUI,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_CODUL_BUNELOR_MANIERE,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_CODUL_PENAL,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_IDEOLOGII,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_ISTORIE,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* AppConstants */].ROUTE_LEGENDE_SI_MITURI,
        component: __WEBPACK_IMPORTED_MODULE_2__lists_lists_component__["a" /* ListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_4__resolvers_resolvers__["a" /* Resolvers */]
        }
    },
    {
        path: '**',
        redirectTo: '/'
    }
];
/**
 * @description Modularity system which helps organize the app into cohesive blocks of functionality
 * @example https://angular.io/guide/architecture#modules
 * @tutorial https://angular.io/guide/ngmodule
 */
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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

module.exports = "<router-outlet></router-outlet>\r\n<nav id=\"menu\">\r\n  <ul>\r\n    <li>\r\n      <a href=\"#arta\">{{'Arta' | translate}}</a>\r\n      <div id=\"arta\" class=\"Panel\">\r\n        <ul>\r\n          <li>\r\n            <a href=\"{{'/#' + constants.ROUTE_ANUNTURI_ROMANESTI}}\">{{'Anunturi Romanesti' | translate}}</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#bancuri\">{{'Bancuri' | translate}}</a>\r\n            <div id=\"bancuri\" class=\"Panel\">\r\n              <ul>\r\n                <li>\r\n                  <a href=\"{{'/#' + constants.ROUTE_BANCURI_ANIMALE}}\">{{'Animale' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"{{'/#' + constants.ROUTE_BANCURI_DIVERSE}}\">{{'Diverse' | translate}}</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </li>\r\n          <li>\r\n            <a href=\"{{'/#' + constants.ROUTE_CULMI}}\">{{'Culmi' | translate}}</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"{{'/#' + constants.ROUTE_FABULE}}\">{{'Fabule' | translate}}</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"{{'/#' + constants.ROUTE_GHICITORI}}\">{{'Ghicitori' | translate}}</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"{{'/#' + constants.ROUTE_POEZII}}\">{{'Poezii' | translate}}</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"{{'/#' + constants.ROUTE_POVESTI}}\">{{'Povesti' | translate}}</a>\r\n          </li>\r\n\r\n        </ul>\r\n      </div>\r\n    </li>\r\n    <li>\r\n      <a href=\"#timpLiber\">{{'Timp Liber' | translate}}</a>\r\n      <div id=\"timpLiber\" class=\"Panel\">\r\n        <ul>\r\n          <li>\r\n            <a href=\"#Jocuri\">{{'Jocuri' | translate}}</a>\r\n            <div id=\"Jocuri\" class=\"Panel\">\r\n              <ul>\r\n                <li>\r\n                  <a href=\"#jocurile-copilariei\">{{'Jocurile Copilariei' | translate}}</a>\r\n                  <div id=\"jocurile-copilariei\" class=\"Panel\">\r\n                    <ul>\r\n                      <li>\r\n                        <a href=\"{{'/#' + constants.ROUTE_JOCURI_APA_APA_FOC_FOC}}\">{{'Apa apa foc foc' | translate}}</a>\r\n                      </li>\r\n                      <li>\r\n                        <a href=\"{{'/#' + constants.ROUTE_JOCURI_CAPRA}}\">{{'Capra' | translate}}</a>\r\n                      </li>\r\n                      <li>\r\n                        <a href=\"{{'/#' + constants.ROUTE_JOCURI_CASTELUL_123}}\">{{'Castelul 123' | translate}}</a>\r\n                      </li>\r\n                      <li>\r\n                        <a href=\"{{'/#' + constants.ROUTE_JOCURI_LAPTE_GROS}}\">{{'Lapte gros' | translate}}</a>\r\n                      </li>\r\n                      <li>\r\n                        <a href=\"{{'/#' + constants.ROUTE_JOCURI_INCETUL_CU_INCETUL_SE_FABRICA_OTETUL}}\">{{'Incetul' | translate}}</a>\r\n                      </li>\r\n                      <li>\r\n                        <a href=\"{{'/#' + constants.ROUTE_JOCURI_SOTRONUL}}\">{{'Sotronul' | translate}}</a>\r\n                      </li>\r\n                      <li>\r\n                        <a href=\"{{'/#' + constants.ROUTE_JOCURI_NUMARATORI}}\">{{'Numaratori' | translate}}</a>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <a href=\"{{'/#' + constants.ROUTE_JOCURI_MEMORY_GAME}}\">{{'Memory Game' | translate}}</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </li>\r\n    <li>\r\n      <a href=\"#liste\">{{'Liste' | translate}}</a>\r\n      <div id=\"liste\" class=\"Panel\">\r\n        <ul>\r\n          <li>\r\n            <a href=\"#top-carti\">{{'Top carti' | translate}}</a>\r\n            <div id=\"top-carti\" class=\"Panel\">\r\n              <ul>\r\n                <li>\r\n                  <a href=\"{{'/#' + constants.ROUTE_CARTI_CRESTINE}}\">{{'Crestine' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"{{'/#' + constants.ROUTE_CARTI_INTERESANTE}}\">{{'Interesante' | translate}}</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </li>\r\n          <li>\r\n            <a href=\"{{'/#' + constants.ROUTE_TOP_DESENE}}\">{{'Top desene' | translate}}</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"{{'/#' + constants.ROUTE_TOP_FILME}}\">{{'Top filme' | translate}}</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"{{'/#' + constants.ROUTE_TOP_LISTE_UIMITOARE}}\">{{'Liste Uimitoare' | translate}}</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </li>\r\n    <li>\r\n      <a href=\"#media\">{{'Media' | translate}}</a>\r\n      <div id=\"media\" class=\"Panel\">\r\n        <ul>\r\n          <li>\r\n            <a href=\"#gifs\">{{'Gifs' | translate}}</a>\r\n            <div id=\"gifs\" class=\"Panel\">\r\n              <ul>\r\n                <li>\r\n                  <a href=\"{{'/#' + constants.ROUTE_GIFS_COOL}}\">{{'Cool' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"{{'/#' + constants.ROUTE_GIFS_FAIL}}\">{{'Fail' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"{{'/#' + constants.ROUTE_GIFS_FUNNY}}\">{{'Funny' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"{{'/#' + constants.ROUTE_GIFS_INTERESTING}}\">{{'Interesting' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"{{'/#' + constants.ROUTE_GIFS_WOW}}\">{{'Wow' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"{{'/#' + constants.ROUTE_GIFS_REACTION}}\">{{'Reaction' | translate}}</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </li>\r\n          <li>\r\n            <a href=\"#youtube\">{{'Youtube' | translate}}</a>\r\n            <div id=\"youtube\" class=\"Panel\">\r\n              <ul>\r\n                <li>\r\n                  <a href=\"{{'/#' + constants.ROUTE_YOUTUBE_DOCUMENTARIES}}\">{{'Documentaries' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"{{'/#' + constants.ROUTE_YOUTUBE_FUNNY}}\">{{'Funny' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"{{'/#' + constants.ROUTE_YOUTUBE_CHANNELS}}\">{{'Good channels' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#music\">{{'Music' | translate}}</a>\r\n                  <div id=\"music\" class=\"Panel\">\r\n                    <ul>\r\n                      <li>\r\n                        <a href=\"{{'/#' + constants.ROUTE_MUSIC_CALM}}\">{{'Calm' | translate}}</a>\r\n                      </li>\r\n                      <li>\r\n                        <a href=\"{{'/#' + constants.ROUTE_MUSIC_CHILL}}\">{{'Chill' | translate}}</a>\r\n                      </li>\r\n                      <li>\r\n                        <a href=\"{{'/#' + constants.ROUTE_MUSIC_CLUB}}\">{{'Club' | translate}}</a>\r\n                      </li>\r\n                      <li>\r\n                        <a href=\"{{'/#' + constants.ROUTE_MUSIC_SPACE_OUT}}\">{{'Space out' | translate}}</a>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </li>\r\n          <li>\r\n            <a href=\"{{'/#' + constants.ROUTE_WALLPAPERS}}\">{{'Wallpapers' | translate}}</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </li>\r\n    <li>\r\n      <a href=\"#wisdom\">{{'Wisdom' | translate}}</a>\r\n      <div id=\"wisdom\" class=\"Panel\">\r\n        <ul>\r\n          <li>\r\n            <a href=\"{{'/#' + constants.ROUTE_AFORSIME_MAXIME}}\">{{'Aforisme / Maxime' | translate}}</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#credinte\">{{'Credinte Religii Confesiuni' | translate}}</a>\r\n            <div id=\"credinte\" class=\"Panel\">\r\n              <ul>\r\n                <li>\r\n                  <a href=\"#crestinism\">{{'Crestinism' | translate}}</a>\r\n                  <div id=\"crestinism\" class=\"Panel\">\r\n                    <ul>\r\n                      <li>\r\n                        <a href=\"{{'/#' + constants.ROUTE_CREZUL_CRESTIN}}\">{{'Crezul Crestin' | translate}}</a>\r\n                      </li>\r\n                      <li>\r\n                        <a href=\"{{'/#' + constants.ROUTE_EREZII}}\">{{'Erezii' | translate}}</a>\r\n                      </li>\r\n                      <li>\r\n                        <a href=\"{{'/#' + constants.ROUTE_SFINTII_PARINTI}}\">{{'Sfintii Parinti' | translate}}</a>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </li>\r\n          <li>\r\n            <a href=\"{{'/#' + constants.ROUTE_DICTONURI}}\">{{'Dictonuri' | translate}}</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"{{'/#' + constants.ROUTE_EXPRESII}}\">{{'Expresii din popor' | translate}}</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"{{'/#' + constants.ROUTE_SANATATE}}\">{{'Sanatate' | translate}}</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"{{'/#' + constants.ROUTE_POVETE}}\">{{'Povete' | translate}}</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"{{'/#' + constants.ROUTE_SUPERSTITII}}\">{{'Superstitii' | translate}}</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#citate\">{{'Citate' | translate}}</a>\r\n            <div id=\"citate\" class=\"Panel\">\r\n              <ul>\r\n                <li>\r\n                  <a href=\"/#abraham-lincoln\">{{'Abraham Lincoln' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"/#albert-einstein\">{{'Albert Einstein' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"/#aristotel\">{{'Aristotel' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"/#benjamin-franklin\">{{'Benjamin Franklin' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"/#buddha\">{{'Buddha' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"/#confucius\">{{'Confucius' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"/#dalai-lama\">{{'Dalai Lama' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"/#democrit\">{{'Democrit' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"/#euripide\">{{'Euripide' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"/#george-bernard-shaw\">{{'George Bernard Shaw' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"/#george-washington\">{{'George Washington' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"/#immanuel-kant\">{{'Immanuel Kant' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"/#lao-tzu\">{{'Lao Tzu' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"/#lucius-annaeus-seneca\">{{'Lucius Annaeus Seneca' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"/#mahatma-gandhi\">{{'Mahatma Gandhi' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"/#maica-tereza\">{{'Maica Tereza' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"/#mark-twain\">{{'Mark Twain' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"/#martin-luther-king-jr\">{{'Martin Luther King, Jr.' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"/#napoleon-bonaparte\">{{'Napoleon Bonaparte' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"/#neale-donald-walsh\">{{'Neale Donald Walsh' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"/#oscar-wilde\">{{'Oscar Wilde' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"/#pablo-picasso\">{{'Pablo Picasso' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"/#platon\">{{'Platon' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"/#publilius-syrus\">{{'Publilius Syrus' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"/#ralph-waldo-emerson\">{{'Ralph Waldo Emerson' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"/#richard-wurmbrand\">{{'Richard Wurmbrand' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"/#sfantul-augustin\">{{'Sfantul Augustin' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"/#sfantul-ciprian\">{{'Sfantul Ciprian' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"/#sfantul-ioan-gura-de-aur\">{{'Sfantul Ioan Gura de Aur' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"/#sfantul-ioan-scararul\">{{'Sfantul Ioan Scararul' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"/#sfantul-irineu\">{{'Sfantul Irineu' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"/#sfantul-petru\">{{'Sfantul Petru' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"/#sfantul-simeon-noul-teolog\">{{'Sfantul Simeon Noul Teolog' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"/#sfantul-vasile-cel-mare\">{{'Sfantul Vasile cel Mare' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"/#socrates\">{{'Socrates' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"/#steven-wright\">{{'Steven Wright' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"/#sun-tzu\">{{'Sun Tzu' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"/#thomas-jefferson\">{{'Thomas Jefferson' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"/#william-shakespeare\">{{'William Shakespeare' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"/#winston-churchill\">{{'Winston Churchill' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"/#alte-citate\">{{'Alte citate' | translate}}</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </li>\r\n          <li>\r\n            <a href=\"{{'/#' + constants.ROUTE_CUVINTE}}\">{{'Cuvinte' | translate}}</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"{{'/#' + constants.ROUTE_DEVIZE_DE_VIATA}}\">{{'Devize de viata' | translate}}</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"{{'/#' + constants.ROUTE_LOZINCI}}\">{{'Lozinci' | translate}}</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#proverbe\">{{'Proverbe' | translate}}</a>\r\n            <div id=\"proverbe\" class=\"Panel\">\r\n              <ul>\r\n                <li>\r\n                  <a href=\"/#\">183</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </li>\r\n          <li>\r\n            <a href=\"{{'/#' + constants.ROUTE_FACTS}}\">{{'Facts' | translate}}</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </li>\r\n    <li>\r\n      <a href=\"#folositoare\">{{'Folositoare' | translate}}</a>\r\n      <div id=\"folositoare\" class=\"Panel\">\r\n        <ul>\r\n          <li>\r\n            <a href=\"{{'/#' + constants.ROUTE_CONSTITUTIA_ROMANIEI}}\">{{'Constitutia Romaniei' | translate}}</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"{{'/#' + constants.ROUTE_DREPTURILE_OMULUI}}\">{{'Drepturile Omului' | translate}}</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"{{'/#' + constants.ROUTE_CODUL_BUNELOR_MANIERE}}\">{{'Codul Bunelor Maniere' | translate}}</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"{{'/#' + constants.ROUTE_CODUL_PENAL}}\">{{'Codul Penal' | translate}}</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"{{'/#' + constants.ROUTE_IDEOLOGII}}\">{{'Ideologii' | translate}}</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"{{'/#' + constants.ROUTE_ISTORIE}}\">{{'Istorie' | translate}}</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"{{'/#' + constants.ROUTE_LEGENDE_SI_MITURI}}\">{{'Legende si mituri' | translate}}</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_language_service__ = __webpack_require__("../../../../../src/app/core/language-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constants__ = __webpack_require__("../../../../../src/app/utils/constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// core

// services

// constants

var AppComponent = /** @class */ (function () {
    function AppComponent(languageService) {
        this.languageService = languageService;
        this.title = 'app';
        this.constants = __WEBPACK_IMPORTED_MODULE_2__utils_constants__["a" /* AppConstants */];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.languageService.setCurrentLanguage('ro');
        $(document).ready(function ($) {
            var $menu = $('#menu').mmenu({
                'extensions': [
                    'fx-menu-slide',
                ],
                'searchfield': {
                    'resultsPanel': true,
                    'noResults': 'Sorry.. no results :(',
                    'placeholder': 'Search'
                },
                'setSelected': {
                    'hover': true,
                    'parent': true
                },
                'counters': true,
                'navbars': [
                    {
                        'position': 'top',
                        'content': [
                            'searchfield'
                        ]
                    },
                    {
                        'position': 'bottom',
                        'content': [
                            "<a class='fa fa-envelope' href='#/'></a>",
                            "<a class='fa fa-twitter' href='#/'></a>",
                            "<a class='fa fa-facebook' href='#/'></a>"
                        ]
                    }
                ]
            });
            var $icon = $('#my-icon');
            var API = $menu.data('mmenu');
            $icon.on('click', function () {
                API.open();
            });
            API.bind('open:finish', function () {
                $icon.addClass('is-active');
            });
            API.bind('close:finish', function () {
                $icon.removeClass('is-active');
            });
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_language_service__["a" /* LanguageService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__("../../../../@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_custom_http_service__ = __webpack_require__("../../../../../src/app/core/custom-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_language_service__ = __webpack_require__("../../../../../src/app/core/language-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_services_service__ = __webpack_require__("../../../../../src/app/services/services.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__lists_lists_component__ = __webpack_require__("../../../../../src/app/lists/lists.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__resolvers_resolvers__ = __webpack_require__("../../../../../src/app/resolvers/resolvers.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// core








// services



// components


// resovlers

// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http);
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__lists_lists_component__["a" /* ListsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                /**
                 * @description AppRoutingModule should always be imported last
                 * @example https://angular.io/guide/router#module-import-order-matters
                 * @tutorial https://angular.io/guide/router#module-import-order-matters
                 */
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__core_custom_http_service__["a" /* CustomHttp */],
                __WEBPACK_IMPORTED_MODULE_9__core_language_service__["a" /* LanguageService */],
                __WEBPACK_IMPORTED_MODULE_13__resolvers_resolvers__["a" /* Resolvers */],
                __WEBPACK_IMPORTED_MODULE_10__services_services_service__["a" /* ServicesService */],
                __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CustomHttpFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__language_service__ = __webpack_require__("../../../../../src/app/core/language-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__custom_http_service__ = __webpack_require__("../../../../../src/app/core/custom-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__error_message_service__ = __webpack_require__("../../../../../src/app/core/error-message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// core



// services




function CustomHttpFactory(backend, defaultOptions, router, langServ, errorMessageService) {
    return new __WEBPACK_IMPORTED_MODULE_5__custom_http_service__["a" /* CustomHttp */](backend, defaultOptions, router, langServ, errorMessageService);
}
var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [],
            declarations: [],
            exports: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__error_message_service__["a" /* ErrorMessageService */],
                __WEBPACK_IMPORTED_MODULE_4__language_service__["a" /* LanguageService */],
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_5__custom_http_service__["a" /* CustomHttp */],
                    useFactory: CustomHttpFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__language_service__["a" /* LanguageService */]]
                }
            ],
            entryComponents: []
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* SkipSelf */])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/custom-http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomHttp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_cookies_ng2_cookies__ = __webpack_require__("../../../../ng2-cookies/ng2-cookies.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_cookies_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_cookies_ng2_cookies__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__error_message_service__ = __webpack_require__("../../../../../src/app/core/error-message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__language_service__ = __webpack_require__("../../../../../src/app/core/language-service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// core






// srevices


var CustomHttp = /** @class */ (function (_super) {
    __extends(CustomHttp, _super);
    function CustomHttp(backend, defaultOptions, router, languageService, errorMessageService) {
        var _this = _super.call(this, backend, defaultOptions) || this;
        _this.router = router;
        _this.languageService = languageService;
        _this.errorMessageService = errorMessageService;
        return _this;
    }
    /**
     * Performs a request with `get` http method.
     * @param url
     * @param options
     * @returns {Observable<>}
     */
    CustomHttp.prototype.get = function (url, options) {
        var _this = this;
        this.beforeRequest();
        return _super.prototype.get.call(this, this.getFullUrl(url), this.requestOptions(options))
            .catch(function (error, caught) {
            return _this.onCatch(error, caught);
        })
            .do(function (res) { _this.onSuccess(res); }, function (error) { _this.onError(error); })
            .finally(function () { _this.onFinally(); });
    };
    /**
     * Performs a request with `post` http method.
     * @param url
     * @param body
     * @param options
     * @returns {Observable<>}
     */
    CustomHttp.prototype.post = function (url, body, options) {
        var _this = this;
        this.beforeRequest();
        return _super.prototype.post.call(this, this.getFullUrl(url), body, this.requestOptions(options))
            .catch(function (error, caught) {
            return _this.onCatch(error, caught);
        })
            .do(function (res) { _this.onSuccess(res); }, function (error) { _this.onError(error); })
            .finally(function () { _this.onFinally(); });
    };
    /**
     * Performs a request with `put` http method.
     * @param url
     * @param body
     * @param options
     * @returns {Observable<>}
     */
    CustomHttp.prototype.put = function (url, body, options) {
        var _this = this;
        this.beforeRequest();
        return _super.prototype.put.call(this, this.getFullUrl(url), body, this.requestOptions(options))
            .catch(function (error, caught) {
            return _this.onCatch(error, caught);
        })
            .do(function (res) { _this.onSuccess(res); }, function (error) { _this.onError(error); })
            .finally(function () { _this.onFinally(); });
    };
    /**
     * Performs a request with `delete` http method.
     * @param url
     * @param body
     * @param options
     * @returns {Observable<>}
     */
    CustomHttp.prototype.delete = function (url, options) {
        var _this = this;
        this.beforeRequest();
        return _super.prototype.delete.call(this, this.getFullUrl(url), this.requestOptions(options))
            .catch(function (error, caught) {
            return _this.onCatch(error, caught);
        })
            .do(function (res) { _this.onSuccess(res); }, function (error) { _this.onError(error); })
            .finally(function () { _this.onFinally(); });
    };
    /**
     * Request options.
     * @param options
     * @returns {RequestOptionsArgs}
     */
    CustomHttp.prototype.requestOptions = function (options) {
        if (options == null) {
            options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]();
        }
        if (options.headers == null) {
            if (__WEBPACK_IMPORTED_MODULE_5_ng2_cookies_ng2_cookies__["Cookie"].get('access_token') != null) {
                options.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                    'Accept-Language': this.languageService.getCurrentLanguage(),
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                });
            }
            else {
                options.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                    'Accept-Language': this.languageService.getCurrentLanguage(),
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                });
            }
        }
        else {
            options.headers['Accept-Language'] = this.languageService.getCurrentLanguage();
        }
        return options;
    };
    /**
     * Build API url.
     * @param url
     * @returns {string}
     */
    CustomHttp.prototype.getFullUrl = function (url) {
        return url;
    };
    CustomHttp.prototype.beforeRequest = function () { };
    CustomHttp.prototype.afterRequest = function () { };
    /**
     * Error handler.
     * @param error
     * @param caught
     * @returns {ErrorObservable}
     */
    CustomHttp.prototype.onCatch = function (error, caught) {
        /* Place error interceptor logic here */
        if (error.status === 401) {
            console.log('401');
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error);
        }
    };
    CustomHttp.prototype.getAuthDetails = function () {
        return _super.prototype.get.call(this, '/api/authorize/details')
            .map(function (res) { return res.json(); });
    };
    CustomHttp.prototype.onSuccess = function (res) { };
    CustomHttp.prototype.onError = function (error) {
        var err = error.json();
        if (err && err.message) {
            this.errorMessageService.showErrorMessage(err.message);
        }
    };
    CustomHttp.prototype.onFinally = function () { this.afterRequest(); };
    CustomHttp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* XHRBackend */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_7__language_service__["a" /* LanguageService */],
            __WEBPACK_IMPORTED_MODULE_6__error_message_service__["a" /* ErrorMessageService */]])
    ], CustomHttp);
    return CustomHttp;
}(__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]));



/***/ }),

/***/ "../../../../../src/app/core/error-message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorMessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// core


var ErrorMessageService = /** @class */ (function () {
    function ErrorMessageService(translateService) {
        this.translateService = translateService;
    }
    ErrorMessageService.prototype.showErrorMessage = function (message) {
        this.translateService.get('dismiss').subscribe(function (res) {
            alert(message);
        });
    };
    ErrorMessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__["c" /* TranslateService */]])
    ], ErrorMessageService);
    return ErrorMessageService;
}());



/***/ }),

/***/ "../../../../../src/app/core/language-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// core


var LanguageService = /** @class */ (function () {
    function LanguageService(translateService) {
        this.translateService = translateService;
        /*
         *  Language configurations
         */
        translateService.addLangs(['en', 'de']);
        translateService.setDefaultLang('ro');
        translateService.use(localStorage.getItem('lang') || translateService.getDefaultLang());
        this.onLangChange = translateService.onLangChange;
        translateService.onLangChange.subscribe(function (event) {
            localStorage.setItem('lang', event.lang);
        });
    }
    LanguageService.prototype.getCurrentLanguage = function () {
        return this.translateService.currentLang;
    };
    LanguageService.prototype.setCurrentLanguage = function (lang) {
        this.translateService.use(lang);
    };
    LanguageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], LanguageService);
    return LanguageService;
}());



/***/ }),

/***/ "../../../../../src/app/lists/lists.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid h-100\">\r\n  <div class=\"row h-100 justify-content-center align-items-center\">\r\n    <div class=\"col-xs-12\">\r\n      <p class=\"white-txt-shadow-effect\">aabc</p>\r\n    </div>\r\n  </div>\r\n  <br>\r\n  <div class=\"row h-100 justify-content-center align-items-center\">\r\n    <div class=\"col-md-12 col-lg-10 col-lg-offset-1\">\r\n      <div class=\"bn-box bn-sepia\" *ngFor=\"let item of data; let i = index\">\r\n        <div class=\"bn-box-content\">\r\n          <div>\r\n            <span class=\"bancNr\">{{i}}</span>\r\n            <p [innerHTML]=\"item.body\"></p>\r\n          </div>\r\n          <hr>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/lists/lists.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* ---------- SEARCH-FORM ---------- */\n/* ---------- GLUME-BOX ---------- */\n.bn-box {\n  margin: 0px 0px 25px;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n  font-size: 14px;\n  position: relative; }\n.bn-box-content p {\n  font-family: 'bree';\n  font-size: 1.5em; }\n.bn-box-content {\n  text-shadow: 1px 1px 1px #ffffff;\n  padding: 17px 43px 17px 66px;\n  min-height: 35px; }\n.bn-box.bn-silver {\n  border: 1px solid #a0a0a0; }\n.bn-box.bn-silver .bn-box-content {\n  color: #7a7a7a;\n  text-shadow: 1px 1px 1px #ffffff;\n  border: 1px solid #ffffff;\n  background: #ececec;\n  -webkit-box-shadow: inset 0 0 45px #c3c3c3;\n          box-shadow: inset 0 0 45px #c3c3c3; }\n.bn-box.bn-silver .bn-box-content strong {\n  color: #747474; }\n.bn-box.bn-sepia {\n  border: 1px solid #c0923b; }\n.bn-box.bn-sepia .bn-box-content {\n  color: #866629;\n  text-shadow: 1px 1px 1px #f8f3e9;\n  border: 1px solid #f2e8d5;\n  background: #e6d3ae;\n  -webkit-box-shadow: inset 0 0 45px #d3b170;\n          box-shadow: inset 0 0 45px #d3b170; }\n.bn-box.bn-sepia .bn-box-content strong {\n  color: #7e6027; }\n.bn-box.bn-danger {\n  border: 1px solid #be7e0b; }\n.bn-box.bn-danger .bn-box-content {\n  color: #764e07;\n  text-shadow: 1px 1px 1px #fbe1b4;\n  border: 1px solid #f9d89c;\n  background: #f6c56c;\n  -webkit-box-shadow: inset 0 0 45px #f2a61f;\n          box-shadow: inset 0 0 45px #f2a61f; }\n.bn-box.bn-danger .bn-box-content strong {\n  color: #6c4806; }\n.bn-box.bn-warning {\n  border: 1px solid #dc1215; }\n.bn-box.bn-warning .bn-box-content {\n  color: #960c0e;\n  text-shadow: 1px 1px 1px #fcd8d9;\n  border: 1px solid #fac1c1;\n  background: #f69293;\n  -webkit-box-shadow: inset 0 0 45px #f04648;\n          box-shadow: inset 0 0 45px #f04648; }\n.bn-box.bn-warning .bn-box-content strong {\n  color: #8c0c0d; }\n.bn-box.bn-info {\n  border: 1px solid #4195cd; }\n.bn-box.bn-info .bn-box-content {\n  color: #286c9a;\n  text-shadow: 1px 1px 1px #f7fbfd;\n  border: 1px solid #e3eff8;\n  background: #bbd9ed;\n  -webkit-box-shadow: inset 0 0 45px #7ab5dc;\n          box-shadow: inset 0 0 45px #7ab5dc; }\n.bn-box.bn-info .bn-box-content strong {\n  color: #266791; }\n.bn-box.bn-success {\n  border: 1px solid #72c52a; }\n.bn-box.bn-success .bn-box-content {\n  color: #4d861c;\n  text-shadow: 1px 1px 1px #e9f8dc;\n  border: 1px solid #dcf3c7;\n  background: #c1ea9d;\n  -webkit-box-shadow: inset 0 0 45px #96dc5a;\n          box-shadow: inset 0 0 45px #96dc5a; }\n.bn-box.bn-success .bn-box-content strong {\n  color: #487d1a; }\n/* ---------- GLUME-BOX ---------- */\n/* Small devices (tablets, 768px and up) */\n@media (min-width: 768px) {\n  body {\n    background-color: #ffffff;\n    font-size: 10px; }\n  body p {\n    font-size: 1.5rem;\n    margin: 0px; }\n  body h3 {\n    font-family: 'Lobster', cursive;\n    color: #864c40;\n    font-size: 2rem;\n    text-align: center;\n    color: green; } }\n.bancNr {\n  position: absolute;\n  right: 10px;\n  bottom: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lists/lists.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// core


var ListsComponent = /** @class */ (function () {
    function ListsComponent(_route, _router) {
        this._route = _route;
        this._router = _router;
    }
    ListsComponent.prototype.ngOnInit = function () {
        this.data = this._route.snapshot.data['data'];
        console.log('this.data', this.data);
        /*if (this._router.url.substring(1) === AppConstants.ROUTE_BANCURI_ANIMALE) {
          this.data = AppConstants.ROUTE_BANCURI_ANIMALE;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_BANCURI_DIVERSE) {
          this.data = AppConstants.ROUTE_BANCURI_DIVERSE;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_CULMI) {
          this.data = AppConstants.ROUTE_CULMI;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_GHICITORI) {
          this.data = AppConstants.ROUTE_GHICITORI;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_FABULE) {
          this.data = AppConstants.ROUTE_FABULE;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_POEZII) {
          this.data = AppConstants.ROUTE_POEZII;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_POVESTI) {
          this.data = AppConstants.ROUTE_POVESTI;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_JOCURI_MEMORY_GAME) {
          this.data = AppConstants.ROUTE_JOCURI_MEMORY_GAME;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_JOCURI_APA_APA_FOC_FOC) {
          this.data = AppConstants.ROUTE_JOCURI_APA_APA_FOC_FOC;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_JOCURI_CAPRA) {
          this.data = AppConstants.ROUTE_JOCURI_CAPRA;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_JOCURI_CASTELUL_123) {
          this.data = AppConstants.ROUTE_JOCURI_CASTELUL_123;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_JOCURI_LAPTE_GROS) {
          this.data = AppConstants.ROUTE_JOCURI_LAPTE_GROS;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_JOCURI_INCETUL_CU_INCETUL_SE_FABRICA_OTETUL) {
          this.data = AppConstants.ROUTE_JOCURI_INCETUL_CU_INCETUL_SE_FABRICA_OTETUL;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_JOCURI_SOTRONUL) {
          this.data = AppConstants.ROUTE_JOCURI_SOTRONUL;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_JOCURI_NUMARATORI) {
          this.data = AppConstants.ROUTE_JOCURI_NUMARATORI;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_WALLPAPERS) {
          this.data = AppConstants.ROUTE_WALLPAPERS;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_ANUNTURI_ROMANESTI) {
          this.data = AppConstants.ROUTE_ANUNTURI_ROMANESTI;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_CARTI_CRESTINE) {
          this.data = AppConstants.ROUTE_CARTI_CRESTINE;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_CARTI_INTERESANTE) {
          this.data = AppConstants.ROUTE_CARTI_INTERESANTE;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_TOP_DESENE) {
          this.data = AppConstants.ROUTE_TOP_DESENE;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_TOP_LISTE_UIMITOARE) {
          this.data = AppConstants.ROUTE_TOP_LISTE_UIMITOARE;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_TOP_FILME) {
          this.data = AppConstants.ROUTE_TOP_FILME;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_GIFS_COOL) {
          this.data = AppConstants.ROUTE_GIFS_COOL;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_GIFS_FAIL) {
          this.data = AppConstants.ROUTE_GIFS_FAIL;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_GIFS_FUNNY) {
          this.data = AppConstants.ROUTE_GIFS_FUNNY;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_GIFS_INTERESTING) {
          this.data = AppConstants.ROUTE_GIFS_INTERESTING;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_GIFS_WOW) {
          this.data = AppConstants.ROUTE_GIFS_WOW;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_GIFS_REACTION) {
          this.data = AppConstants.ROUTE_GIFS_REACTION;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_YOUTUBE_DOCUMENTARIES) {
          this.data = AppConstants.ROUTE_YOUTUBE_DOCUMENTARIES;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_YOUTUBE_FUNNY) {
          this.data = AppConstants.ROUTE_YOUTUBE_FUNNY;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_YOUTUBE_CHANNELS) {
          this.data = AppConstants.ROUTE_YOUTUBE_CHANNELS;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_MUSIC_CALM) {
          this.data = AppConstants.ROUTE_MUSIC_CALM;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_MUSIC_CHILL) {
          this.data = AppConstants.ROUTE_MUSIC_CHILL;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_MUSIC_CLUB) {
          this.data = AppConstants.ROUTE_MUSIC_CLUB;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_MUSIC_SPACE_OUT) {
          this.data = AppConstants.ROUTE_MUSIC_SPACE_OUT;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_AFORSIME_MAXIME) {
          this.data = AppConstants.ROUTE_AFORSIME_MAXIME;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_CREZUL_CRESTIN) {
          this.data = AppConstants.ROUTE_CREZUL_CRESTIN;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_EREZII) {
          this.data = AppConstants.ROUTE_EREZII;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_SFINTII_PARINTI) {
          this.data = AppConstants.ROUTE_SFINTII_PARINTI;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_DICTONURI) {
          this.data = AppConstants.ROUTE_DICTONURI;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_EXPRESII) {
          this.data = AppConstants.ROUTE_EXPRESII;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_SANATATE) {
          this.data = AppConstants.ROUTE_SANATATE;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_POVETE) {
          this.data = AppConstants.ROUTE_POVETE;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_SUPERSTITII) {
          this.data = AppConstants.ROUTE_SUPERSTITII;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_ABRAHAM_LINCOLN) {
          this.data = AppConstants.ROUTE_CITATE_ABRAHAM_LINCOLN;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_ALBERT_EINSTEIN) {
          this.data = AppConstants.ROUTE_CITATE_ALBERT_EINSTEIN;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_ARISTOTEL) {
          this.data = AppConstants.ROUTE_CITATE_ARISTOTEL;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_BENJAMIN_FRANKLIN) {
          this.data = AppConstants.ROUTE_CITATE_BENJAMIN_FRANKLIN;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_BUDDHA) {
          this.data = AppConstants.ROUTE_CITATE_BUDDHA;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_CONFUCIUS) {
          this.data = AppConstants.ROUTE_CITATE_CONFUCIUS;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_DALAI_LAMA) {
          this.data = AppConstants.ROUTE_CITATE_DALAI_LAMA;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_DEMOCRIT) {
          this.data = AppConstants.ROUTE_CITATE_DEMOCRIT;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_EURIPIDE) {
          this.data = AppConstants.ROUTE_CITATE_EURIPIDE;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_GEORGE_BERNARD_SHAW) {
          this.data = AppConstants.ROUTE_CITATE_GEORGE_BERNARD_SHAW;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_GEORGE_WASHINGTON) {
          this.data = AppConstants.ROUTE_CITATE_GEORGE_WASHINGTON;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_IMMANUEL_KANT) {
          this.data = AppConstants.ROUTE_CITATE_IMMANUEL_KANT;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_LAO_TZU) {
          this.data = AppConstants.ROUTE_CITATE_LAO_TZU;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_LUCIUS_ANNAEUS_SENECA) {
          this.data = AppConstants.ROUTE_CITATE_LUCIUS_ANNAEUS_SENECA;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_MAHATMA_GANDHI) {
          this.data = AppConstants.ROUTE_CITATE_MAHATMA_GANDHI;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_MAICA_TEREZA) {
          this.data = AppConstants.ROUTE_CITATE_MAICA_TEREZA;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_MARK_TWAIN) {
          this.data = AppConstants.ROUTE_CITATE_MARK_TWAIN;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_MARTIN_LUTHER_KING_JR) {
          this.data = AppConstants.ROUTE_CITATE_MARTIN_LUTHER_KING_JR;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_NAPOLEON_BONAPARTE) {
          this.data = AppConstants.ROUTE_CITATE_NAPOLEON_BONAPARTE;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_NEALE_DONALD_WALSH) {
          this.data = AppConstants.ROUTE_CITATE_NEALE_DONALD_WALSH;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_OSCAR_WILDE) {
          this.data = AppConstants.ROUTE_CITATE_OSCAR_WILDE;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_PABLO_PICASSO) {
          this.data = AppConstants.ROUTE_CITATE_PABLO_PICASSO;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_PLATON) {
          this.data = AppConstants.ROUTE_CITATE_PLATON;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_PUBLILIUS_SYRUS) {
          this.data = AppConstants.ROUTE_CITATE_PUBLILIUS_SYRUS;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_RALPH_WALDO_EMERSON) {
          this.data = AppConstants.ROUTE_CITATE_RALPH_WALDO_EMERSON;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_RICHARD_WURMBRAND) {
          this.data = AppConstants.ROUTE_CITATE_RICHARD_WURMBRAND;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_SFANTUL_AUGUSTIN) {
          this.data = AppConstants.ROUTE_CITATE_SFANTUL_AUGUSTIN;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_SFANTUL_CIPRIAN) {
          this.data = AppConstants.ROUTE_CITATE_SFANTUL_CIPRIAN;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_SFANTUL_IOAN_GURA_DE_AUR) {
          this.data = AppConstants.ROUTE_CITATE_SFANTUL_IOAN_GURA_DE_AUR;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_SFANTUL_IOAN_SCARARUL) {
          this.data = AppConstants.ROUTE_CITATE_SFANTUL_IOAN_SCARARUL;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_SFANTUL_IRINEU) {
          this.data = AppConstants.ROUTE_CITATE_SFANTUL_IRINEU;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_SFANTUL_PETRU) {
          this.data = AppConstants.ROUTE_CITATE_SFANTUL_PETRU;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_SFANTUL_SIMEON_NOUL_TEOLOG) {
          this.data = AppConstants.ROUTE_CITATE_SFANTUL_SIMEON_NOUL_TEOLOG;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_SFANTUL_VASILE_CEL_MARE) {
          this.data = AppConstants.ROUTE_CITATE_SFANTUL_VASILE_CEL_MARE;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_SOCRATES) {
          this.data = AppConstants.ROUTE_CITATE_SOCRATES;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_STEVEN_WRIGHT) {
          this.data = AppConstants.ROUTE_CITATE_STEVEN_WRIGHT;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_SUN_TZU) {
          this.data = AppConstants.ROUTE_CITATE_SUN_TZU;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_THOMAS_JEFFERSON) {
          this.data = AppConstants.ROUTE_CITATE_THOMAS_JEFFERSON;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_WILLIAM_SHAKESPEARE) {
          this.data = AppConstants.ROUTE_CITATE_WILLIAM_SHAKESPEARE;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_WINSTON_CHURCHILL) {
          this.data = AppConstants.ROUTE_CITATE_WINSTON_CHURCHILL;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_CITATE_ALTE_CITATE) {
          this.data = AppConstants.ROUTE_CITATE_ALTE_CITATE;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_CUVINTE) {
          this.data = AppConstants.ROUTE_CUVINTE;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_DEVIZE_DE_VIATA) {
          this.data = AppConstants.ROUTE_DEVIZE_DE_VIATA;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_LOZINCI) {
          this.data = AppConstants.ROUTE_LOZINCI;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_FACTS) {
          this.data = AppConstants.ROUTE_FACTS;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_CONSTITUTIA_ROMANIEI) {
          this.data = AppConstants.ROUTE_CONSTITUTIA_ROMANIEI;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_DREPTURILE_OMULUI) {
          this.data = AppConstants.ROUTE_DREPTURILE_OMULUI;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_CODUL_BUNELOR_MANIERE) {
          this.data = AppConstants.ROUTE_CODUL_BUNELOR_MANIERE;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_CODUL_PENAL) {
          this.data = AppConstants.ROUTE_CODUL_PENAL;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_IDEOLOGII) {
          this.data = AppConstants.ROUTE_IDEOLOGII;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_ISTORIE) {
          this.data = AppConstants.ROUTE_ISTORIE;
        }
        if (this._router.url.substring(1) === AppConstants.ROUTE_LEGENDE_SI_MITURI) {
          this.data = AppConstants.ROUTE_LEGENDE_SI_MITURI;
        }*/
    };
    ListsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-lists',
            template: __webpack_require__("../../../../../src/app/lists/lists.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lists/lists.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ListsComponent);
    return ListsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/resolvers/resolvers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Resolvers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_services_service__ = __webpack_require__("../../../../../src/app/services/services.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// core

// services

var Resolvers = /** @class */ (function () {
    function Resolvers(services) {
        this.services = services;
    }
    Resolvers.prototype.resolve = function (route) {
        return this.services.getContact(route.url[0].path);
    };
    Resolvers = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_services_service__["a" /* ServicesService */]])
    ], Resolvers);
    return Resolvers;
}());



/***/ }),

/***/ "../../../../../src/app/services/services.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_custom_http_service__ = __webpack_require__("../../../../../src/app/core/custom-http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// core

// services

var ServicesService = /** @class */ (function () {
    function ServicesService(http) {
        this.http = http;
        this.baseUrl = 'api/';
    }
    ServicesService.prototype.getContact = function (path) {
        return this.http.get("" + this.baseUrl + path).map(function (res) {
            return res.json();
        });
    };
    ServicesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_custom_http_service__["a" /* CustomHttp */]])
    ], ServicesService);
    return ServicesService;
}());



/***/ }),

/***/ "../../../../../src/app/utils/constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConstants; });
/**
 * @author Luca Filip
 * @description Constants used throughout the application for easier refactoring
 * @namespace constants
 */
var AppConstants = /** @class */ (function () {
    function AppConstants() {
    }
    // routes ARTA
    AppConstants.ROUTE_BANCURI_ANIMALE = 'bancuri-animale';
    AppConstants.ROUTE_BANCURI_DIVERSE = 'bancuri-diverse';
    AppConstants.ROUTE_CULMI = 'culmi';
    AppConstants.ROUTE_GHICITORI = 'ghicitori';
    AppConstants.ROUTE_FABULE = 'fabule';
    AppConstants.ROUTE_POEZII = 'poezii';
    AppConstants.ROUTE_POVESTI = 'povesti';
    AppConstants.ROUTE_ANUNTURI_ROMANESTI = 'anunturi-romanesti';
    // routes TIMP LIBER
    AppConstants.ROUTE_JOCURI_APA_APA_FOC_FOC = 'jocuri-apa-apa-foc-foc';
    AppConstants.ROUTE_JOCURI_CAPRA = 'jocuri-capra';
    AppConstants.ROUTE_JOCURI_CASTELUL_123 = 'jocuri-castelul-123';
    AppConstants.ROUTE_JOCURI_LAPTE_GROS = 'jocuri-lapte-gros';
    AppConstants.ROUTE_JOCURI_INCETUL_CU_INCETUL_SE_FABRICA_OTETUL = 'jocuri-incetul-cu-incetul-se-fabrica-otetul';
    AppConstants.ROUTE_JOCURI_SOTRONUL = 'jocuri-sotronul';
    AppConstants.ROUTE_JOCURI_NUMARATORI = 'jocuri-numaratori';
    AppConstants.ROUTE_JOCURI_MEMORY_GAME = 'jocuri-memory-game';
    // routes LISTE
    AppConstants.ROUTE_CARTI_CRESTINE = 'carti-crestine';
    AppConstants.ROUTE_CARTI_INTERESANTE = 'carti-interesante';
    AppConstants.ROUTE_TOP_DESENE = 'top-desene';
    AppConstants.ROUTE_TOP_FILME = 'top-filme';
    AppConstants.ROUTE_TOP_LISTE_UIMITOARE = 'top-liste-uimitoare';
    // routes MEDIA
    AppConstants.ROUTE_GIFS_COOL = 'gifs-cool';
    AppConstants.ROUTE_GIFS_FAIL = 'gifs-fail';
    AppConstants.ROUTE_GIFS_FUNNY = 'gifs-funny';
    AppConstants.ROUTE_GIFS_INTERESTING = 'gifs-interesting';
    AppConstants.ROUTE_GIFS_WOW = 'gifs-wow';
    AppConstants.ROUTE_GIFS_REACTION = 'gifs-reaction';
    AppConstants.ROUTE_YOUTUBE_DOCUMENTARIES = 'youtube-documentaries';
    AppConstants.ROUTE_YOUTUBE_FUNNY = 'youtube-funny';
    AppConstants.ROUTE_YOUTUBE_CHANNELS = 'youtube-channels';
    AppConstants.ROUTE_MUSIC_CALM = 'music-calm';
    AppConstants.ROUTE_MUSIC_CHILL = 'music-chill';
    AppConstants.ROUTE_MUSIC_CLUB = 'music-club';
    AppConstants.ROUTE_MUSIC_SPACE_OUT = 'music-space-out';
    AppConstants.ROUTE_WALLPAPERS = 'wallpapers';
    // routes WISDOM
    AppConstants.ROUTE_AFORSIME_MAXIME = 'aforisme-maxime';
    AppConstants.ROUTE_CREZUL_CRESTIN = 'crezul-crestin';
    AppConstants.ROUTE_EREZII = 'erezii';
    AppConstants.ROUTE_SFINTII_PARINTI = 'sfintii-parinti';
    AppConstants.ROUTE_DICTONURI = 'dictonuri';
    AppConstants.ROUTE_EXPRESII = 'expresii';
    AppConstants.ROUTE_SANATATE = 'sanatate';
    AppConstants.ROUTE_POVETE = 'povete';
    AppConstants.ROUTE_SUPERSTITII = 'superstitii';
    AppConstants.ROUTE_CITATE_ABRAHAM_LINCOLN = 'abraham-lincoln';
    AppConstants.ROUTE_CITATE_ALBERT_EINSTEIN = 'albert-einstein';
    AppConstants.ROUTE_CITATE_ARISTOTEL = 'aristotel';
    AppConstants.ROUTE_CITATE_BENJAMIN_FRANKLIN = 'benjamin-franklin';
    AppConstants.ROUTE_CITATE_BUDDHA = 'buddha';
    AppConstants.ROUTE_CITATE_CONFUCIUS = 'confucius';
    AppConstants.ROUTE_CITATE_DALAI_LAMA = 'dalai-lama';
    AppConstants.ROUTE_CITATE_DEMOCRIT = 'democrit';
    AppConstants.ROUTE_CITATE_EURIPIDE = 'euripide';
    AppConstants.ROUTE_CITATE_GEORGE_BERNARD_SHAW = 'george-bernard-shaw';
    AppConstants.ROUTE_CITATE_GEORGE_WASHINGTON = 'george-washington';
    AppConstants.ROUTE_CITATE_IMMANUEL_KANT = 'immanuel-kant';
    AppConstants.ROUTE_CITATE_LAO_TZU = 'lao-tzu';
    AppConstants.ROUTE_CITATE_LUCIUS_ANNAEUS_SENECA = 'lucius-annaeus-seneca';
    AppConstants.ROUTE_CITATE_MAHATMA_GANDHI = 'mahatma-gandhi';
    AppConstants.ROUTE_CITATE_MAICA_TEREZA = 'maica-tereza';
    AppConstants.ROUTE_CITATE_MARK_TWAIN = 'mark-twain';
    AppConstants.ROUTE_CITATE_MARTIN_LUTHER_KING_JR = 'martin-luther-king-jr';
    AppConstants.ROUTE_CITATE_NAPOLEON_BONAPARTE = 'napoleon-bonaparte';
    AppConstants.ROUTE_CITATE_NEALE_DONALD_WALSH = 'neale-donald-walsh';
    AppConstants.ROUTE_CITATE_OSCAR_WILDE = 'oscar-wilde';
    AppConstants.ROUTE_CITATE_PABLO_PICASSO = 'pablo-picasso';
    AppConstants.ROUTE_CITATE_PLATON = 'platon';
    AppConstants.ROUTE_CITATE_PUBLILIUS_SYRUS = 'publilius-syrus';
    AppConstants.ROUTE_CITATE_RALPH_WALDO_EMERSON = 'ralph-waldo-emerson';
    AppConstants.ROUTE_CITATE_RICHARD_WURMBRAND = 'richard-wurmbrand';
    AppConstants.ROUTE_CITATE_SFANTUL_AUGUSTIN = 'sfantul-augustin';
    AppConstants.ROUTE_CITATE_SFANTUL_CIPRIAN = 'sfantul-ciprian';
    AppConstants.ROUTE_CITATE_SFANTUL_IOAN_GURA_DE_AUR = 'sfantul-ioan-gura-de-aur';
    AppConstants.ROUTE_CITATE_SFANTUL_IOAN_SCARARUL = 'sfantul-ioan-scararul';
    AppConstants.ROUTE_CITATE_SFANTUL_IRINEU = 'sfantul-irineu';
    AppConstants.ROUTE_CITATE_SFANTUL_PETRU = 'sfantul-petru';
    AppConstants.ROUTE_CITATE_SFANTUL_SIMEON_NOUL_TEOLOG = 'sfantul-simeon-noul-teolog';
    AppConstants.ROUTE_CITATE_SFANTUL_VASILE_CEL_MARE = 'sfantul-vasile-cel-mare';
    AppConstants.ROUTE_CITATE_SOCRATES = 'socrates';
    AppConstants.ROUTE_CITATE_STEVEN_WRIGHT = 'steven-wright';
    AppConstants.ROUTE_CITATE_SUN_TZU = 'sun-tzu';
    AppConstants.ROUTE_CITATE_THOMAS_JEFFERSON = 'thomas-jefferson';
    AppConstants.ROUTE_CITATE_WILLIAM_SHAKESPEARE = 'william-shakespeare';
    AppConstants.ROUTE_CITATE_WINSTON_CHURCHILL = 'winston-churchill';
    AppConstants.ROUTE_CITATE_ALTE_CITATE = 'alte-citate';
    AppConstants.ROUTE_CUVINTE = 'cuvinte';
    AppConstants.ROUTE_DEVIZE_DE_VIATA = 'devize-de-viata';
    AppConstants.ROUTE_LOZINCI = 'lozinci';
    AppConstants.ROUTE_FACTS = 'facts';
    // routes FOLOSITOARE
    AppConstants.ROUTE_CONSTITUTIA_ROMANIEI = 'constitutia-romaniei';
    AppConstants.ROUTE_DREPTURILE_OMULUI = 'drepturile-omului';
    AppConstants.ROUTE_CODUL_BUNELOR_MANIERE = 'codul-bunelor-maniere';
    AppConstants.ROUTE_CODUL_PENAL = 'codul-penal';
    AppConstants.ROUTE_IDEOLOGII = 'ideologii';
    AppConstants.ROUTE_ISTORIE = 'istorie';
    AppConstants.ROUTE_LEGENDE_SI_MITURI = 'legende-si-mituri';
    return AppConstants;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map