import { Component, signal } from '@angular/core';
import { Subject, tap, finalize, takeUntil } from 'rxjs';
import { BookItem, Books } from '../../../shared/models/books';
import { BookService } from '../../../shared/services/book.service';
import { PaginatorService } from '../../../shared/services/paginator.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.scss'
})
export class BooksListComponent {

  _unsubscribe$: Subject<boolean> = new Subject()
  paginator$ = this.paginatorService.paginator$
  dataSource = signal<BookItem[]>([])
  isLoading = signal<boolean>(false)
  searchString = signal<string>("")
  
  constructor(
    private bookService: BookService,
    private paginatorService:PaginatorService
  ) {

  }
  ngOnInit() {
    this.getData()
  }

  getData() {
    this.isLoading.set(true)
    this.bookService.getAll(this.paginator$.getValue().pageIndex, this.paginator$.getValue().pageSize, this.searchString())
      .pipe(
        tap((result: Books) => {
          if (result.items.length) {
            this.dataSource.set(result.items)
            result.totalItems!=0 && this.paginatorService.updatePaginatorLength(result.totalItems)
          } else {
            this.dataSource.set([])
          }
        },),
        finalize(() => { setTimeout(() => {
          this.isLoading.set(false)
        }, 50); }),
        takeUntil(this._unsubscribe$),
      )
      .subscribe();
  }

  search(event:string){
    this.searchString.set(event);
    this.paginatorService.resetPaginator()
    this.getData()
  }


  changePage() {
    this.getData()
  }


 ngOnDestroy(): void {
    this.paginatorService.resetPaginator()
    this._unsubscribe$.next(true)
    this._unsubscribe$.complete()
  }
}
