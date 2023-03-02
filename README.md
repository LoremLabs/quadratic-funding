# quadratic-funding

![Version](https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000)
[![License: Kudos--MIT](https://img.shields.io/badge/License-Kudos--MIT-yellow.svg)](#)
[![Twitter: loremlabs](https://img.shields.io/twitter/follow/loremlabs.svg?style=social)](https://twitter.com/loremlabs)

> Javascript library for calculating quadratic funding matches

# Quadratic Funding

> The way that this payment is calculated is as follows: for any given project, take the square root of each contributor's contribution, add these values together, and take the square of the result. - [@VitalikButerin](https://vitalik.ca/general/2019/12/07/quadratic.html)

## Install

```sh
npm install @loremlabs/quadratic-funding
```

## Usage

When called, `calculateQf` will return an array of projects, each with a `match` property that is the amount of match funding that should be awarded to that project.



```js
import { calculateQf } from '@loremlabs/quadratic-funding';

// pass in an array of projects, each with an identifier and an array of contributions
const projects = [
  {
    identifier: "kudos-for-code",
    match: 0,
    contributions: [
      {
        amount: 100,
      },
    ],
  },
  {
    identifier: "kudos-for-design",
    match: 0,
    contributions: [
      {
        amount: 100,
      },
      {
        amount: 100,
      },
    ],
  },
];

// set a matching amount
const matchingAmount = 100;

// calculate the match
const results = calculateQf(projects, matchingAmount);

// now results will include the match amount for each project
console.log(JSON.stringify(qf, null, 2));
```

## Example

See the `example` directory for a simple example of how to use the library.

### Run example

```sh
    node example/simple.js table
```

Should return:

```
Quadratic Funding
=================

Matching Amount: 100

┌──────────────────┬───────────────┬─────────────────────┬───────┬───────┐
│ Project          │ Contributions │ Contributions Total │ Match │ Total │
├──────────────────┼───────────────┼─────────────────────┼───────┼───────┤
│ kudos-for-code   │ 1             │ 100                 │ 20    │ 120   │
├──────────────────┼───────────────┼─────────────────────┼───────┼───────┤
│ kudos-for-design │ 2             │ 200                 │ 80    │ 280   │
└──────────────────┴───────────────┴─────────────────────┴───────┴───────┘
```


## Run tests

Tests and coverage are run using Jest. To run the tests, run the following command:

```sh
npm run test
```

## Author

👤 **Matt Mankins / Lorem Labs**

- Twitter: [@loremlabs](https://twitter.com/loremlabs)

- Twitter: [@mankins](https://twitter.com/mankins)
- Github: [@mankins](https://github.com/mankins)

## Show your support

Give a ⭐️ if this project helped you!
