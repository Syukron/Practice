import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-to-parent',
  templateUrl: './child-to-parent.component.html',
  styleUrls: ['./child-to-parent.component.css']
})
export class ChildToParentComponent {
  serverName = ''
  @Output() pushServers = new EventEmitter<string>()

  createServer(name: string) {
    this.pushServers.emit(name)
    this.serverName = ''
  }
}
 