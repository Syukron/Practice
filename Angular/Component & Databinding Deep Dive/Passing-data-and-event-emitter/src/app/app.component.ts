import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  booksData = []

  onReceivedBooks(bookData) {
    this.booksData.push(bookData)
    console.log(this.booksData)
  }
}
