import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { TabsPage } from '../pages/tabs/tabs';
import { AllPage } from '../pages/all/all';
import { ActivePage } from '../pages/active/active';
import { CompletedPage } from '../pages/completed/completed';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TodoProvider } from '../providers/todo/todo';

@NgModule({
  declarations: [
    MyApp,
    ActivePage,
    CompletedPage,
    AllPage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ActivePage,
    CompletedPage,
    AllPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    TodoProvider,
  ],
})
export class AppModule {
}
