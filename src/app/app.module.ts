import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RantListComponent } from './components/rant-list/rant-list.component';
import { RantComponent } from './components/rant-list/rant/rant.component';
import { CreateRantComponent } from './components/create-rant/create-rant.component';
import {FormsModule} from '@angular/forms';
import {AlertService} from './services/alert.service';
import {HttpService} from './services/http.service';
import {RantService} from './services/rant.service';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabase, AngularFireDatabaseModule} from 'angularfire2/database';
import {HomeComponent} from './components/home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {HeaderComponent} from './components/header/header.component';
import {ShortenPipe} from './pipes/shorten.pipe';
import {RandomColorDirective} from './directives/random-color.directive';
import { FooterComponent } from './components/footer/footer.component';

export const FIREBASECONFIG = {
  apiKey: 'AIzaSyDKCwGDzjzqwoAkZ1E0bftfNqxN-oNTQB8',
  authDomain: 'ranter-b0e50.firebaseapp.com',
  databaseURL: 'https://ranter-b0e50.firebaseio.com',
  storageBucket: 'ranter-b0e50.appspot.com',
  messagingSenderId: '278908901763'
};

@NgModule({
  declarations: [
    AppComponent,
    RantListComponent,
    RantComponent,
    CreateRantComponent,
    HeaderComponent,
    HomeComponent,
    ShortenPipe,
    RandomColorDirective,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(FIREBASECONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [
    AlertService,
    HttpService,
    RantService,
    AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
