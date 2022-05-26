import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent {

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ) { }

  messages = this.messageService.getMessages();

  addMessage(message: string) {
    this.messageService.addMessage(message);
  }

  checkoutForm = this.formBuilder.group({
    message: ''
  });

  onSubmit(): void {
    console.log('Message submited: ', this.checkoutForm.value);
    this.messageService.sendMessage(this.checkoutForm.value.message);
    this.checkoutForm.reset();
  }

}
