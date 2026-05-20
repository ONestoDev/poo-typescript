declare class Aluno {
    matricula: number;
    nome: string;
    sobrenome: string;
    idade: number;
    brasileiro: boolean;
    enderecos: string[];
    curso: string;
    situacao: SituacaoAluno;
    constructor(matricula: number, nome: string, sobrenome: string, idade: number, brasileiro: boolean, enderecos: string[]);
    recuperarEndereco(posicao: number): string;
}
declare enum SituacaoAluno {
    ATIVO = "Ativo",
    MATRICULADO = "Matriculado",
    TRANCADO = "Trancado",
    CONCLUIDO = "Conclu\u00EDdo",
    CANCELADO = "Cancelado",
    FORMANDO = "Formando"
}
export = Aluno;
export = SituacaoAluno;
//# sourceMappingURL=aluno.d.ts.map