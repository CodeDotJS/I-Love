
#!/usr/bin/env node

'use strict';

const colors = require('colors');

colors.setTheme({
	start: ['yellow', 'bold']
});

const argv = require('yargs')
  .usage('\nUsage: $0 -u unicorn -c rainbow'.start)
  .describe('u', 'Name')
  .describe('c', 'Set Colors')
  .demand(['u', 'c'])
  .argv;

colors.setTheme({
	info: [argv.c, 'bold']
});

colors.setTheme({
	make: ['cyan', 'bold']
});

console.log('\n\n\n\t 	❦❦❦❦❦❦           ❦❦❦❦❦❦'.info);
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
console.log('\t                   ❦\n\n\n'.info);
