import { Component, Input } from '@angular/core';
import { BookItem } from '../../../../shared/models/books';

@Component({
  selector: 'app-book-list-table',
  templateUrl: './book-list-table.component.html',
  styleUrl: './book-list-table.component.scss'
})
export class BookListTableComponent {

  @Input() dataSource:BookItem[] = []
}
