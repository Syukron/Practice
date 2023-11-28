import { Component, ContentChild, ContentChildren, ElementRef, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @ContentChild('form_name') form_name: ElementRef
  @ViewChild('form_name') name: ElementRef
  // @ContentChildren('form_book_name') form_book: ElementRef

  title = 'view-child';

  submitName() {
    this.name.nativeElement.textContent
  }

  submitBook() {
    // console.log(this.form_book)
  }
}
