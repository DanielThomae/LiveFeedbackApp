import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
//Models
import { Room } from '../pages/models/Room';
import { Question } from '../pages/models/Question';
import { Answer } from '../pages/models/Answer';


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
      myRoom.id=0,
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
}
