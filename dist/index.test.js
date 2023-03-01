"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe("It should throw errors if the input is invalid", () => {
    test("should throw an error if projects is not an array", () => {
        expect(() => (0, index_1.calculateQf)({}, 0)).toThrow("projects must be an array");
    });
    test("should throw an error if matchingAmount is not provided", () => {
        expect(() => (0, index_1.calculateQf)([], undefined)).toThrow("matchingAmount must be provided");
    });
    test("should throw an error if matchingAmount is less than 0", () => {
        expect(() => (0, index_1.calculateQf)([], -1)).toThrow("matchingAmount must be greater or equal to 0");
    });
    test("should throw an error if project does not contain an identifier", () => {
        expect(() => (0, index_1.calculateQf)([{ amount: 0, match: 0, }], 0)).toThrow("project must contain a defined identifier");
    });
    test("should throw an error if project contains an empty identifier", () => {
        expect(() => (0, index_1.calculateQf)([{ amount: 0, match: 0, identifier: "" }], 0)).toThrow("project must contain an identifier");
    });
    test("should throw an error if project contains a negative amount", () => {
        expect(() => (0, index_1.calculateQf)([{ identifier: "abc", match: 0, contributions: [{ amount: -1 }] }], 0)).toThrow("contribution amount must be greater than 0");
    });
    test("should throw an error if project amount is not a number", () => {
        expect(() => (0, index_1.calculateQf)([{ identifier: "abc", match: 0, contributions: [{ amount: {} }] }], 0) // eslint-disable-line @typescript-eslint/no-explicit-any
        ).toThrow("contribution amount must be a number");
    });
});
const qfTestCases = [
    {
        name: "should return empty projects and totalMatch of 0 if no projects are passed",
        projects: [],
        matchingAmount: 0,
        expected: {
            totalMatch: 0,
            projects: [],
        },
    },
    {
        name: "should calculate basic matching where one project gets all the match",
        projects: [
            {
                identifier: "project1",
                match: 0,
                contributions: [
                    {
                        amount: 100,
                    },
                ],
            },
        ],
        matchingAmount: 100,
        expected: {
            totalMatch: 100,
            projects: [
                {
                    identifier: "project1",
                    match: 100,
                    contributions: [
                        {
                            amount: 100,
                        },
                    ],
                },
            ],
        },
    },
    {
        name: "should calculate basic matching where one project with two contributors gets all the match",
        projects: [
            {
                identifier: "project1",
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
        ],
        matchingAmount: 100,
        expected: {
            totalMatch: 100,
            projects: [
                {
                    identifier: "project1",
                    match: 100,
                    contributions: [
                        {
                            amount: 100,
                        },
                        {
                            amount: 100,
                        },
                    ],
                },
            ],
        },
    },
    {
        name: "should calculate basic matching with three projects with 1,2,3 contributors gets all the match",
        projects: [
            {
                identifier: "project1",
                match: 0,
                contributions: [
                    {
                        amount: 100,
                    },
                ],
            },
            {
                identifier: "project2",
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
            {
                identifier: "project3",
                match: 0,
                contributions: [
                    {
                        amount: 100,
                    },
                    {
                        amount: 100,
                    },
                    {
                        amount: 100,
                    },
                ],
            },
        ],
        matchingAmount: 100,
        expected: {
            totalMatch: 100,
            projects: [
                {
                    identifier: "project1",
                    match: 7.142857142857142,
                    contributions: [
                        {
                            amount: 100,
                        },
                    ],
                },
                {
                    identifier: "project2",
                    match: 28.57142857142857,
                    contributions: [
                        {
                            amount: 100,
                        },
                        {
                            amount: 100,
                        },
                    ],
                },
                {
                    identifier: "project3",
                    match: 64.28571428571428,
                    contributions: [
                        {
                            amount: 100,
                        },
                        {
                            amount: 100,
                        },
                        {
                            amount: 100,
                        },
                    ],
                },
            ],
        },
    },
    {
        name: "should calculate larger matching with four projects and a variety of contributors",
        projects: [
            {
                identifier: "project1",
                match: 0,
                contributions: [
                    {
                        amount: 100,
                    },
                ],
            },
            {
                identifier: "project2",
                match: 0,
                contributions: [
                    {
                        amount: 100,
                    },
                    {
                        amount: 200,
                    },
                ],
            },
            {
                identifier: "project3",
                match: 0,
                contributions: [
                    {
                        amount: 100,
                    },
                    {
                        amount: 200,
                    },
                    {
                        amount: 400,
                    },
                ],
            },
            {
                identifier: "project4",
                match: 0,
                contributions: [
                    {
                        amount: 60000,
                    },
                    {
                        amount: 100,
                    },
                    {
                        amount: 100,
                    },
                    {
                        amount: 10,
                    },
                ],
            },
        ],
        matchingAmount: 999999,
        expected: {
            totalMatch: 999999,
            projects: [
                {
                    identifier: "project1",
                    match: 1342.0100765616373,
                    contributions: [
                        {
                            amount: 100,
                        },
                    ],
                },
                {
                    identifier: "project2",
                    match: 7821.807931914558,
                    contributions: [
                        {
                            amount: 100,
                        },
                        {
                            amount: 200,
                        },
                    ],
                },
                {
                    identifier: "project3",
                    match: 26149.443948866952,
                    contributions: [
                        {
                            amount: 100,
                        },
                        {
                            amount: 200,
                        },
                        {
                            amount: 400,
                        },
                    ],
                },
                {
                    identifier: "project4",
                    match: 964685.7380426568,
                    contributions: [
                        {
                            amount: 60000,
                        },
                        {
                            amount: 100,
                        },
                        {
                            amount: 100,
                        },
                        {
                            amount: 10,
                        },
                    ],
                },
            ],
        },
    },
];
// loop through testCases, see if they match expected
describe("It should calculateQf for a set of example qfTestCases", () => {
    // expect(seqEqual([1, 2, 3], [1, 2, 3])).toBe(true)
    qfTestCases.forEach((testCase) => {
        const { projects, matchingAmount, expected } = testCase;
        test(testCase.name, () => {
            expect((0, index_1.calculateQf)(projects, matchingAmount)).toEqual(expected);
        });
    });
});
//# sourceMappingURL=index.test.js.map