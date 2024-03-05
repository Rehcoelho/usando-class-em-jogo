class SkillHeroi {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    
    escrever(){
        console.log(`O ${this.tipo} ${this.nome}`); 
     }  

    ataque(){
        console.log(" atacou usando espada");
    }
}

let heroi = new SkillHeroi("Elfo", 24, "guerreiro"); 

heroi.escrever();
heroi.ataque();



