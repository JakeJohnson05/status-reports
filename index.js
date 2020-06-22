'use strict';

const chalk = require('chalk');
const symbols = require('log-symbols');

const fullFormat = (symbol, message, extraIndent = '|', ...extra) => [
	chalk.bold(symbol),
	chalk.underline(message),
	...extra.reduce((acc, cur) => [...acc, '\n', extraIndent, cur], [])
];

const statusReporter = (exitProcess, config, message, ...extra) => {
	const formattedMessage = fullFormat(config.symbol, config.chalk(message), config.chalk('|'), ...extra);
	const logger = exitProcess ? console.error : console.log;
	const reporter = {};

	reporter.template = () => {
		logger(...formattedMessage);
		if (exitProcess) {
			throw new Error(message);
		}
	};

	reporter.template.fullMessage = formattedMessage.join(' ');

	return reporter.template;
};

const config = {
	success: {chalk: chalk.green, symbol: symbols.success},
	error: {chalk: chalk.red, symbol: symbols.error},
	warn: {chalk: chalk.yellow, symbol: symbols.warn},
	info: {chalk: chalk.blueBright, symbol: symbols.info}
};

const success = (message, ...optionalParams) => statusReporter(false, config.success, message, ...optionalParams);
const error = (message, ...optionalParams) => statusReporter(true, config.error, message, ...optionalParams);
const warn = (message, ...optionalParams) => statusReporter(false, config.warn, message, ...optionalParams);
const info = (message, ...optionalParams) => statusReporter(false, config.info, message, ...optionalParams);

module.exports = {
	success,
	error,
	warn,
	info
};
