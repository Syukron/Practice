//our root app component
import {Component, NgModule, ViewContainerRef, TemplateRef, Input, ContentChild} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

@Component({
  selector: 'my-inc',
  template: ''
})
export class Inc {
  
  @Input() tmpl;
  
  @Input() data;
  
  constructor(private _view: ViewContainerRef) {}
  
  ngOnInit() {
    console.log(this.tmpl);
    if (this.tmpl) {
      this._view.createEmbeddedView(this.tmpl, {'$implicit': this.data});
    }
  }
}

@Component({
  selector: 'my-comp',
  template: `
    <div *ngIf="true">
      <template ngFor let-i [ngForOf]="data">
        <div>
          <button (click)="toggle(i)">toggle-{{i}}</button>
          <span *ngIf="show[i]">
            <my-inc [tmpl]="tmpl" [data]="{val: i}"></my-inc>
          </span>
        </div>
      </template>
    </div>`
})
export class Comp {
  data = [1, 2, 3];
  show = [false, false, false];

  @ContentChild(TemplateRef) tmpl;
  
  ngAfterContentInit() {
    console.log(this.tmpl);
  }
  
  toggle(i) {
    this.show[i] = !this.show[i];
  }
  
}

@Component({
  selector: 'my-app',
  template: `
    <div>
      <h2>Hello {{name}}</h2>
      <my-comp>
        <template let-data>
          <span *ngIf="true">{{data | json}}</span>
        </template>
      </my-comp>
    </div>
  `,
})
export class App {
  name:string;
  
  constructor() {
    this.name = 'Angular2'
  }
  
}

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ App, Comp, Inc ],
  bootstrap: [ App ]
})
export class AppModule {}