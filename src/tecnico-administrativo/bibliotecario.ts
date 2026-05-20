import TecnicoAdministrativo = require("./tecnico-administrativo");
import Endereco = require("../endereco/endereco");

class Bibliotecario extends TecnicoAdministrativo {

    // Atributos de Instância //

    private _crb: number = 0;

    // Gets e Sets //

    public get crb(): number {
        return this._crb;
    }

    public set crb(value: number) {
        this._crb = value;
    }

    // Construtor //

    constructor(nome: string, sobrenome: string, sexo: string, CPF: string, idade: number, brasileiro: boolean, enderecos: Endereco[], crb: number) {
        super(nome, sobrenome, sexo, CPF, idade, brasileiro, enderecos, "Bibliotecário");
        this.crb = crb;
    }

}

export = Bibliotecario;