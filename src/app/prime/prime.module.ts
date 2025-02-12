import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'primeng/rating';
import { ImageModule } from 'primeng/image';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RatingModule,
    ImageModule,
  ],
  exports:[
    RatingModule,
    ImageModule
  ]
})
export class PrimeModule { }
