import { Question } from '../models/Question';


export class Room {
    id:number;
    name:string;
    key:number;
    questions = new Array<Question>();
}