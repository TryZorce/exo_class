export class Chien {

    nom: string;

    constructor(nom: string) {
        this.nom = nom;
    }

    pattes: number = 4

    Chienpattes() {
        console.log(`Mon chien a : ${this.pattes}`)
    }
}

