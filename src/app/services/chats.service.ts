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
  getChatByUser(name: string): Chat | null {
    return this.chats.find(chat => chat.name === name) || null;
  }

  createChat(name: string): Chat {
    // Generar un nuevo ID para el chat. Esto es solo un ejemplo y puede que quieras generar el ID de otra manera.
    const newChatId = Math.max(...this.chats.map(chat => Number(chat.id))) + 1;

    const newChat: Chat = {
      id: newChatId.toString(),
      name: name,
      profilePic: "./assets/user.png",  // Deberías reemplazar esto con la imagen de perfil real, si la tienes.
      messages: [],
    };

    this.chats.push(newChat);

    return newChat;
  }

}
