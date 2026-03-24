import { Answer } from "./Answer.js";
import { Exams } from "./Exams.js";
import { Weight } from "./Weight.js";
// Define os pesos de cada questão da prova.
const weight = new Weight([2, 2, 1, 3, 2]);
// Define o gabarito oficial.
const gabarito = ["a", "b", "c", "d", "e"];
// Cria a prova com gabarito e pesos.
const exams = new Exams(gabarito, weight);
// Cria e adiciona alunos com suas respostas.
const aluno1 = new Answer("Ana", ["a", "b", "c", "a", "e"]);
const aluno2 = new Answer("Bruno", ["a", "d", "c", "d", "b"]);
exams.add(aluno1);
exams.add(aluno2);
// Exibe métricas pedidas no console.
console.log("Média:", exams.avg());
console.log("Maiores notas (top 2):", exams.max(2));
console.log("Menores notas (top 2):", exams.min(2));
console.log("Notas abaixo de 5:", exams.lt(5));
console.log("Notas acima de 5:", exams.gt(5));
//# sourceMappingURL=main.js.map