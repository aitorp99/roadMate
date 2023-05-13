export interface Chat {
    id: string;
    name: string;
    profilePic:string;
    messages: Message[];
  }
  export interface Message {
    sender: string;
    content: string;
  }