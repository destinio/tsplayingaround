"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sayAge_js_1 = require("./sayAge.js");
const sayHello = (name) => {
    console.log(name);
    (0, sayAge_js_1.sayAge)();
};
sayHello('James');
