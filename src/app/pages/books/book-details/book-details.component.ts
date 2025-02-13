import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../../shared/services/book.service';
import { catchError, finalize, Subject, takeUntil, tap } from 'rxjs';
import { BookItem } from '../../../shared/models/books';
import { Location } from '@angular/common';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent {

  _unsubscribe$: Subject<boolean> = new Subject()
  id = signal<number|any>(null)
  bookData = signal<BookItem|null>(null)
  isLoading = signal<boolean>(false)
  invalidId = signal<boolean>(false)


  constructor(
    private route:ActivatedRoute,
    private bookService:BookService,
  ) {
    this.route.paramMap.subscribe((params:any) => {
      if(params.params.id){
        this.id.set(params.params.id)
        this.getById()
      }
    });
  }

  getById(){
    this.isLoading.set(true)
    this.bookService.getById(this.id()).pipe(
      tap( (res:any) => {
        if(res){
            this.bookData.set(res)
          }else{
            // this.dataSource.set([])
          }
      },),
      finalize(()=>this.isLoading.set(false)),
      takeUntil(this._unsubscribe$),
      catchError((err)=>{
        this.invalidId.set(true)
        throw err
      })
    )
    .subscribe();
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next(true)
    this._unsubscribe$.complete()
  }

}
