import { Component, Input } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-lottie-loader',
  templateUrl: './lottie-loader.component.html',
  styleUrl: './lottie-loader.component.scss'
})
export class LottieLoaderComponent {

  @Input() icon:string = 'https://lottie.host/1e23814a-de6e-4d87-95b7-c01a1dd2a53e/7AfanYgIBy.json'
  @Input() iconWidth:string = '300px'
  @Input() iconHeight:string = '300px'
  @Input() containerHeight:string = '80vh'



  options: AnimationOptions = {
    path: this.icon,

  };

  ngOnChanges(){
    this.options = {
      path:this.icon
    }
  }
}
