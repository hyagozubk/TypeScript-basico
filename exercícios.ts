/*
 EXERCÍCIOS
 
  Antes de começar, certifique-se de instalar as 
  dependências do projeto utilizando "npm install"
  
  Você pode executar o arquivo dos exercícios usando F5, e pode colocar breakpoints no lado esquerdo da linha */

import { InterfaceType, Type } from "typescript";




 
/*  1- Crie um tipo para representar um objeto que contenha as suas informações de 
  nome, profissão, idade e uma lista de assuntos de seu interesse.*/
  interface primeiraPessoaDoPlural{
      nome:string;
      profissao:string;
      idade:number;
      assuntosDeInteresses:string[];
  }
  
 /* 2 - Crie um objeto utilizando o tipo criado no exercício 1 e o popule de acordo com suas informações. */
  const primeiraPessoaDoSingular:primeiraPessoaDoPlural ={
    nome:"Hyago",
    profissao:"programador",
    idade:28,
    assuntosDeInteresses:["typeScript","programar","jogar"]
  }
/* 3 - Faça uma função que receba como argumento um objeto do tipo do exercício 1, e retorne somente a lista de assuntos do objeto.*/
  function retornaAssuntos(primeiraPessoaDoPlural:primeiraPessoaDoPlural) {
      return primeiraPessoaDoPlural.assuntosDeInteresses;
  }
/* 4 - Coloque a tipagem tanto no argumento da função do exercício 3 quanto no tipo de retorno dela.*/
  function retornaAssunto(primeiraPessoaDoPlural:primeiraPessoaDoPlural):string[] {
    return primeiraPessoaDoPlural.assuntosDeInteresses;
  }
  
/* 5 - Crie um enum para representar as Matérias do curso (Angular, Typescript e Git)*/
enum materias {
  angular = "Angular",
  typeScript = "TypeScript",
  git = "Git"
}
/* 6 - Crie mais um tipo para representar os professores, contendo nome e uma lista das materias de cada um.*/
 interface professores {
  nome: string;
  materias: materias[];
 }

/* 7 - Crie os objetos Alan e Nathan utilizando os tipos dos exercícios 5 e 6. 
 Nathan = Angular e Git, Alan = Angular, Typescript e Git*/
const alan: professores= {
  nome:"Alan",
  materias:[materias.angular, materias.typeScript, materias.git]
}
const nathan: professores={
  nome:"Nathan",
  materias:[materias.angular, materias.git]
}

/* 8 - Declare e popule um array com os objetos do exercício 7.*/
let  professor :any[] = [];
professor.push(alan, nathan);


/* 9 - Faça uma função que receba um argumento de array de Professor 
e retorne um novo array de strings contendo somente os nomes dos professores.*/

function nomesDosProfessores(professorArray: professores[])  {
  return professorArray.map(professores => professores.nome);
}

/* 10 - Faça uma função que receba um argumento de array de Professores e retorne um array de materias.*/
function materiasdosProfessores(professorArray: professores[])  {
  return professorArray.map(professores => professores.materias);
}

/* 11 - Faça uma função que receba um argumento de array de Professores e 
 retorne o primeiro Professor encontrado que dê aula de Typescript. */

 function PrimeiroProfessorQueEnsinaTypescript(prof: professores[]):professores|undefined {
  return prof.find(prof => prof.materias.includes(materias.typeScript));
}