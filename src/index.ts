import * as core from '@actions/core'

const myname = core.getInput("myname");

console.log("hola " + myname);
