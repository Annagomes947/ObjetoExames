export class Answer {
    nome;
    respostas;
    // Representa um aluno com nome e respostas da prova.
    constructor(nome, respostas) {
        this.nome = nome;
        this.respostas = [...respostas];
    }
    // Retorna o nome do aluno.
    getNome() {
        return this.nome;
    }
    // Retorna uma cópia das respostas do aluno.
    getRespostas() {
        return [...this.respostas];
    }
}
//# sourceMappingURL=Answer.js.map