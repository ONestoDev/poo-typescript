class Pessoa {
    nome;
    sobrenome;
    idade;
    brasileiro;
    enderecos;
    static quantidadePessoas = 0;
    constructor(nome, sobrenome, idade, brasileiro, enderecos) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.brasileiro = brasileiro;
        this.enderecos = enderecos;
        Pessoa.quantidadePessoas++;
    }
    exibirNomeCompleto() {
        return `O nome completo é: ${this.nome} ${this.sobrenome}`;
    }
    recuperarEndereco(posicao) {
        return this.enderecos[posicao];
    }
    static getQuantidadePessoas() {
        return Pessoa.quantidadePessoas;
    }
}
export {};
//# sourceMappingURL=pessoa.js.map