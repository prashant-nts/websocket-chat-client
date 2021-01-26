import { Injectable } from '@angular/core';
import { IInputMessage } from '../interfaces/input-message';
import { IOutputMessage } from '../interfaces/output-message';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  messages: IOutputMessage[] = [];

  constructor() { }

  getMessages(): IOutputMessage[]{
    return this.messages;
  }

  saveMessage(message:IOutputMessage){
    this.messages.push(message);
  }
}
