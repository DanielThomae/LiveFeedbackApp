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
  myRooms= Array<Room>();
  selectedRoom= new Room();
  idCount:number = 1;
  keyCount:number = 1001;
  

  constructor(public navCtrl: NavController, public roomProvider: RoomProvider) {
    this.myRooms = roomProvider.rooms;
    console.log(roomProvider.rooms);
  }

  roomTapped(tappedRoom){
    this.navCtrl.push(QuestionList,{room:tappedRoom});
  }


  newRoom(){
    let newRoom = new Room();
    newRoom.id= this.idCount;
    newRoom.conectionKey = this.keyCount;
    this.idCount++;
    this.keyCount++;
    newRoom.admin = "Me";
    newRoom.name = "name des neuen Raums";
    this.myRooms.push(newRoom);
  }

  deleteRoom(id){
    this.myRooms.splice(this.myRooms.findIndex(x => x.id ===id),1);
  }

}

