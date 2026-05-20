abstract class Curso {

    // Atributos de Instância //

    private _nome: string = "";
    private _cargaHoraria: number = 0;

    // Gets e Sets //

    public get nome(): string {
        return this._nome;
    }

    public set nome(value: string) {
        this._nome = value;
    }

    public get cargaHoraria(): number {
        return this._cargaHoraria;
    }

    public set cargaHoraria(value: number) {
        this._cargaHoraria = value;
    }

    // Construtor //

    constructor(nome: string, cargaHoraria: number) {
        this.nome = nome;
        this.cargaHoraria = cargaHoraria;
    }

}

export = Curso;