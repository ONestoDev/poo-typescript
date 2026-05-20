import Pessoa = require("../pessoa/pessoa");
import Endereco = require("../endereco/endereco");

abstract class TecnicoAdministrativo extends Pessoa {

    // Atributos de Instância //

    private _cargo: string = "";

    public get cargo(): string {
        return this._cargo;
    }

    public set cargo(value: string) {
        this._cargo = value;
    }

    // Construtor //

    constructor(nome: string, sobrenome: string, sexo: string, CPF: string, idade: number, brasileiro: boolean, enderecos: Endereco[], cargo: string) {
        super(nome, sobrenome, sexo, CPF, idade, brasileiro, enderecos);
        this.matricula = this.gerarMatricula();
        this.cargo = cargo;
    }

    // Métodos //

    protected gerarMatricula(): number {
        return Math.floor(Math.random() * 9000) + 1000;
    }

}

export = TecnicoAdministrativo;