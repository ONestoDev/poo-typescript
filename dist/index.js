import { createRequire as _createRequire } from "module";
const __require = _createRequire(import.meta.url);
const Pessoa = __require("./pessoa");
const Aluno = __require("./aluno");
const Professor = __require("./professor");
const ernesto = new Pessoa("Ernesto", "Silva", 36, true, ["Rua A, 123", "Avenida B, 456"]);
const maria = new Pessoa("Maria", "Oliveira", 28, true, ["Rua C, 789", "Avenida D, 012"]);
const luis = new Professor(12345, "Luis", "Gomes", 45, false, ["Rua E, 345", "Avenida F, 678"], "Masculino", "123.456.789-00", 5000);
const ana = new Aluno(123456, "Ana", "Costa", 22, true, ["Rua G, 901", "Avenida H, 234"]);
console.log(ernesto);
console.log("----------------------------------");
console.log(maria);
console.log("----------------------------------");
console.log(luis);
console.log("----------------------------------");
console.log(ana);
//# sourceMappingURL=index.js.map