import Pessoa = require("./pessoa/pessoa");
import Aluno = require("./aluno/aluno");
import Professor = require("./professor/professor");
import Endereco = require("./endereco/endereco");
import SituacaoAluno = require("./aluno/aluno"); SituacaoAluno;

const endereco1: Endereco = new Endereco("12345-678", 100, "Rua A", "Bairro B", "Cidade C", "Estado D");
const endereco2: Endereco = new Endereco("98765-432", 200, "Avenida X", "Bairro Y", "Cidade Z", "Estado W");

const luis: Professor = new Professor("Luis", "Gomes", "Masculino", "456.789.123-00", 45, false, [endereco1], 5000);
const cirilo: Aluno = new Aluno("Cirilo", "Costa", "Masculino", "789.123.456-00", 22, true, [endereco2], "Sistemas de Informação", SituacaoAluno.MATRICULADO);
const maria: Aluno = new Aluno("Maria", "Silva", "Feminino", "321.654.987-00", 20, true, [endereco1, endereco2], "Engenharia de Software", SituacaoAluno.MATRICULADO);
const joao: Professor = new Professor("João", "Pereira", "Masculino", "654.321.789-00", 50, false, [endereco2], 6000);


console.log(luis);
console.log(cirilo);
console.log(maria);
console.log(joao);

console.log("----------------------------------");
console.log(Pessoa.getQuantidadePessoas());

