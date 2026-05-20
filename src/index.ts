import Pessoa = require("./pessoa/pessoa");
import Aluno = require("./aluno/aluno");
import Professor = require("./professor/professor");
import Endereco = require("./endereco/endereco");
import CursoSubsequente = require("./curso/curso-subsequente");
import CursoIntegrado = require("./curso/curso-integrado");
import Campus = require("./campus/campus");
import Bibliotecario = require("./tecnico-administrativo/bibliotecario");
import Psicologo = require("./tecnico-administrativo/psicologo");

const endereco1: Endereco = new Endereco("12345-678", 100, "Rua A", "Bairro B", "Cidade C", "Estado D");
const endereco2: Endereco = new Endereco("98765-432", 200, "Avenida X", "Bairro Y", "Cidade Z", "Estado W");

const curso1: CursoSubsequente = new CursoSubsequente("Informática", 1200, true);
const curso2: CursoIntegrado = new CursoIntegrado("Eletrotécnica", 3200, true);
const curso3: CursoSubsequente = new CursoSubsequente("Redes de Computadores", 1400, false);

const campusAracaju: Campus = new Campus("Campus Aracaju", endereco1, [], [], [curso1, curso2], []);

const luis: Professor = new Professor("Luis", "Gomes", "Masculino", "456.789.123-00", 45, false, [endereco1], 5000, campusAracaju.nome);
const cirilo: Aluno = new Aluno("Cirilo", "Costa", "Masculino", "789.123.456-00", 22, true, [endereco2], [curso1], "Matriculado");
const maria: Aluno = new Aluno("Maria", "Silva", "Feminino", "321.654.987-00", 20, true, [endereco1, endereco2], [curso2, curso3], "Matriculado");
const joao: Professor = new Professor("João", "Pereira", "Masculino", "654.321.789-00", 50, false, [endereco2], 6000, campusAracaju.nome);

const anaBibliotecaria: Bibliotecario = new Bibliotecario("Ana", "Souza", "Feminino", "111.222.333-44", 38, true, [endereco1], 1234);
const carlosPsicologo: Psicologo = new Psicologo("Carlos", "Lima", "Masculino", "222.333.444-55", 41, true, [endereco2], 5678);

campusAracaju.adicionarProfessor(luis);
campusAracaju.adicionarProfessor(joao);
campusAracaju.adicionarAluno(cirilo);
campusAracaju.adicionarAluno(maria);
campusAracaju.adicionarTecnicoAdministrativo(anaBibliotecaria);
campusAracaju.adicionarTecnicoAdministrativo(carlosPsicologo);


console.log(luis);
console.log(cirilo);
console.log(maria);
console.log(joao);
console.log(campusAracaju);
console.log(anaBibliotecaria);
console.log(carlosPsicologo);

console.log("----------------------------------");
console.log(Pessoa.getQuantidadePessoas());

