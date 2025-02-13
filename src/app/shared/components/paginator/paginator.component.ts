import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PaginatorService } from '../../services/paginator.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() totalCount:any;
  @Input() pageNumber:number =0;
  @Input() showPageSize:boolean =true;
  @Output() changePage = new EventEmitter<any>();
  paginator$ = this.paginatorService.paginator$

  constructor(
    private paginatorService:PaginatorService
  ) { }

  ngOnInit(): void {
  }

  change(event:any){
    this.paginatorService.updatePaginatorIndex(event.page+1)
    this.paginatorService.updatePaginatorPageSize(event.rows)
    this.changePage.emit()
  }

}
