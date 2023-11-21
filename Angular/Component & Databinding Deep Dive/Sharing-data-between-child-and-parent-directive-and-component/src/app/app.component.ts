import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // pass data frm parent to child 
  message = ''
  messages = []
  
  sendMessage(messageContent: string) {
    this.messages.push(messageContent)
    this.message = ''
  }

  // receive data from child to parent 
  servers = []
  addServer(name: string) {
    this.servers.push(name)
  }
}
