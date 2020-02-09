'use strict';
const chalk = require('chalk');
const symbols = require('log-symbols');

const fullFormat = (symbol, message, extraIndent = '|', ...extra) => [
	chalk.bold(symbol),
	chalk.underline(message),
	...extra.reduce((acc, cur) => [...acc, '\n', extraIndent, cur], [])
];

const statusReporter = (exit = false, chalkConfig, symbol, message, ...extra) => {
	const reporter = {};
	const formattedMessage = fullFormat(symbol, chalkConfig(message), chalkConfig('|'), ...extra);
	const logger = exit ? console.error : console.error;

	reporter.template = () => {
		logger(...formattedMessage);
		exit && process.exit(1);
	}
	reporter.template.fullMessage = formattedMessage.join(' ');


	return reporter.template;
};

const success = (message, ...extra) => statusReporter(false, chalk.green, symbols.success, message, ...extra);
const error = (message, ...extra) => statusReporter(true, chalk.red, symbols.error, message, ...extra);
const warn = (message, ...extra) => statusReporter(false, chalk.yellow, symbols.warning, message, ...extra);
const info = (message, ...extra) => statusReporter(false, chalk.blueBright, symbols.info, message, ...extra);

module.exports = {
	success,
	error,
	warn,
	info
};
