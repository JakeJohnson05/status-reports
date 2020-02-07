'use strict';
const chalk = require('chalk');
const symbols = require('log-symbols');

const logger = (symbol, message, ...extra) => console.log(chalk.bold(symbol), chalk.underline(message), '\n', ...extra);

const success = (message, ...extra) => logger(symbols.success, chalk.green(message), ...extra);
const error = (message, ...extra) => logger(symbols.error, chalk.red(message), ...extra);
const warn = (message, ...extra) => logger(symbols.warning, chalk.yellow(message), ...extra);
const info = (message, ...extra) => logger(symbols.info, chalk.blueBright(message), ...extra);

module.exports = {
	success,
	error,
	warn,
	info
}
