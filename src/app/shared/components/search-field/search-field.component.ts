import { Component, EventEmitter, Input, Output, output, signal } from '@angular/core';
import { SharedModule } from "../../shared.module";

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrl: './search-field.component.scss',
})
export class SearchFieldComponent {

  @Input() label= 'common.Search'
  @Input() placeHolder= 'common.search'
  @Input() value= ''
  @Output() onSearch: EventEmitter<any> = new EventEmitter();
  timeOut: any
  isLoading = signal<boolean>(false)

  search(event:any){
    this.isLoading.set(true)
    this.onSearch.emit(event.target.value)
    setTimeout(() => {
      this.isLoading.set(false)
    }, 1000)
    
  }
}
