import { ChangeDetectorRef, Component } from '@angular/core';
import { WebSocketConfig } from "./configs/WebSocketConfig";
import { IOutputMessage } from "./interfaces/output-message";
import { IInputMessage } from "./interfaces/input-message";
import { MessageServiceService } from "./services/message-service.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chat-websocket-client';
  webSocket: WebSocketConfig;

  message: IInputMessage = {
    name: "",
    message: "",
  }

  isConnected: boolean = false;

  messageList: IOutputMessage[] = [];

  constructor(private messageService: MessageServiceService,){}

  ngOnInit() {
    this.webSocket = new WebSocketConfig(this.messageService);
    this.messageList = this.messageService.getMessages();
  }

  connect(){
    this.webSocket._connect();
    this.isConnected = true;
  }

  disconnect(){
    this.webSocket._disconnect();
    this.isConnected = false;
  }

  sendMessage(){

    // let pushThis: IOutputMessage = {
    //   "name": this.message.name,
    //   "message": this.message.message,
    //   "localDateTime": new Date(),
    // }

    // this.messages.push(pushThis);

    this.webSocket._send(this.message);
    this.message.message = "";
  }

  refreshMessages(){
    this.messageList = this.messageService.getMessages();
  }

}
