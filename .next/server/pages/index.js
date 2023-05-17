(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 1433:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "MeetupItem_item__pvgsv",
	"image": "MeetupItem_image__0jYm_",
	"content": "MeetupItem_content__fvTRB",
	"actions": "MeetupItem_actions__IeeH4"
};


/***/ }),

/***/ 3717:
/***/ ((module) => {

// Exports
module.exports = {
	"list": "MeetupList_list__C2D8b"
};


/***/ }),

/***/ 5307:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "Card_card__73YTa"
};


/***/ }),

/***/ 2844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5307);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);


function Card(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().card),
        children: props.children
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);


/***/ }),

/***/ 38:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: ./components/ui/Card.js
var Card = __webpack_require__(2844);
// EXTERNAL MODULE: ./components/meetups/MeetupItem.module.css
var MeetupItem_module = __webpack_require__(1433);
var MeetupItem_module_default = /*#__PURE__*/__webpack_require__.n(MeetupItem_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/meetups/MeetupItem.js





function MeetupItem(props) {
    const router = (0,router_namespaceObject.useRouter)();
    const showDetailsHandler = ()=>{
        router.push("/" + props.id);
    };
    return /*#__PURE__*/ jsx_runtime.jsx("li", {
        className: (MeetupItem_module_default()).item,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: (MeetupItem_module_default()).image,
                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                        src: props.image,
                        alt: props.title
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (MeetupItem_module_default()).content,
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                            children: props.title
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("address", {
                            children: props.address
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: (MeetupItem_module_default()).actions,
                    children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                        onClick: showDetailsHandler,
                        children: "Show Details"
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const meetups_MeetupItem = (MeetupItem);

// EXTERNAL MODULE: ./components/meetups/MeetupList.module.css
var MeetupList_module = __webpack_require__(3717);
var MeetupList_module_default = /*#__PURE__*/__webpack_require__.n(MeetupList_module);
;// CONCATENATED MODULE: ./components/meetups/MeetupList.js



function MeetupList(props) {
    return /*#__PURE__*/ jsx_runtime.jsx("ul", {
        className: (MeetupList_module_default()).list,
        children: props.meetups.map((meetup)=>/*#__PURE__*/ jsx_runtime.jsx(meetups_MeetupItem, {
                id: meetup.id,
                image: meetup.image,
                title: meetup.title,
                address: meetup.address
            }, meetup.id))
    });
}
/* harmony default export */ const meetups_MeetupList = (MeetupList);

;// CONCATENATED MODULE: ./pages/index.js
//our-domain.com/new-meetup
// import Layout from "../components/layout/Layout";


const DUMMY_MEETUPS = [
    {
        id: "m1",
        title: "A First Meetup",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
        address: "Some address 5, 12345 Some City",
        description: "This is a first meetup!"
    },
    {
        id: "m2",
        title: "A Second Meetup",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
        address: "Some address 10, 12345 Some City",
        description: "This is a second meetup!"
    }
];
function HomePage(props) {
    // return <MeetupList meetups={DUMMY_MEETUPS} />;
    return /*#__PURE__*/ jsx_runtime.jsx(meetups_MeetupList, {
        meetups: props.meetups
    });
}
const getStaticProps = async ()=>{
    //fetch data from an API/DB
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        revalidate: 10
    };
};
// //This now only works in our page component files, not in other component files. Only in component files inside of the pages folder.  NextJS will look for a function with that name and if it finds it, it executes this function during this pre-rendering process. The code in this f-on will never be executed on the client side. Returns an object with static props
// //One of the main features of NextJS, this data fetching for pre-rendering.
// export const getServerSideProps = (context) => {
//   const req = context.req;
//   const res = context.res;
//   //fetch data from an API/DB
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };
/* harmony default export */ const pages = (HomePage); //We should only use getServerSideProps if we need access to that concrete request object.  Or if we have data that changes multiple times every second, then therefore even revalidate won't help us, then getServerSideProps is a great choice.


/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893], () => (__webpack_exec__(38)));
module.exports = __webpack_exports__;

})();