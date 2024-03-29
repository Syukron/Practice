import { EventEmitter } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Output } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>()
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>()
  @ViewChild('form_server_name') form_server_name: ElementRef

  serverName = ''
  serverContent = ''

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.serverName,
      serverContent: this.serverContent
    })   
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.serverName,
      serverContent: this.serverContent
    })
  }
}
