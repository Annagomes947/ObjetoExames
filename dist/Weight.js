export class Answer {
    nome;
    respostas;
    constructor(nome, respostas) {
        this.nome = nome;
        this.respostas = respostas;
    }
    getNome() {
        return this.nome;
    }
    getRespostas() {
        return this.respostas;
    }
}
export class Weight {
    pesos;
    constructor(vetorPesos) {
        this.pesos = vetorPesos;
    }
    getPesos() {
        return [...this.pesos];
    }
}
//# sourceMappingURL=Weight.js.map