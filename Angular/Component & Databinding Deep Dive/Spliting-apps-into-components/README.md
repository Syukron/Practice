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