import { Answer, Weight } from "./Weight.js";
import { Exam } from './exam.js';
// 1️⃣ pesos da prova
const pesos = new Weight([2, 2, 2, 2, 2]);
// 2️⃣ gabarito
const gabarito = ['a', 'b', 'a', 'c', 'd'];
// 3️⃣ criar prova
const prova = new Exam({ values: gabarito }, pesos.getPesos());
// 4️⃣ criar alunos
const aluno1 = new Answer("Francisco", ['a', 'b', 'b', 'b', 'b']);
const aluno2 = new Answer("Maria", ['a', 'b', 'a', 'c', 'd']);
// adicionar alunos
prova.add({ nome: aluno1.getNome(), values: aluno1.getRespostas() });
prova.add({ nome: aluno2.getNome(), values: aluno2.getRespostas() });
// 5️⃣ mostrar resultados
console.log("Média:", prova.avg());
console.log("Menores notas:", prova.min(1));
console.log("Maiores notas:", prova.max(1));
console.log("Notas < 5:", prova.lt(5));
console.log("Notas > 5:", prova.gt(5));
//# sourceMappingURL=index.js.map