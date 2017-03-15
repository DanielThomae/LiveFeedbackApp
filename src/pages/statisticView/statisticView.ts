import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QuestionSend } from '../questionSend/questionSend';

//Provider
import { RoomProvider } from "../../providers/room-provider";

@Component({
  selector: 'page-statisticView',
  templateUrl: 'statisticView.html'
})
export class StatisticView {
  rooms=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public roomProvider: RoomProvider) {
    this.rooms = this.roomProvider.rooms;
  }

roomTapped(myRoom){
  this.navCtrl.push(QuestionSend);
}

}
