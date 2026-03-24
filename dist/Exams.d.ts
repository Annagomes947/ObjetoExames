import { Answer } from "./Answer.js";
import { Weight } from "./Weight.js";
export declare class Exams {
    private gabarito;
    private weight;
    private alunos;
    constructor(gabarito: string[], weight: Weight);
    add(aluno: Answer): void;
    calcularNota(aluno: Answer): number;
    getNotas(): number[];
    avg(): number;
    min(count: number): number[];
    max(count: number): number[];
    lt(limit: number): number[];
    gt(limit: number): number[];
}
//# sourceMappingURL=Exams.d.ts.map