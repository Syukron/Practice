import { Input, SimpleChanges } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent {
  @Input('srvElement') element: {type: string, name: string, content: string}

  constructor() {
    console.log('constructor called')
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called')
    console.log(changes)
  }

  ngOnInit() {
    console.log('ngOnInit called')
  }
}
