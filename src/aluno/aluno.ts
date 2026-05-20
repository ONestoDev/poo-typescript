import Pessoa = require("../pessoa/pessoa");
import Endereco = require("../endereco/endereco");
import Curso = require("../curso/curso");
import Projeto = require("../projeto/projeto");

class Aluno extends Pessoa implements Projeto {

    //Atributos de Instância//

    private _cursos: Curso[] = [];
    private _situacao: string = "Matriculado"; //Assosciação Estrutural - Composição - A partir de atributo.


    //Gets e Sets//

    public get cursos(): Curso[] {
        return this._cursos;
    }

    public set cursos(value: Curso[]) {
        this._cursos = value;
    }

    public get situacao(): string {
        return this._situacao;
    }

    public set situacao(value: string) {
        this._situacao = value;
    }

    //Construtor//

    constructor(nome: string, sobrenome: string, sexo: string, CPF: string, idade: number, brasileiro: boolean, enderecos: Endereco[], cursos: Curso[], situacao: string) {
        super(nome, sobrenome, sexo, CPF, idade, brasileiro, enderecos);
        this.matricula = this.gerarMatricula(); // A matrícula é gerada automaticamente ao criar um novo aluno
        this.cursos = cursos;
        this.situacao = situacao;
    }

    //Métodos de Instância//

    //O método gerarMatricula é uma sobrescrita (Override)
    //A implementaçãi di método gerarMatricula na classa Aluno sobrescreve o método abstrato definido na classe Pessoa
    //Associação Comportamental - Dependência da Classe Aluno com as classes Date e Math
    protected gerarMatricula(): number {
        let ano: number = new Date().getFullYear();
        let numero: number = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000; // Gera um número aleatório de 4 dígitos
        return Number(`${ano}${numero}`);
    }  

    submeterProjetoPesquisa(): void {
       console.log("Isso é uma submissão de projeto de pesquisa de aluno"); // Implementação específica para submeter projeto de pesquisa
    }

    submeterProjetoExtensao(): void {
        console.log("Isso é uma submissão de projeto de extensão de aluno"); // Implementação específica para submeter projeto de extensão
    }

}

export = Aluno;