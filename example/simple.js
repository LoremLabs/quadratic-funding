import Table from "cli-table3";
// import { calculateQf } from '@loremlabs/quadratic-funding';
import { calculateQf } from "../dist/index.js";
import colors from "colors";

// see how the script is called
const args = process.argv.slice(2);
if (args.length !== 1) {
  console.log("Usage: node simple.js {csv|json|table}");
  process.exit(1);
}

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

const matchingAmount = 100;

const qf = calculateQf(projects, matchingAmount); // here

if (args[0] === "table") {
  // report the matching amounts for each project identifier
  const table = new Table({
    head: ["Project", "Contributions", "Contributions Total", "Match", "Total"],
  });
  qf.projects.forEach((project) => {
    const contributions = project.contributions.reduce(
      (acc, cur) => acc + cur.amount,
      0
    );
    table.push([
      project.identifier,
      project.contributions.length,
      contributions,
      project.match,
      contributions + project.match,
    ]);
  });
  console.log(colors.cyan("Quadratic Funding"));
  console.log("=".repeat("Quadratic Funding".length) + "\n");
  console.log("Matching Amount: " + colors.green(matchingAmount) + "\n");
  console.log(table.toString());
} else if (args[0] === "csv") {
  // CSV representation
  console.log("=".repeat(80) + "\n");

  console.log(
    ["Project", "Contributions", "Contributions Total", "Match", "Total"].join(
      ","
    )
  );
  qf.projects.forEach((project) => {
    const contributions = project.contributions.reduce(
      (acc, cur) => acc + cur.amount,
      0
    );
    console.log(
      [
        project.identifier,
        project.contributions.length,
        contributions,
        project.match,
        contributions + project.match,
      ].join(",")
    );
  });
} else {
  // JSON representation
  console.log("=".repeat(80) + "\n");
  console.log(JSON.stringify(qf, null, 2));
}
