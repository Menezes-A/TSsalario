import {Funcionario} from"./Funcionario"; //importa a classe mãe Funcionario , para usar os atributos dele 
//herança serve para não precisar repetir o mesmo codigo diversas vezes

export class Professor extends Funcionario{  // export para a Classe porfessor as extenções da clase Funcionario
	private categoria: string; // qual a categoria (classe) do professor (A,B,C,D ou E) 

	public constructor (nome:string, diaria:number, categoria:string){ 
		super(nome, diaria);
		this.categoria = categoria; 
	}

	public getCategoria(): string{
		return this.categoria;
	}
	public setCategoria(categoria: string): void{
		this.categoria = categoria;
	}
  	public calcularSalario() : number{

  		if (this.categoria == "A"){
  			return 3000 + (this.getDiaria() * 100);
  		}else if (this.categoria == "B"){
  			return 5000 + (this.getDiaria() * 100);
  		}else if (this.categoria == "C"){
  			return 7000 + (this.getDiaria() * 100);
  		}else if (this.categoria == "D"){
  			return 9000 + (this.getDiaria() * 100);
  		}
  		    return 11000 + (this.getDiaria() * 100);
  	}

  	public addDiaria() : boolean { // adiciona a Diara feita pelo Professor 

  		if(this.getDiaria() < 2){
  			this.setDiaria(this.getDiaria() + 1); //se diaria for menor que 2 diarias vc pode adiciona mais uma diaria
  			return true; 
  		}else {
  			return false;
  		}
  	}

}