# Quadratic Funding Example

```sh
npm install @loremlabs/quadratic-funding
```

## Simple.js Usage

Included is a small script, `simple.js`, that demonstrates how to use the library. It takes a single argument, `table`, `json`, or `csv`, and outputs the results in the requested format.

When called, `calculateQf` will return an array of projects, each with a `match` property that is the amount of match funding that should be awarded to that project.

```sh
node simple.js table
```

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

```sh
node simple.js json
```

```json
{
  "projects": [
    {
      "identifier": "kudos-for-code",
      "match": 20,
      "contributions": [
        {
          "amount": 100
        }
      ]
    },
    {
      "identifier": "kudos-for-design",
      "match": 80,
      "contributions": [
        {
          "amount": 100
        },
        {
          "amount": 100
        }
      ]
    }
  ]
}
```

```sh
node simple.js csv
```

```
Project,Contributions,Contributions Total,Match,Total
kudos-for-code,1,100,20,120
kudos-for-design,2,200,80,280
```
