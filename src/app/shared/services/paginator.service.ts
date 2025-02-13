import { Injectable, signal } from '@angular/core'
import { BehaviorSubject } from 'rxjs'


@Injectable({
  providedIn: 'root',
})
export class PaginatorService {
  paginator$ = new BehaviorSubject<any>({
    length: 0,
    pageIndex: 1,
    pageSize: 5,
    previousPageIndex: 0,
    totalPages:0,
  })

  constructor() {}


  updatePaginatorIndex(index: number) {
    this.paginator$.next({
      ...this.paginator$.getValue(),
      pageIndex:index
    })
  }
  updatePaginatorLength(length: number) {
    this.paginator$.next({
      ...this.paginator$.getValue(),
      length:length
    })
  }
  updatePaginatorTotalPages(total: number) {
    this.paginator$.next({
      ...this.paginator$.getValue(),
      totalPages:total
    })
  }

  updatePaginatorPageSize(size: number) {
    this.paginator$.next({
      ...this.paginator$.getValue(),
      pageSize:size
    })    
  }

  resetPaginator() {
    this.paginator$.next({
      length: 0,
      pageIndex: 1,
      pageSize: 5,
      previousPageIndex: 0,
      totalPages: 0,
    })
  }
}
