import { Component } from '@angular/core';

@Component({
  selector: 'app-form-server',
  templateUrl: './form-server.component.html',
  styleUrls: ['./form-server.component.css']
})
export class FormServerComponent {
  serverName = ''
  serverContent = ''

  servers = []

  onAddServer() {
    this.servers.push({
      type: 'server',
      name: this.serverName,
      content: this.serverContent
    })
  }

  onAddBlueprint() {
    this.servers.push({
      type: 'blueprint',
      name: this.serverName,
      content: this.serverContent
    })
  }
}
