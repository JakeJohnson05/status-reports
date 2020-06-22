const test = require('ava');
const statusReporter = require('..');
const chalk = require('chalk');
const symbols = require('log-symbols');

// Const successReporter = statusReporter.success('Successfully Completed', 'We did it successfully');
// const infoReporter = statusReporter.info('Here is some info', 'Read all about it', 'info info');
// const errorReporter = statusReporter.error('Here is an error', 'uh oh', 'this was bad', 'insert trace here');
// const warnReporter = statusReporter.warn('This is a warning!');

test('Symbol', t => {
	// T.is(successReporter.symbol, chalk.bold(symbols.success));
	// t.is(infoReporter.symbol, chalk.bold(symbols.info));
	// t.is(errorReporter.symbol, chalk.bold(symbols.error));
	// t.is(warnReporter.symbol, chalk.bold(symbols.warning));
});

test('Message', t => {
	// T.is(successReporter.message, 'Successfully Completed');
	// t.is(chalk.underline('foo'), '\u001B[4mfoo\u001B[24m');
	// t.is(chalk.red('foo'), '\u001B[31mfoo\u001B[39m');
	// t.is(infoReporter.message, chalk.yellow('Here is some info'));
	// t.is(errorReporter.message, 'Here is an error');
	// t.is(warnReporter.message, 'This is a warning!');
});
