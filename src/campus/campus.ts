import Endereco = require("../endereco/endereco");
import Aluno = require("../aluno/aluno");
import Professor = require("../professor/professor");
import Curso = require("../curso/curso");
import TecnicoAdministrativo = require("../tecnico-administrativo/tecnico-administrativo");

class Campus {

    // Atributos de Instância //

    private _nome: string = "";
    private _endereco!: Endereco;
    private _quantidadeAlunos: number = 0;
    private _alunos: Aluno[] = [];
    private _professores: Professor[] = [];
    private _cursosOfertados: Curso[] = [];
    private _tecnicosAdministrativos: TecnicoAdministrativo[] = [];

    // Gets e Sets //

    public get nome(): string {
        return this._nome;
    }

    public set nome(value: string) {
        this._nome = value;
    }

    public get endereco(): Endereco {
        return this._endereco;
    }

    public set endereco(value: Endereco) {
        this._endereco = value;
    }

    public get quantidadeAlunos(): number {
        return this._quantidadeAlunos;
    }

    private atualizarQuantidadeAlunos(): void {
        this._quantidadeAlunos = this._alunos.length;
    }

    public get alunos(): Aluno[] {
        return this._alunos;
    }

    public set alunos(value: Aluno[]) {
        this._alunos = value;
        this.atualizarQuantidadeAlunos();
    }

    public get professores(): Professor[] {
        return this._professores;
    }

    public set professores(value: Professor[]) {
        this._professores = value;
    }

    public get cursosOfertados(): Curso[] {
        return this._cursosOfertados;
    }

    public set cursosOfertados(value: Curso[]) {
        this._cursosOfertados = value;
    }

    public get tecnicosAdministrativos(): TecnicoAdministrativo[] {
        return this._tecnicosAdministrativos;
    }

    public set tecnicosAdministrativos(value: TecnicoAdministrativo[]) {
        this._tecnicosAdministrativos = value;
    }

    // Construtor //

    constructor(nome: string, endereco: Endereco, alunos: Aluno[] = [], professores: Professor[] = [], cursosOfertados: Curso[] = [], tecnicosAdministrativos: TecnicoAdministrativo[] = []) {
        this.nome = nome;
        this.endereco = endereco;
        this.alunos = alunos;
        this.professores = professores;
        this.cursosOfertados = cursosOfertados;
        this.tecnicosAdministrativos = tecnicosAdministrativos;
    }

    // Métodos //

    public adicionarAluno(aluno: Aluno): void {
        this._alunos.push(aluno);
        this.atualizarQuantidadeAlunos();
    }

    public adicionarProfessor(professor: Professor): void {
        this._professores.push(professor);
    }

    public adicionarCurso(curso: Curso): void {
        this._cursosOfertados.push(curso);
    }

    public adicionarTecnicoAdministrativo(tecnico: TecnicoAdministrativo): void {
        this._tecnicosAdministrativos.push(tecnico);
    }

}

export = Campus;