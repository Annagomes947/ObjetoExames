import { Exam } from './exam.js';
import { Answer, Weight } from './Weight.js';
// 1) Pesos e gabarito em classes
const weight = new Weight([2, 2, 2, 2, 2]);
const answer = new Answer('Professor', ['a', 'b', 'a', 'c', 'd']);
// 2) Criar o exame
const exam = new Exam(answer, weight);
// 3) Adicionar alunos
const alice = new Answer('Alice', ['a', 'b', 'b', 'b', 'b']);
const bob = new Answer('Bob', ['c', 'b', 'a', 'c', 'd']);
function test(label, result, expected) {
    console.log(`\n${label}`);
    console.log('Resultado:', result);
    console.log('Esperado :', expected);
}
function printAlunoSeparado(nome, aluno, expectedNota) {
    const examAluno = new Exam(answer, weight);
    examAluno.add(aluno);
    console.log(`\n========= TESTE: ${nome.toUpperCase()} =========`);
    test('Nota final (com pesos)', examAluno.avg(), expectedNota);
    test('Menor nota', examAluno.min(), [expectedNota]);
    test('Maior nota', examAluno.max(), [expectedNota]);
    test('Notas < 7', examAluno.lt(7), expectedNota < 7 ? [expectedNota] : []);
    test('Notas > 7', examAluno.gt(7), expectedNota > 7 ? [expectedNota] : []);
}
printAlunoSeparado('Alice', alice, 4);
printAlunoSeparado('Bob', bob, 8);
console.log('\n========= RESUMO: ALICE + BOB =========');
exam.add(alice);
exam.add(bob);
test('Média', exam.avg(), 6);
test('Menor nota', exam.min(), [4]);
test('Maior nota', exam.max(), [8]);
test('Notas < 7', exam.lt(7), [4]);
test('Notas > 7', exam.gt(7), [8]);
console.log('\n=====================================\n');
//# sourceMappingURL=exam.print.js.map