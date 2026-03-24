import { Answer, Weight } from "./Weight.js";
export class Exam {
    weight;
    answer;
    answers = [];
    constructor(answer, weight) {
        this.answer = answer;
        this.weight = weight;
    }
    add(aluno) {
        const respostasAluno = aluno.getRespostas();
        const respostasCorretas = this.answer.getRespostas();
        const pesos = this.weight.getPesos();
        let nota = 0;
        for (let i = 0; i < respostasAluno.length; i++) {
            if (respostasAluno[i] === respostasCorretas[i]) {
                nota += pesos[i] ?? 0;
            }
        }
        this.answers.push({ aluno, nota });
    }
    avg() {
        const soma = this.answers.reduce((s, a) => s + a.nota, 0);
        return soma / this.answers.length;
    }
    min() {
        const notas = this.answers.map(a => a.nota);
        const menor = Math.min(...notas);
        return notas.filter(n => n === menor);
    }
    max() {
        const notas = this.answers.map(a => a.nota);
        const maior = Math.max(...notas);
        return notas.filter(n => n === maior);
    }
    lt(valor) {
        return this.answers
            .map(a => a.nota)
            .filter(n => n < valor);
    }
    gt(valor) {
        return this.answers
            .map(a => a.nota)
            .filter(n => n > valor);
    }
}
//# sourceMappingURL=exam.js.map