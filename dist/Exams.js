import { Answer } from "./Answer.js";
import { Weight } from "./Weight.js";
export class Exams {
    gabarito;
    weight;
    alunos;
    // Cria a prova com gabarito e pesos.
    constructor(gabarito, weight) {
        this.gabarito = [...gabarito];
        this.weight = weight;
        this.alunos = [];
    }
    // Adiciona um aluno na lista da prova.
    add(aluno) {
        this.alunos.push(aluno);
    }
    // Calcula a nota de um aluno com base no gabarito e pesos.
    calcularNota(aluno) {
        const respostasAluno = aluno.getRespostas();
        const pesos = this.weight.getPesos();
        const totalQuestoes = Math.min(this.gabarito.length, respostasAluno.length, pesos.length);
        let nota = 0;
        for (let index = 0; index < totalQuestoes; index += 1) {
            if (respostasAluno[index] === this.gabarito[index]) {
                nota += pesos[index] ?? 0;
            }
        }
        return nota;
    }
    // Retorna todas as notas dos alunos cadastrados.
    getNotas() {
        return this.alunos.map((aluno) => this.calcularNota(aluno));
    }
    // Calcula a média das notas.
    avg() {
        const notas = this.getNotas();
        if (notas.length === 0) {
            return 0;
        }
        const soma = notas.reduce((acumulado, nota) => acumulado + nota, 0);
        return soma / notas.length;
    }
    // Retorna as menores notas.
    min(count) {
        const quantidade = Math.max(0, count);
        return [...this.getNotas()].sort((a, b) => a - b).slice(0, quantidade);
    }
    // Retorna as maiores notas.
    max(count) {
        const quantidade = Math.max(0, count);
        return [...this.getNotas()].sort((a, b) => b - a).slice(0, quantidade);
    }
    // Filtra notas menores que um limite.
    lt(limit) {
        return this.getNotas().filter((nota) => nota < limit);
    }
    // Filtra notas maiores que um limite.
    gt(limit) {
        return this.getNotas().filter((nota) => nota > limit);
    }
}
//# sourceMappingURL=Exams.js.map