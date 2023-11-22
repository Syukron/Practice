import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  serverElement = [{type: 'server', name: 'Test server', content: 'just a test'}]

  onServerReceived(serverData: {serverName: string, serverContent: string}) {
    this.serverElement.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    })
  }

  onBlueprintReceived(serverData: {serverName: string, serverContent: string}) {
    this.serverElement.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    })
  }
}
