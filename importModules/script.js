// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

import { num1, num2 } from "./js/variable.js";
import { add } from "./js/functions.js";

console.log(num1);
console.log(num2);

let sum = add(num1, num2);

console.log(sum);