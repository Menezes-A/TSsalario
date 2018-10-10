declare function require(msg : string) : any;
var readline = require('readline-sync');

import {Funcionario} from "./Funcionario"; //importando todas as classe ( mãe e filhas)
import {Professor} from "./Professor";
import {STA} from "./STA";
import {Terceirizado} from "./Terceirizado";

let funcionarios: Funcionario[] = new Array();  //criando um array funcionario do tipo Class Funcionario 
while(true){
let comando: string = readline.question("Escolha um dos comandos: addProf , addSta , addTer, addDiaria, mostrarSalario, status ou excluir. \n");
switch(comando){
    case"addProf":
	let nomeP: string = readline.question("Digite um nome: ");
	let c: string = readline.question("Digite a categoria: ");
	let prof: Professor = new Professor(nomeP, 0, c); //Objeto
    funcionarios.push(prof);
    console.log(prof);
    break;

    case "addSta":
	let nomeSta:string = readline.question("Digite um nome: ");
	let nv:number = readline.question("Digite o nivel: ");
	let sta: STA = new STA(nomeSta, 0, nv);//Objeto
    funcionarios.push (sta);
    console.log(sta);
    "\n"
    break;


    case "addTer":
	let nomeT:string = readline.question("Digite um nome: ");
	let horas:number = readline.question("Digite as horas: ");
	let insalubre: string = readline.question("Digite se for insalubre:");
	let ter: Terceirizado = new Terceirizado(nomeT, horas, true);
	if (insalubre == "não"){
        ter.setInsalubre(false);
        console.log(ter);        
	}
    funcionarios.push (ter);
    console.log(ter);
    "\n"
    break;

    case "addDiaria":
    let nome= readline.question("Digite o seu nome: ");
    for(let d of funcionarios){
        if(d.getNome() == nome){
            d.addDiaria();
        }
    } 
    break;
   
   

    case "mostrarSalario":
    let nomes= readline.question("Digite o seu nome: ");
    let salario: number;
    for(let x of funcionarios){ // o x vai percorer todo o funcionarios e procurar os valores  (of)
        if(x.getNome() == nomes){
            salario = x.calcularSalario();
            console.log("Salario:" + salario);
            break;
        }
    }

    break;

    case "excluir": //excluir Funcinario


    break;

    
    case "addBonus": //não entendi como fazer o cofigo Bonus

    case "status":
	let mostra: string = readline.question("Digite o nome do funcionario: "); //procurar o 
	let f: Funcionario|undefined = undefined;
	for(let i of funcionarios){
		if(i.getNome() == mostra){
			f = i;
		}
	}if (f == undefined){
		console.log("Não existe");
    }else {
        console.log ("Nome: " + f.getNome() + "\n" + "Diaria: " + f.getDiaria() + "\n"+ "Salario: " + f.calcularSalario());
        
    }
    
    break;

}
}











