export class Funcionario{ //Classe Mãe, compartilha esses atributos com outras classes filhas
	private nome: string; //nome do funcionario
	private diaria: number; //numero de diarias (horaextra)

	public constructor(nome: string, diaria: number){
		this.nome = nome;
		this.diaria = diaria;
	}
	public getNome(): string{
		return this.nome;
	}
	public setNome(nome: string): void{
		this.nome = nome;
	}
	public getDiaria(): number{
		return this.diaria ;
	}
	public setDiaria(diaria: number): void{
		this.diaria = diaria;
	}
    public calcularSalario():number{
    	return 0;
    }
    public addDiaria():boolean{
    	return false;
    }

}
