import Pessoa = require("../pessoa/pessoa");
import Endereco = require("../endereco/endereco");
import Projeto = require("../projeto/projeto");

class Professor extends Pessoa implements Projeto {

    //Atributos de Instância//

    private _salario: number = 0;

    //Gets e Sets//

    public get salario(): number {
        return this._salario;
    }
    public set salario(value: number) {
        this._salario = value;
    }

    //Construtor//

    constructor(nome: string, sobrenome: string, sexo: string, CPF: string, idade: number, brasileiro: boolean, enderecos: Endereco[], salario: number) {
        super(nome, sobrenome, sexo, CPF, idade, brasileiro, enderecos);
        this.matricula = this.gerarMatricula(); // A matrícula é gerada automaticamente ao criar um novo professor
        this.salario = salario;
    }

    //Métodos de Instância//

    //O método gerarMatricula é uma sobrescrita (Override)
    //A implementaçãi di método gerarMatricula na classa Aluno sobrescreve o método abstrato definido na classe Pessoa
    //Associação Comportamental - Dependência da Classe Aluno com as classes Date e Math
    protected gerarMatricula(): number {
        return Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000; // Gera um número aleatório de 8 dígitos
    }

    public submeterProjetoPesquisa(): void {
        console.log("Isso é uma submissão de projeto de pesquisa de professor"); // Implementação específica para submeter projeto de pesquisa
    }

    public submeterProjetoExtensao(): void {
        console.log("Isso é uma submissão de projeto de extensão de professor"); // Implementação específica para submeter projeto de extensão
    }
}

export = Professor;