// import * as core from '@actions/core';
const core = require('@actions/core');

console.log(`Hola ${core.getInput(myname)}`);
console.log("Hola " + core.getInput(myname));
