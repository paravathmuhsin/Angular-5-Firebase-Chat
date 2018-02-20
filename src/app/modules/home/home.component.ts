import { Component, Input, AfterViewChecked, ElementRef, ViewChild, OnInit } from '@angular/core';

import { MessagesService } from './messages.service';
import { Message } from './message.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('chatContainer') private chatContainer: ElementRef;
  @Input()
  set ready(isReady: boolean) {
    if (isReady) {
      this.scrollToBottom();
    }
  }
  constructor(private messagesService: MessagesService) { }
  messages: Message[];
  ngOnInit() {
    let x = this.messagesService.getData();
    x.snapshotChanges().subscribe(item => {
      this.messages = [];
      item.forEach(element => {
        let y = element.payload.toJSON();
        y['$key'] = element.key;
        this.messages.push(y as Message);
      });
      this.scrollToBottom();
    });
  }

  send(msg) {
      let val: Message = { $key: null, message: msg};
      (<HTMLInputElement>document.getElementById('messageBox')).value = '';
      this.messagesService.send(val);
  }

  scrollToBottom(): void {
    try {
      this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }
}
