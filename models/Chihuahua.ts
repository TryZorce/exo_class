import { Chien } from '../models/Chien';


export class Chihuahua extends Chien {
    info: string = 'Le Chihuahua est petit'

    constructor(nom: string) {
        super(nom);
      }

    ChihuahuaInfo() {
        console.log(this.info)
    }

    ChihuahuaComplet() {
        console.log(this.info + this.Chienpattes)
    }
}