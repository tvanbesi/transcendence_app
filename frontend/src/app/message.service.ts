import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Injectable} from '@angular/core';
import { Socket } from 'ngx-socket-io';

export interface msgContent {
  content: string;
}

export interface msgDto {
  
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages:string[] = [];

  constructor(private socket: Socket, private http: HttpClient) {
    console.log('Message service initialised');
    this.socket.on('msgToClient', (message:string) => {
      console.log('Adding message');
      this.addMessage(message);
    });
  }

  addMessage(message: string) {
    this.messages.push(message);
  }

  getMessages() {
    return this.messages;
  }

  sendMessage(msg: string) {
    this.socket.emit('msgToServer', msg);
    console.log('Adding msg to db')
    this.addMessageToDb();
  }

  getMessageHistory() {
    return this.http.get<msgContent>('api');
  }

  addMessageToDb() {
    return this.http.post('message', {content: 'a message for the db', author: 'someone'});
  }

}
