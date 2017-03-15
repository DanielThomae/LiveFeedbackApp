import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RespondView } from '../respondView/respondView';

//Models
import { Room } from '../models/Room';
//Provider
import { RoomProvider } from "../../providers/room-provider";


@Component({
  selector: 'page-mySeats',
  templateUrl: 'mySeats.html'
})

export class MySeats {
  rooms = new Array<Room>();
  mySeats = new Array<Room>();
  key:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public roomProvider:RoomProvider) {

  }

  joinSeat(conectionKey){
    let foundRoom: Room = this.roomProvider.rooms.find(x => x.conectionKey === conectionKey);
    console.log();
    if(foundRoom!=undefined && this.mySeats.find(x => x.conectionKey === conectionKey)===undefined){
      this.mySeats.push(foundRoom);
    }
  }

  pushToQuestion(){
    this.navCtrl.push(RespondView);
  }


}
