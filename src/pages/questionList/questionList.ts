import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//Classes
import { Room } from '../models/Room';
import { Question } from '../models/Question';
//Pages
import { QuestionView } from '../questionView/questionView';

@Component({
  selector: 'page-questionList',
  templateUrl: 'questionList.html'
})
export class QuestionList {
  selectedRoom= new Room();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedRoom = this.navParams.data;
    
  }

  questionTapped(tappedQuestion){
    this.navCtrl.push(QuestionView,tappedQuestion);
  }
  
  deleteQuestion(id){
    this.selectedRoom.questions.splice(this.selectedRoom.questions.findIndex(x => x.id ===id),1);
  }

  newQuestion(){
    let newQuestion = new Question();
    newQuestion.typ="Quiz";
    newQuestion.category="Singlechoice";
    newQuestion.text = "Hier die Frage eingeben";
    this.selectedRoom.questions.push(newQuestion);
    this.navCtrl.push(QuestionView, newQuestion);
  }
}
