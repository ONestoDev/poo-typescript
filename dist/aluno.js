class Aluno {
    matricula;
    nome;
    sobrenome;
    idade;
    brasileiro;
    enderecos;
    curso;
    situacao;
    constructor(matricula, nome, sobrenome, idade, brasileiro, enderecos) {
        this.matricula = matricula;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.brasileiro = brasileiro;
        this.enderecos = enderecos;
        this.curso = "";
        this.situacao = SituacaoAluno.MATRICULADO;
    }
    recuperarEndereco(posicao) {
        return this.enderecos[posicao];
    }
}
var SituacaoAluno;
(function (SituacaoAluno) {
    SituacaoAluno["ATIVO"] = "Ativo";
    SituacaoAluno["MATRICULADO"] = "Matriculado";
    SituacaoAluno["TRANCADO"] = "Trancado";
    SituacaoAluno["CONCLUIDO"] = "Conclu\u00EDdo";
    SituacaoAluno["CANCELADO"] = "Cancelado";
    SituacaoAluno["FORMANDO"] = "Formando";
})(SituacaoAluno || (SituacaoAluno = {}));
export {};
//# sourceMappingURL=aluno.js.map