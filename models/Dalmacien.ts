import { Chien } from '../models/Chien';

export class Dalmacien extends Chien {
    info: string = 'Le dalmacien a des tâches'

    constructor(nom: string) {
        super(nom);
      }

    DalmacienInfo() {
        console.log(this.info)
    }

    DalmacienComplet() {
        console.log(this.info + this.Chienpattes)
    }
}