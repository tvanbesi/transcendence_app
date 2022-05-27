import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageService, msgContent } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(private services: MessageService) {}

  testValue: Observable<msgContent> = this.services.getMessageHistory();
}
