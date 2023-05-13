import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/app/interfaces/chats';
import { Router } from '@angular/router';
import { ChatsService } from 'src/app/services/chats.service';
@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {

  constructor(private router: Router, public chatsService: ChatsService) { }
  chats: Chat[] = [];
  ngOnInit(): void {
    this.chats = this.chatsService.getChats();
    // Invertir el orden de los mensajes en cada chat
    this.chats.forEach(chat => {
      chat.messages.reverse();
    });
  }

  selectedChat: Chat | null = null;

  selectChat(chat: Chat) {
    this.router.navigate(['/specificChat', chat.id]);
  }

}
