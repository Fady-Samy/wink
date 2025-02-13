import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'primeng/rating';
import { ImageModule } from 'primeng/image';
import { PaginatorModule } from 'primeng/paginator';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RatingModule,
    ImageModule,
    PaginatorModule
  ],
  exports:[
    RatingModule,
    ImageModule,
    PaginatorModule
  ]
})
export class PrimeModule { }
