import { Answer, Weight } from "./Weight.js";

export class Exam {
  private weight: Weight;
  private answer: Answer;
  private answers: { aluno: Answer; nota: number }[] = [];

  constructor(answer: Answer, weight: Weight) {
    this.answer = answer;
    this.weight = weight;
  }

  add(aluno: Answer): void {
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

  avg(): number {
    const soma = this.answers.reduce((s, a) => s + a.nota, 0);
    return soma / this.answers.length;
  }

  min(): number[] {
    const notas = this.answers.map(a => a.nota);
    const menor = Math.min(...notas);
    return notas.filter(n => n === menor);
  }

  max(): number[] {
    const notas = this.answers.map(a => a.nota);
    const maior = Math.max(...notas);
    return notas.filter(n => n === maior);
  }

  lt(valor: number): number[] {
    return this.answers
      .map(a => a.nota)
      .filter(n => n < valor);
  }

  gt(valor: number): number[] {
    return this.answers
      .map(a => a.nota)
      .filter(n => n > valor);
  }
}