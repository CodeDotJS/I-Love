#!/usr/bin/env node

'use strict';

const colors = require('colors');

colors.setTheme({
	start: ['cyan', 'bold']
});

const argv = require('yargs')
  .usage('\nUsage: $0 <option> [name] <option> [color]'.start)
  .describe('u', ' ❱ any name.')
  .describe('c', ' ❱ choose colors from the options given below.')
  .demand(['u', 'c'])
  .example('\n Colors : black, red, green, blue')
  .example('       : yellow, magenta, cyan, grey')
  .example('\n Extras : rainbow, america, zebra, random')
  .example('\n Usage  : $0 -n UNICORN -n rainbow')
  .argv;

colors.setTheme({
	info: [argv.c, 'bold']
});

colors.setTheme({
	make: ['cyan', 'bold']
});

const updateNotifier = require('update-notifier');

const pkg = require('./package.json');

updateNotifier({pkg}).notify();

console.log('\n\t 	❦❦❦❦❦❦           ❦❦❦❦❦❦'.info);
console.log('\t      ❦❦❦❦❦❦❦❦❦❦       ❦❦❦❦❦❦❦❦❦❦'.info);
console.log('\t    ❦❦❦❦❦❦❦❦❦❦❦❦❦❦   ❦❦❦❦❦❦❦❦❦❦❦❦❦❦'.info);
console.log('\t  ❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦ ❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦'.info);
console.log('\t ❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦'.info);
console.log('\t❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦'.info);
console.log('\t❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦'.info);
console.log('\t ❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦'.info);
console.log('\t  ❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦'.info);
console.log('\t\t\t' + argv.u.toUpperCase().make);
console.log('\t   ❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦'.info);
console.log('\t    ❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦'.info);
console.log('\t      ❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦'.info);
console.log('\t        ❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦'.info);
console.log('\t          ❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦'.info);
console.log('\t            ❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦'.info);
console.log('\t              ❦❦❦❦❦❦❦❦❦❦❦'.info);
console.log('\t                ❦❦❦❦❦❦❦'.info);
console.log('\t                  ❦❦❦'.info);
console.log('\t                   ❦\n'.info);
