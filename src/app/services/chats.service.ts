import { Injectable } from '@angular/core';
import { Chat } from 'src/app/interfaces/chats';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  constructor() { }

  chats: Chat[] = [
    {
      id: '1',
      name: 'Usuario 1',
      profilePic: "../assets/programmer.png",
      messages: [
        { sender: 'Usuario 1', content: 'Hola, ¿cómo estás?' },
        { sender: 'Tú', content: 'Hola, bien gracias. ¿Y tú?' },
        { sender: 'Usuario 1', content: 'Bien gracias, mañana estaré en el punto de recojida a la hora espeficicada' },
        { sender: 'Tú', content: 'Perfecto gracias!' },
      ],
    },
    {
      id: '2',
      name: 'Usuario 2',
      profilePic: "",
      messages: [
        { sender: 'Usuario 2', content: 'Mañana a la misma hora?' },
        { sender: 'Tú', content: 'Si mañana a la hora de siempre!' },
      ],
    },
    {
      id: '3',
      name: 'Usuario 3',
      profilePic: "",
      messages: [
        { sender: 'Usuario 3', content: 'Hola, tengo una pregunta' },
        { sender: 'Tú', content: 'Claro, ¿qué necesitas saber?' },
      ],
    },
  ];

getMessages(id: string): Chat | null {
  return this.chats.find(chat => chat.id === id) || null;
}
getChats(): Chat[] {
  return this.chats;
}
}
