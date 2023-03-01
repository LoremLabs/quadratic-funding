"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateQf = void 0;
// given a list of projects: [{ identifier, contributions = [{ amount }] }], and a total matching amount,
// calculate the quadratic funding match of each item
const calculateQf = (projects, matchingAmount) => {
    // check if projects is an array
    if (!Array.isArray(projects)) {
        throw new Error("projects must be an array");
    }
    // check that we have a matching amount
    if (isNaN(matchingAmount)) {
        throw new Error("matchingAmount must be provided");
    }
    // check that the matching amount is greater or equal to 0
    if (matchingAmount < 0) {
        throw new Error("matchingAmount must be greater or equal to 0");
    }
    let totalAmounts = 0; // total of all the project amounts
    // loop through the projects and calculate the quadratic funding match
    projects.forEach((project) => {
        // check if project contains an identifier and it's defined
        if (project.identifier === undefined) {
            throw new Error("project must contain a defined identifier");
        }
        if (project.identifier === "") {
            throw new Error("project must contain an identifier");
        }
        // Sum the square root of each project's contribution amount
        let totalContributionAmounts = 0;
        project.contributions.forEach((contribution) => {
            // check that the contribution amount is a number
            if (typeof contribution.amount !== "number") {
                throw new Error("contribution amount must be a number");
            }
            // check that the contribution amount is greater than 0
            if (contribution.amount <= 0) {
                throw new Error("contribution amount must be greater than 0");
            }
            totalContributionAmounts += Math.sqrt(contribution.amount);
        });
        // Square the total value of each totalAmounts project contributions
        const match = totalContributionAmounts * totalContributionAmounts;
        totalAmounts += match;
        // totalContributors += project.contributions.length;
        project.match = match;
        // console.log(JSON.stringify({ project }));
    });
    const matchScale = matchingAmount / totalAmounts;
    // Multiply matched values with avgMatch to get match amount in range of available funds
    const qf = {
        projects: projects.map((project) => {
            if (typeof project.match !== "undefined") {
                project.match = project.match * matchScale;
            }
            return Object.assign({}, project);
        }),
        totalMatch: matchingAmount,
    };
    return qf;
};
exports.calculateQf = calculateQf;
//# sourceMappingURL=index.js.map