declare class Professor {
    matricula: number;
    nome: string;
    sobrenome: string;
    idade: number;
    brasileiro: boolean;
    enderecos: string[];
    sexo: string;
    CPF: string;
    salario: number;
    constructor(matricula: number, nome: string, sobrenome: string, idade: number, brasileiro: boolean, enderecos: string[], sexo: string, CPF: string, salario: number);
    recuperarEndereco(posicao: number): string;
}
export = Professor;
//# sourceMappingURL=professor.d.ts.map