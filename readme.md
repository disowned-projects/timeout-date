# timeout-date

[![Build Status](https://travis-ci.org/doshisid/timeout-date.svg?branch=master)](https://travis-ci.org/doshisid/timeout-date) [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/doshisid/timeout-date/issues) [![HitCount](http://hits.dwyl.io/doshisid/timeout-date.svg)](http://hits.dwyl.io/doshisid/timeout-date) [![npm](https://img.shields.io/npm/v/timeout-date.svg)](https://www.npmjs.com/package/timeout-date) [![npm](https://img.shields.io/npm/l/timeout-date.svg)](https://www.npmjs.com/package/timeout-date)

> Set timeout using date objects

## Install

```bash
npm install --save timeout-date
```

## Usage

```js
const timeoutDate = require('timeout-date')

// Current time is 'Sat Feb 24 2018 5:00:00 GMT+0530 (IST)'
const date = new Date('Sat Feb 24 2018 5:30:00 GMT+0530 (IST)')
// You have a date object 30 minutes later from now
const later = timeoutDate(() => console.log('Hooray!'), date)

// The timeout object is returned.
// clearTimeout(later)
```

## API

timeoutDate(callback, [date])

`timeoutDate` takes a callback and an optional date object. If no date object is
provided, timeout is triggered immideatly. The second argument if provided,
must be a valid date object.

Returns a Timeout for use with clearTimeout().

Note: When delay is larger than 2147483647 (around 25 days) or less than 1, the
delay will be set to 1. This is the default setTimeout behaviour.

## License

MIT © [Siddharth Doshi](https://sid.sh)
