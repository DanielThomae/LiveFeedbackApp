import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//Classes
import { Room } from '../models/Room';
//Pages
import { QuestionList } from '../questionList/questionList';
//Provider
import { RoomProvider } from "../../providers/room-provider";

@Component({
  selector: 'page-meinProfil',
  templateUrl: 'meinProfil.html'
})
export class MeinProfil {
  myRooms=[];
  selectedRoom= new Room();
  idCount:number = 1;
  

  constructor(public navCtrl: NavController, public roomProvider: RoomProvider) {
    this.myRooms.push(this.roomProvider.generateDataRoom());
  }

  roomTapped(tappedRoom){
    console.log(tappedRoom.id);
    this.navCtrl.push(QuestionList,tappedRoom);
  }


  newRoom(){
    let newRoom = new Room();
    newRoom.id= this.idCount;
    this.idCount++;
    newRoom.name = "name des neuen Raums";
    this.myRooms.push(newRoom);
  }

  changeRoom(id){

  }

  deleteRoom(id){
    this.myRooms.splice(this.myRooms.findIndex(x => x.id ===id),1);
  }

}

