import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() receivedBooks = []

  onDeleteBook(index: number) {
    // alert(index)
    this.receivedBooks.splice(index, 1)
  }
}
