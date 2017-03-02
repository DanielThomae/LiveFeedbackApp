import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MeinProfil } from '../pages/meinProfil/meinProfil';
import { QuestionView } from '../pages/questionView/questionView';

//Providers
import { RoomProvider } from "../providers/room-provider";


@NgModule({
  declarations: [
    MyApp,
    MeinProfil,
    QuestionView
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MeinProfil,
    QuestionView
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},RoomProvider]
})
export class AppModule {}
