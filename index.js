class heroi {
    constructor(nome, idade, tipo){
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
    }
atacar () {
    let ataque
    switch (this.tipo) {
        case 'mago':
            ataque = "magia"
            break;
        case 'guerreiro':
            ataque = "espada"
            break
        case 'monge':
            ataque = "artes marciais"
            break
        case 'ninja':
            ataque = "shuriken"
            break
        default:
            ataque = "ataque generico"
            break;
    }
    console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

const heroi1 = new heroi('Cesar', 30, 'guerreiro');
heroi1.atacar();

const heroi2 = new heroi('Ronald', 50, 'mago');
heroi2.atacar();

const heroi3 = new heroi('Elias', 40, 'ninja');
heroi3.atacar();

const heroi4 = new heroi('Junior', 60, 'monge');
heroi4.atacar();