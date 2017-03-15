import { Component } from '@angular/core';
import { NavController, NavParams,} from 'ionic-angular';
//Models
import { Question } from '../models/Question'
import { Answer } from '../models/Answer'


@Component({
  selector: 'page-questionView',
  templateUrl: 'questionView.html'
})
export class QuestionView {
  selectedQuestion = new Question();
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedQuestion = this.navParams.data;
  }
  newAnswer(){
    let newAnswer = new Answer();
    newAnswer.text = "Hier eine Antwort eingeben";
    newAnswer.isCorrect = false;
    this.selectedQuestion.answers.push(newAnswer);
  }

}
