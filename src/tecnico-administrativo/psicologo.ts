import TecnicoAdministrativo = require("./tecnico-administrativo");
import Endereco = require("../endereco/endereco");

class Psicologo extends TecnicoAdministrativo {

    // Atributos de Instância //

    private _crp: number = 0;

    // Gets e Sets //

    public get crp(): number {
        return this._crp;
    }

    public set crp(value: number) {
        this._crp = value;
    }

    // Construtor //

    constructor(nome: string, sobrenome: string, sexo: string, CPF: string, idade: number, brasileiro: boolean, enderecos: Endereco[], crp: number) {
        super(nome, sobrenome, sexo, CPF, idade, brasileiro, enderecos, "Psicólogo");
        this.crp = crp;
    }

}

export = Psicologo;