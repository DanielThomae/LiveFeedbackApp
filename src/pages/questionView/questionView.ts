import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//Models
import { Question } from '../models/Question'


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
  
}
}
