import { Choice } from "./choice";

export class Question {
    id:number;
    text:string;
    name:string;
    type:string;
    attempted:boolean;
    time:Array<number>;
    clickcount:Array<number>;
    choicetimes:Array<number>;
    choices:Choice[];
}
