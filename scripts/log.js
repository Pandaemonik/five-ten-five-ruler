import { MODULE_ID } from "./main.js";

export const log = function(...args) {
    console.log(MODULE_ID, '|', ...args);
};

