declare class Pessoa {
    nome: string;
    sobrenome: string;
    idade: number;
    brasileiro: boolean;
    enderecos: string[];
    static quantidadePessoas: number;
    constructor(nome: string, sobrenome: string, idade: number, brasileiro: boolean, enderecos: string[]);
    exibirNomeCompleto(): string;
    recuperarEndereco(posicao: number): string | undefined;
    static getQuantidadePessoas(): number;
}
export = Pessoa;
//# sourceMappingURL=pessoa.d.ts.map