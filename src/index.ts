import * as core from '@actions/core'

const myname = core.getInput("myname");

console.log("hola " + myname);
console.log(`Hola, por fin funciona esto ${myname}`);
