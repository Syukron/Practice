## Property and event binding
```
@Input() data: ''
@Input() data: string
@Input() data: {name: string, content: string}

@Output() dataInserted = new EventEmitter<string>()
@Output() dataInserted = new EventEmitter<any>()
@Output() dataInserted = new EventEmitter<{name: string, content: string}>()
```

## Binding to custom property
#### Parent to child 
```
#child component.ts
@Input() postedData: ''

#parent component.html
<app child [postedData]="childFunction()">
```

#### Child to parent
```
#child component.ts
@Output() dataCreated: new EventEmitter<string>()

onSubmitData(name: string) {
    this.dataCreated.emit(name)
}

#parent component.html
<app parent (dataCreated)="parentFunction($event)">
```
## Assigning alias to custom property
```
#component.ts
@Output('dtCreated') dataCreated = new EventEmitter<string>()

onSubmitData(name: string) {
    this.dataCreated.emit(name)
}

#component.html
<app-parent (dtCreated)="parentFunction()">
```
## Local reference
```
#component.html
<input type="text" #name>
<button (click)="onSubmitData(name.value)">
```
## View encapsulation
```
@component({
    encapsulation: ViewEncapsulation.ShadowDom
})

- ShadowDom
- Emulated
- None

```

## Projecting content into components using ng-content
```
#main view 
<app-child>
    <p>Hello World</p>
</app-child>

#secondary view
<ng-content></ng-content>
```

## Component lifecycle
| Lifecycle | Description |
| ----------- | ----------- |
| ngOnChanges | Called after a bound input property changes |
| ngOnInit | Called once the component is initialized |
| ngDoCheck | Called during every change detection run |
| ngAfterContentInit | Called after content (ng-content) has been projected into view |
| ngAfterContentChecked | Called every time the projected content has been checked |
| ngAfterViewInit | Called after the component’s view (and child views) has been initialized |
| ngAfterViewChecked | Called every time the view (and child views) have been checked |
| ngOnDestroy | Called once the component is about to be destroyed |

## Some way to get input data from view 
#### 1. Two way data binding 
```
<input type="text" [(ngModel)]="bookName">
```
#### 2. Local reference
```
<input type="text" #form_book_name>
<button (click)="onSaveData(form_book_name.value)"></button>
```
#### 3. View Child
```
#component.html
<input type="text" #form_book_name>

#component.ts
@ViewChild('form_book_name') form_book_name: ElementRef
onSaveBook() {
    let bookName = this.form_book_name.nativeElement.value
}

```