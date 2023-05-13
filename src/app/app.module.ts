import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtomNavigationComponent } from './components/buttom-navigation/buttom-navigation.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrerComponent } from './components/registrer/registrer.component';
import { SearchComponent } from './components/search/search.component';
import { ChatsComponent } from './components/chats/chats.component';
import { SpecificChatComponent } from './components/specific-chat/specific-chat.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtomNavigationComponent,
    HomeComponent,
    LoginComponent,
    RegistrerComponent,
    SearchComponent,
    ChatsComponent,
    SpecificChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
