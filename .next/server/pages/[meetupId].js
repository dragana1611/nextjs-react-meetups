(() => {
var exports = {};
exports.id = 549;
exports.ids = [549];
exports.modules = {

/***/ 2501:
/***/ ((module) => {

// Exports
module.exports = {
	"detail": "MeetupDetail_detail__HjAUt"
};


/***/ }),

/***/ 8041:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _meetupId_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./components/meetups/MeetupDetail.module.css
var MeetupDetail_module = __webpack_require__(2501);
var MeetupDetail_module_default = /*#__PURE__*/__webpack_require__.n(MeetupDetail_module);
;// CONCATENATED MODULE: ./components/meetups/MeetupDetail.js


const MeetupDetail = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: (MeetupDetail_module_default()).detail,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("img", {
                src: props.image,
                alt: props.title
            }),
            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                children: props.title
            }),
            /*#__PURE__*/ jsx_runtime.jsx("address", {
                children: props.address
            }),
            /*#__PURE__*/ jsx_runtime.jsx("p", {
                children: props.description
            })
        ]
    });
};
/* harmony default export */ const meetups_MeetupDetail = (MeetupDetail);

;// CONCATENATED MODULE: ./pages/[meetupId]/index.js


function MeetupDetails() {
    return /*#__PURE__*/ jsx_runtime.jsx(meetups_MeetupDetail, {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
        title: "First Meetup",
        address: "Some Street 5, Some City",
        description: "This is a first meetup"
    });
}
async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: "m1"
                }
            },
            {
                params: {
                    meetupId: "m2"
                }
            }
        ]
    };
}
async function getStaticProps(context) {
    // fetch data for a single meetup
    const meetupId = context.params.meetupId;
    console.log(meetupId);
    return {
        props: {
            meetupData: {
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
                id: meetupId,
                title: "First Meetup",
                address: "Some Street 5, Some City",
                description: "This is a first meetup"
            }
        }
    };
}
/* harmony default export */ const _meetupId_ = (MeetupDetails); //getStaticPaths  is another important function, which we need in dynamic pages to tell NextJS for which dynamic parameter values this page should be pre-generated. And then again, getStaticProps executes for every page.


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
var __webpack_exports__ = __webpack_require__.X(0, [893], () => (__webpack_exec__(8041)));
module.exports = __webpack_exports__;

})();