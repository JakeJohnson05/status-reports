'use strict';
const chalk = require('chalk');
const symbols = require('log-symbols');

const fullFormat = (symbol, message, extraIndent = '|', ...extra) => [
	chalk.bold(symbol),
	chalk.underline(message),
	...extra.reduce((acc, cur) => [...acc, '\n', extraIndent, cur], [])
];

const statusReporter = (logger, chalkConfig, symbol, message, ...extra) => {
	const reporter = {};
	const formattedMessage = fullFormat(symbol, chalkConfig(message), chalkConfig('|'), ...extra);

	reporter.template = () => logger(...formattedMessage);
	reporter.template.fullMessage = formattedMessage.join(' ');

	return reporter.template;
};

const success = (message, ...extra) => statusReporter(console.log, chalk.green, symbols.success, message, ...extra);
const error = (message, ...extra) => statusReporter(console.error, chalk.red, symbols.error, message, ...extra);
const warn = (message, ...extra) => statusReporter(console.log, chalk.yellow, symbols.warning, message, ...extra);
const info = (message, ...extra) => statusReporter(console.log, chalk.blueBright, symbols.info, message, ...extra);

module.exports = {
	success,
	error,
	warn,
	info
};
