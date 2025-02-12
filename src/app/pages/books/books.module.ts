import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksListComponent } from './books-list/books-list.component';
import { SharedModule } from '../../shared/shared.module';
import { BookListTableComponent } from './books-list/book-list-table/book-list-table.component';
import { BookDetailsComponent } from './book-details/book-details.component';


@NgModule({
  declarations: [
    BooksListComponent,
    BookListTableComponent,
    BookDetailsComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    SharedModule
  ]
})
export class BooksModule { }
