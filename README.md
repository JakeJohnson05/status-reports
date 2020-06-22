# Status Reports

This is simply a package that simplifies status updates in the log output.

Just to make all logging for status updates more uniform.

[![Build Status](https://travis-ci.org/chalk/chalk.svg?branch=master)](https://travis-ci.org/chalk/chalk)
[![Coverage Status](https://coveralls.io/repos/github/chalk/chalk/badge.svg?branch=master)](https://coveralls.io/github/chalk/chalk?branch=master)
[![npm dependents](https://badgen.net/npm/dependents/chalk)](https://www.npmjs.com/package/chalk?activeTab=dependents)
[![Downloads](https://badgen.net/npm/dt/chalk)](https://www.npmjs.com/package/chalk)

## Install

```console
$ npm install @codexist/status-reports
```

## Usage

```js
const statusReporter = require('@codexist/status-reports');

statusReporter.success('Database successfully synced');
```

## API

### statusReporter.`<logLevel>(string, [...string])` &darr;

#### logLevel


#### success
#### error
#### warn
#### info

```js
const statusReporter = require('@codexist/status-reports');

statusReporter.success(string, [...string]);
statusReporter.error(string, [...string]);
statusReporter.warn(string, [...string]);
statusReporter.info(string, [...string]);
```

## Related

- [chalk](https://github.com/chalk/chalk#readme) - console text coloring
- [log-symbols](https://github.com/sindresorhus/log-symbols#readme)

---
