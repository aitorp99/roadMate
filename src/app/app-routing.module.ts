import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { ChatsComponent } from './components/chats/chats.component';
import { SpecificChatComponent } from './components/specific-chat/specific-chat.component';
import { RegistrerComponent } from './components/registrer/registrer.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CreateAdvertismantComponent } from './components/create-advertismant/create-advertismant.component'; 
import { ViewAdvertismentComponent } from './components/view-advertisment/view-advertisment.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'chats', component: ChatsComponent},
  {path: 'specificChat/:id', component: SpecificChatComponent},
  {path: 'register', component: RegistrerComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'createAdvertismant', component: CreateAdvertismantComponent},
  {path: 'viewAdvertisment', component: ViewAdvertismentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
