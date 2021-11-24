import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  messages: any[];
  displayChat = false;

  constructor(protected chatService: ChatService) {
    this.messages = [];
  }

  
  ngOnInit(): void {
  }

  sendMessage(event: any) {
    const files = !event.files ? [] : event.files.map((file) => {
      return {
        url: file.src,
        type: file.type,
        icon: 'file-text-outline',
      };
    });

    this.messages.push({
      text: event.message,
      date: new Date(),
      reply: false,
      type: files.length ? 'file' : 'text',
      files: files,
      user: {
        name: 'You'
      },
    });
    const botReply = this.chatService.reply(event.message);
    if (botReply) {
      
      setTimeout(() => { this.messages.push(
        {
          text: event.message,
          date: new Date(),
          reply: true,
          type: 'text',
          user: {
            name: 'Bot',
            avatar: 'https://i.gifer.com/no.gif',
          },
        }
      ) }, 1000);
    }
  }

  displayChatWindow() {
    this.displayChat = !this.displayChat;
  }

}
