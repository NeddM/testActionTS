import { getInput } from '@actions/core';

const myname = getInput("name");

// console.log(`Hello ${myname}`);
console.log("hola " + myname);
