import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Question } from '../models/Question';
import { Answer } from '../models/Answer';


@Component({
  selector: 'page-respondView',
  templateUrl: 'respondView.html'
})
export class RespondView {
  question = new Question();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.question.text = "Ist dies eine gute Frage?";
    let answer1 = new Answer();
    answer1.text = "Antwort1";
    answer1.isCorrect = true;
    let answer2 = new Answer();
    answer2.text = "Antwort2";
    answer2.isCorrect = false;
    let answer3 = new Answer();
    answer3.text = "Antwort3";
    answer3.isCorrect = false;
    this.question.answers.push(answer1);
    this.question.answers.push(answer2);
    this.question.answers.push(answer3);
    console.log(this.question);
  }


}
