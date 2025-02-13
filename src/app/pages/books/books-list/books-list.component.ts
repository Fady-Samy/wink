import { Component, signal } from '@angular/core';
import { Subject, tap, finalize, takeUntil, catchError } from 'rxjs';
import { BookItem, Books } from '../../../shared/models/books';
import { BookService } from '../../../shared/services/book.service';
import { PaginatorService } from '../../../shared/services/paginator.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  queryParams:any = null
  
  constructor(
    private bookService: BookService,
    private paginatorService:PaginatorService,
    private route:ActivatedRoute,
    private router:Router,
  ) {
    this.route.queryParams.subscribe((params) => {
      this.queryParams = params
    });
  }
  ngOnInit() {
    this.queryParams['page'] && this.paginatorService.updatePaginatorIndex(this.queryParams['page']);
    this.getData()
  }

  getData() {
    this.isLoading.set(true)
    this.bookService.getAll(this.paginator$.getValue().pageIndex, this.paginator$.getValue().pageSize, this.searchString())
      .pipe(
        tap((result: Books) => {
          if (result.items) {
            this.dataSource.set(result.items)
            result.totalItems!=0 && this.paginatorService.updatePaginatorLength(result.totalItems)
          } else {
            this.resetData()
          }
        },),
        finalize(() => { this.isLoading.set(false)}),
        takeUntil(this._unsubscribe$),
        catchError((err)=>{
          this.resetData
          throw err
        })
      )
      .subscribe();
  }

  resetData(){
    this.dataSource.set([])
    this.paginatorService.resetPaginator()
  }

  search(event:string){
    this.searchString.set(event);
    this.paginatorService.resetPaginator()
    this.getData()
  }


  changePage(){
    this.router.navigate([], {
      queryParams: { page: this.paginator$.getValue().pageIndex },
      queryParamsHandling: 'merge',
    });
    this.getData()
  }

 ngOnDestroy(): void {
    this.paginatorService.resetPaginator()
    this._unsubscribe$.next(true)
    this._unsubscribe$.complete()
  }
}
