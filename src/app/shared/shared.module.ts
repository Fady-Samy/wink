import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LottieComponent } from 'ngx-lottie';
import { PrimeModule } from '../prime/prime.module';
import { LottieLoaderComponent } from './components/lottie-loader/lottie-loader.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { SearchFieldComponent } from './components/search-field/search-field.component';
import { EmptyStateComponent } from './components/empty-state/empty-state.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';



@NgModule({
  declarations: [
    PaginatorComponent,
    LottieLoaderComponent,
    SearchFieldComponent,
    EmptyStateComponent,
    ThemeToggleComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    PrimeModule,
    FormsModule,
    LottieComponent
  ],
  exports:[
    NgbModule,
    PrimeModule,
    FormsModule,
    LottieComponent,
    PaginatorComponent,
    LottieLoaderComponent,
    SearchFieldComponent,
    EmptyStateComponent,
    ThemeToggleComponent
  ]
})
export class SharedModule { }
