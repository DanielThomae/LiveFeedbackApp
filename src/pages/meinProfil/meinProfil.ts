import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { QuestionView } from '../questionView/questionView';

//Provider
import { RoomProvider } from "../../providers/room-provider";

@Component({
  selector: 'page-meinProfil',
  templateUrl: 'meinProfil.html'
})
export class MeinProfil {
  myRooms=[];
  mySeats=[];
  selectedRoom= new Room();
  

  constructor(public navCtrl: NavController, public roomProvider: RoomProvider) {
    this.myRooms.push(this.roomProvider.generateDataRoom());
    this.myRooms.push(this.roomProvider.generateDataRoom());
    this.mySeats.push(this.roomProvider.generateDataSeat());
    this.mySeats.push(this.roomProvider.generateDataSeat());
  }

  itemTapped(tappedRoom){
    this.selectedRoom = tappedRoom;
  }

  questionTapped(tappedQuestion){
    this.navCtrl.push(QuestionView,tappedQuestion);
  }
  newRoom(){
    let newRoom = new Room();
    newRoom.name = "name des neuen Raums";
    this.myRooms.push(newRoom);
  }
  newQuestion(){
    
    let newQuestion = new Question();
    newQuestion.typ="Quiz";
    newQuestion.category="Singlechoice";
    newQuestion.text = "Hier die Frage eingeben";
    this.myRooms.push(newQuestion);
    this.navCtrl.push(QuestionView, newQuestion);
  }
}


class Room{
  id:number;
  name:string;
  key:number;
  questions = new Array<Question>();

}

class Question{
  id:number;
  text:string;
  typ:string;
  category:string;
  answer=[];
}