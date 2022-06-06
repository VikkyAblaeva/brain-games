#!/usr/bin/env node

import { greeting } from '../src/cli.js';

import even from '../src/cliEven.js';

console.log('Welcome to the Brain Games!');
console.log(greeting());
console.log(even());
