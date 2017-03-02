import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-questionView',
  templateUrl: 'questionView.html'
})
export class QuestionView {
  selectedQuestion = new Question();
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedQuestion = this.navParams.data;
  }

}

class Question{
  id:number;
  text:string;
  typ:string;
  category:string;
  answer=[];
}