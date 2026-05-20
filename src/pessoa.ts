import Endereco = require("./endereco");

abstract class Pessoa {

    //Atributos de Instância//

    matricula: number = 0;
    nome: string = "";
    sobrenome: string = "";
    sexo: string = "";
    CPF: string = "";
    idade: number = 0;
    brasileiro: boolean = true;
    enderecos: Endereco[] = [];

    //Atributos Estáticos//

    static quantidadePessoas: number = 0;

    //Construtor//

    constructor(nome: string, sobrenome: string, sexo: string, CPF: string, idade: number, brasileiro: boolean, enderecos: Endereco[]) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.sexo = sexo;
        this.CPF = CPF;
        this.idade = idade;
        this.brasileiro = brasileiro;
        this.enderecos = enderecos;
        Pessoa.quantidadePessoas++;
    }

    //Métodos de Instância//

    exibirNomeCompleto(): string {
        return (`O nome completo é: ${this.nome} ${this.sobrenome}`);
    }

    recuperarEndereco(posicao: number): Endereco | undefined {
        return this.enderecos[posicao]; // Acessa o endereço na posição especificada do array de endereços
    }

    //Métodos Estáticos//

    static getQuantidadePessoas(): number {
        return Pessoa.quantidadePessoas;
    }

    //Métodos Abstratos//

    //Método abstrato - Sem implementação
    //Usado para garantir que as classes que herdem de Pessoa, possuam uma implementação do gerarMatricula,
    //assim, é possivel que cada classe filha implemente sua forma específica de gerar a matrícula (Polimorfismo).
    abstract gerarMatricula(): number;

}

export = Pessoa;
