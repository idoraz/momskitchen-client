import { Ingerdient } from './ingredient';
import { Instruction } from './instruction';


export class Recipe {

    id: string;
    name: string;
    ingredients: Ingerdient[];
    instructions: Instruction[];

    constructor(name: string) {
        this.id = '';
        this.name = name;
        this.ingredients = [];
        this.instructions = [];
    }

}
