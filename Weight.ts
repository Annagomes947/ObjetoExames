export class Answer {
    constructor(
        private nome: string,
        private respostas: string[]
    ) {}

    getNome(): string {
        return this.nome;
    }

    getRespostas(): string[] {
        return this.respostas;
    }
}

export class Weight {
    private pesos: number[];

    constructor(vetorPesos: number[]) {
        this.pesos = vetorPesos;
    }

    getPesos(): number[] {
        return [...this.pesos];
    }
}