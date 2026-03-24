import { Answer, Weight } from "./Weight.js";
export declare class Exam {
    private weight;
    private answer;
    private answers;
    constructor(answer: Answer, weight: Weight);
    add(aluno: Answer): void;
    avg(): number;
    min(): number[];
    max(): number[];
    lt(valor: number): number[];
    gt(valor: number): number[];
}
//# sourceMappingURL=exam.d.ts.map