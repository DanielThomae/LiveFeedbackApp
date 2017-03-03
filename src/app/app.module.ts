import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MeinProfil } from '../pages/meinProfil/meinProfil';
import { QuestionList } from '../pages/questionList/questionList';
import { QuestionView } from '../pages/questionView/questionView';
import { MySeats } from '../pages/mySeats/mySeats';

//Providers
import { RoomProvider } from "../providers/room-provider";


@NgModule({
  declarations: [
    MyApp,
    MeinProfil,
    QuestionList,
    QuestionView,
    MySeats
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MeinProfil,
    QuestionList,
    QuestionView,
    MySeats
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},RoomProvider]
})
export class AppModule {}
