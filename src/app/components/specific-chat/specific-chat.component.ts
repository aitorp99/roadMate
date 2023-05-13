import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chat } from 'src/app/interfaces/chats';
import { ChatsComponent } from '../chats/chats.component';
import { ChatsService } from 'src/app/services/chats.service';
@Component({
  selector: 'app-specific-chat',
  templateUrl: './specific-chat.component.html',
  styleUrls: ['./specific-chat.component.scss']
})
export class SpecificChatComponent implements OnInit {

  constructor(private route: ActivatedRoute, private chatsService: ChatsService) { }
  selectedChat: Chat | null | undefined = null;
  newMessage: string = '';

  ngOnInit(): void {
    const chatId = this.route.snapshot.paramMap.get('id');
    if (chatId) {
      this.selectedChat = this.chatsService.getMessages(chatId);
      
    }
  }

  sendMessage(): void {
    if (this.newMessage.trim() !== '' && this.selectedChat) {
      this.selectedChat.messages.push({
        sender: 'Tú',  // This should be replaced with the actual sender's name
        content: this.newMessage
      });
      this.newMessage = '';
    }
  }
}
