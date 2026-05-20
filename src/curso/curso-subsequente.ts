import Curso = require("./curso");

class CursoSubsequente extends Curso {

    // Atributos de Instância //

    private _estagioObrigatorio: boolean = false;

    // Gets e Sets //

    public get estagioObrigatorio(): boolean {
        return this._estagioObrigatorio;
    }

    public set estagioObrigatorio(value: boolean) {
        this._estagioObrigatorio = value;
    }

    // Construtor //

    constructor(nome: string, cargaHoraria: number, estagioObrigatorio: boolean = false) {
        super(nome, cargaHoraria);
        this.estagioObrigatorio = estagioObrigatorio;
    }

}

export = CursoSubsequente;