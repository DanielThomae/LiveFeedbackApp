import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//Models
import { Room } from '../models/Room';
import { Question } from '../models/Question';

@Component({
  selector: 'page-questionSend',
  templateUrl: 'questionSend.html'
})
export class QuestionSend {
  selectedRoom = new Room();
  selectedQuestion = new Question();
  showQuestions = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedRoom.name="Testveranstaltung";
    let newQuestion = new Question();
    newQuestion.typ="Quiz";
    newQuestion.category="Singlechoice";
    newQuestion.text = "Testfrage";
    this.selectedRoom.questions.push(newQuestion);
    let newQuestion1 = new Question();
    newQuestion1.typ="Umfrage";
    newQuestion1.category="Singlechoice";
    newQuestion1.text = "Beispielfrage";
    this.selectedRoom.questions.push(newQuestion1);
    let newQuestion2 = new Question();
    newQuestion2.typ="Quiz";
    newQuestion2.category="Multiplechoice";
    newQuestion2.text = "Frage3";
    this.selectedRoom.questions.push(newQuestion2);
    
  }


}
