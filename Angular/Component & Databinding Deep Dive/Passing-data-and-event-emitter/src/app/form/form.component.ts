import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() 
  postData = new EventEmitter<any>()

  categories = ['fiction', 'story', 'Novel']
  bookName = ''
  bookCategory = ''

  onSelectCategories(name: string) {
    this.bookCategory = name
  }

  onAddBook(bookName: string, bookCategory: string) {
    let data = {bookName: bookName, bookCategory: bookCategory}
    this.postData.emit(data)
  }
}
 