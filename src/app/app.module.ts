import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//Pages
import { MeinProfil } from '../pages/meinProfil/meinProfil';
import { QuestionList } from '../pages/questionList/questionList';
import { QuestionView } from '../pages/questionView/questionView';
import { MySeats } from '../pages/mySeats/mySeats';
import { RespondView } from '../pages/respondView/respondView';
import { StatisticView } from '../pages/statisticView/statisticView';
import { QuestionSend } from '../pages/questionSend/questionSend';

//Providers
import { RoomProvider } from "../providers/room-provider";
import { ConnectionProvider } from "../providers/connection.provider";


@NgModule({
  declarations: [
    MyApp,
    MeinProfil,
    QuestionList,
    QuestionView,
    MySeats,
    RespondView,
    StatisticView,
    QuestionSend
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
    MySeats,
    RespondView,
    StatisticView,
    QuestionSend
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},RoomProvider,ConnectionProvider]
})
export class AppModule {}
