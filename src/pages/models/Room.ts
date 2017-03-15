import { Question } from '../models/Question';


export class Room {
    id:number;
    name:string;
    conectionKey:number;
    admin:string;
    questions = new Array<Question>();
    member = new Array<string>();
}