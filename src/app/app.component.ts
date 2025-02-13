import { Component } from '@angular/core';
import { ThemeService } from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'wink-assessment';
  
  constructor( private themeService:ThemeService){}

  ngOnInit(){
    this.themeService.initTheme()
  }
}
