import { Injectable, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages:string[] = [];

  constructor(private socket: Socket) {
    console.log('Message service initialised');
    this.socket.on('msgToClient', (message:string) => {
      console.log('Adding message');
      this.addMessage(message);
    })
  }

  addMessage(message: string) { this.messages.push(message); }

  getMessages() { return this.messages; }

  sendMessage(msg: string) {
    this.socket.emit('msgToServer', msg);
  }
}
