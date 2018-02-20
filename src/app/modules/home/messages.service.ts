import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Message } from './message.model';
@Injectable()
export class MessagesService {
  messages: AngularFireList<any>;
  constructor(private firebase: AngularFireDatabase) { }

  getData() {
    this.messages = this.firebase.list('/messages');
    return this.messages;
  }

  send(msg: Message) {
    this.messages.push({
      message: msg.message
    });
  }
}
