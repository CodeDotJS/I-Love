const colors = require('colors');

const argv = require('yargs')
    .usage('Usage: $0 -u [/user.name]'.info)
    .demand(['u'])
    .describe('u', ' : black | red | green | yellow | blue | magenta | cyan')
    .argv;

colors.setTheme({
	info: [argv.u, 'bold']
});

console.log('\n\t 	❦❦❦❦❦❦           ❦❦❦❦❦❦'.info);
console.log('\t      ❦❦❦❦❦❦❦❦❦❦       ❦❦❦❦❦❦❦❦❦❦'.info);
console.log('\t    ❦❦❦❦❦❦❦❦❦❦❦❦❦❦   ❦❦❦❦❦❦❦❦❦❦❦❦❦❦'.info);
console.log('\t  ❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦ ❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦'.info);
console.log('\t ❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦'.info);
console.log('\t❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦'.info);
console.log('\t❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦'.info);
console.log('\t❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦'.info);
console.log('\t ❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦'.info);
console.log('\t  ❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦'.info);
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
