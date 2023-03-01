export interface Contribution {
    amount: number;
}
export interface Project {
    identifier: string;
    match: number;
    contributions: Contribution[];
}
export type Projects = Project[];
export interface QuadraticFundedProjects {
    projects: Projects;
    totalMatch: number;
}
export type MatchingAmount = number;
export declare const calculateQf: (projects: Projects, matchingAmount: MatchingAmount) => QuadraticFundedProjects;
