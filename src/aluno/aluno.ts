import Pessoa = require("../pessoa/pessoa");
import Endereco = require("../endereco/endereco");
import Projeto = require("../projeto/projeto");

class Aluno extends Pessoa implements Projeto {

    //Atributos de Instância//

    private _curso: string = "";
    private _situacao: SituacaoAluno = SituacaoAluno.MATRICULADO; //Assosciação Estrutural - Composição - A partir de atributo.


    //Gets e Sets//

    public get curso(): string {
        return this._curso;
    }

    public set curso(value: string) {
        this._curso = value;
    }

    public get situacao(): SituacaoAluno {
        return this._situacao;
    }

    public set situacao(value: SituacaoAluno) {
        this._situacao = value;
    }

    //Construtor//

    constructor(nome: string, sobrenome: string, sexo: string, CPF: string, idade: number, brasileiro: boolean, enderecos: Endereco[], curso: string, situacao: SituacaoAluno) {
        super(nome, sobrenome, sexo, CPF, idade, brasileiro, enderecos);
        this.matricula = this.gerarMatricula(); // A matrícula é gerada automaticamente ao criar um novo aluno
        this.curso = curso;
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

enum SituacaoAluno {
    ATIVO = "Ativo",
    MATRICULADO = "Matriculado",
    TRANCADO = "Trancado",
    CONCLUIDO = "Concluído",
    CANCELADO = "Cancelado",
    FORMANDO = "Formando"
}

export = Aluno; SituacaoAluno;