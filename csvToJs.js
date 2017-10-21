#!/usr/bin/env node

const fs = require('fs')

// csv file from http://api.bitcoincharts.com/v1/csv/

// https://bitcoincharts.com/about/markets-api/

// unixtime,price,amount

fs.readFile('thUSD.csv', (err, csvString) => {
  fs.writeFile('theUSD.js',
    'const theUSD=' + JSON.stringify(
      csvString.toString().trim()
        .split('\n').map(l=>l.split(','))
    )
  )
})
