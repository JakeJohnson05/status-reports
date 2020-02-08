'use strict';
const chalk = require('chalk');
const symbols = require('log-symbols');

const formatter = {
	symbol: symbol => chalk.bold(symbol),
	message: message => chalk.underline(message)
};

const fullFormat = (symbol, message, ...extra) => [
	formatter.symbol(symbol),
	formatter.message(message),
	'\n',
	...extra
];

const statusReporter = (symbol, message, ...extra) => {
	const reporter = {};

	reporter.template = () => console.log(...fullFormat(symbol, message, ...extra));

	reporter.template.symbol = formatter.symbol(symbol);
	// reporter.template.message = formatter.message(message);
	reporter.template.message = chalk.underline(message);
	reporter.template.extra = [...extra];

	return reporter.template;
};

const success = (message, ...extra) => statusReporter(symbols.success, chalk.green(message), ...extra);
const error = (message, ...extra) => statusReporter(symbols.error, chalk.red(message), ...extra);
const warn = (message, ...extra) => statusReporter(symbols.warning, chalk.yellow(message), ...extra);
const info = (message, ...extra) => statusReporter(symbols.info, chalk.blueBright(message), ...extra);

module.exports = {
	success,
	error,
	warn,
	info
};
