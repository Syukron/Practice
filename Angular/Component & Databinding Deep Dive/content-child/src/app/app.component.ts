import { Component, ContentChild, ContentChildren, ElementRef, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ContentChild('form_name') form_name:ElementRef
  @ContentChildren('form_book_name') form_book: ElementRef

  title = 'view-child';

  submitName() {
    alert(this.form_name)
  }

  submitBook() {
    console.log(this.form_book)
  }
}
