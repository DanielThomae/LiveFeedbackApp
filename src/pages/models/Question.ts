import { Answer } from '../models/Answer';

export class Question{
  id:number;
  text:string;
  typ:string;
  category:string;
  answers = new Array<Answer>();
}