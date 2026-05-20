import Pessoa = require("./pessoa");
import Aluno = require("./aluno");
import Professor = require("./professor");
import Endereco = require("./endereco");
import SituacaoAluno = require("./aluno"); SituacaoAluno;

const endereco1: Endereco = new Endereco("12345-678", 100, "Rua A", "Bairro B", "Cidade C", "Estado D");
const endereco2: Endereco = new Endereco("98765-432", 200, "Avenida X", "Bairro Y", "Cidade Z", "Estado W");

const luis: Professor = new Professor("Luis", "Gomes", "Masculino", "456.789.123-00", 45, false, [endereco1], 5000);
const cirilo: Aluno = new Aluno("Cirilo", "Costa", "Masculino", "789.123.456-00", 22, true, [endereco2], "Sistemas de Informação", SituacaoAluno.FORMANDO);


luis.submeterProjetoPesquisa();
luis.submeterProjetoExtensao();

cirilo.submeterProjetoPesquisa();
cirilo.submeterProjetoExtensao();

console.log("----------------------------------");
console.log(Pessoa.getQuantidadePessoas());



