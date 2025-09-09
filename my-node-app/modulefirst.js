// const simple = require("./modulesecond.mjs");
// simple();                                     // common js module (export from modulesecond.js)



// to excess esm module syntax
// import { simple } from "./modulesecond.mjs";

// simple();                                     // esm module syntax (export from modulesecond.mjs), but need to to change .mjs from where you are exporting .


import * as a from "./modulesecond.mjs";
console.log(a.simple());                     // esm module syntax (export from modulesecond.mjs) using namespace import







// if we want to run this from third line tthen we have to add type in json as module
