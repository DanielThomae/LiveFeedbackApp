import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
room = veranstaltung

*/
@Injectable()
export class RoomProvider {

  myRooms = [];
  mySeats = [];
  constructor(public http: Http) {
    
  }

  generateDataRoom(){
    let myRoom = new Room();
      myRoom.id=1,
      myRoom.name="Testraum",
      myRoom.key=1000,
      myRoom.questions= []
     let question = new Question();
      question.id=0;
      question.text="testfrage";
      question.typ="Quiz"
      question.category="Singlechoice";
      let testantwort = new Answer();
      testantwort.text = "richtige Antwort";
      testantwort.isCorrect = true;
      let testantwort2 = new Answer();
      testantwort2.text = "falsche Antwort";
      testantwort2.isCorrect = false;
      question.answers.push(testantwort)
      question.answers.push(testantwort2)
      myRoom.questions.push(question);
     return myRoom;
  }

    generateDataSeat(){
      let mySeat = new Object({
        id:1,
        name:"Testsitz",
        key:1001,
        questions: []
      });
      return mySeat;
  }

  getMyRooms(){

  }
//providerfuntionen folgen...

}

class Room{
  id:number;
  name:string;
  key:number;
  questions = new Array<Question>();
}

class Question{
  id:number;
  text:string;
  typ:string;
  category:string;
  answers=new Array<Answer>();
}

class Answer{
  id:number;
  text:string;
  isCorrect:boolean;
}