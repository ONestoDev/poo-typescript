class Professor {
    matricula;
    nome;
    sobrenome;
    idade;
    brasileiro;
    enderecos;
    sexo;
    CPF;
    salario;
    constructor(matricula, nome, sobrenome, idade, brasileiro, enderecos, sexo, CPF, salario) {
        this.matricula = matricula;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.brasileiro = brasileiro;
        this.enderecos = enderecos;
        this.sexo = sexo;
        this.CPF = CPF;
        this.salario = salario;
    }
    recuperarEndereco(posicao) {
        return this.enderecos[posicao];
    }
}
export {};
//# sourceMappingURL=professor.js.map