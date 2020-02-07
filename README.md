# Status Reports

This is simply a package that simplifies status updates in the log output.
Just to make all logging for status updates more uniform.

## Install
```console
$ npm install @codexist/status-reports
```

## Usage
```js
const statusReporter = require('status-reports');

statusReporter.success('Database successfully synced');
```

All Options

```js
const statusReporter = require('status-reports');

statusReporter.success(string, [...string]);
statusReporter.error(string, [...string]);
statusReporter.warn(string, [...string]);
statusReporter.info(string, [...string]);
```
