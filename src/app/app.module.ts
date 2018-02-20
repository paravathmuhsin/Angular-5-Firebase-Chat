import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Farebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

import { environment } from './../environments/environment';

export const firebaseConfig = {
  apiKey: 'AIzaSyBz3jvrPD32KXJ-CIYAU2o1Vr6lZ18kVYg',
  authDomain: 'chat-ca2c7.firebaseapp.com',
  databaseURL: 'https://chat-ca2c7.firebaseio.com',
  projectId: 'chat-ca2c7',
  storageBucket: 'chat-ca2c7.appspot.com',
  messagingSenderId: '413541450245'
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
