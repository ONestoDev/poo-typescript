import Curso = require("./curso");

class CursoIntegrado extends Curso {

    // Atributos de Instância //

    private _nivelMedio: boolean = true;

    // Gets e Sets //

    public get nivelMedio(): boolean {
        return this._nivelMedio;
    }

    public set nivelMedio(value: boolean) {
        this._nivelMedio = value;
    }

    // Construtor //

    constructor(nome: string, cargaHoraria: number, nivelMedio: boolean = true) {
        super(nome, cargaHoraria);
        this.nivelMedio = nivelMedio;
    }

}

export = CursoIntegrado;