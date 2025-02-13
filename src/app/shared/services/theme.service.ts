import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private readonly themeKey = 'app-theme';

  currentTheme = signal<string>('light');

  constructor() { 
    const savedTheme = localStorage.getItem(this.themeKey) || 'light';
    this.setTheme(savedTheme);
  }

  setTheme(theme:string) {
    localStorage.setItem(this.themeKey, theme);
    document.documentElement.classList.remove('light-theme', 'dark-theme');
    document.documentElement.classList.add(`${theme}-theme`);
  }

  toggleTheme() {
    this.currentTheme.set(localStorage.getItem(this.themeKey) == 'light' ? 'dark' : 'light');
    this.setTheme(this.currentTheme());
  }

  initTheme() {
    this.currentTheme.set(localStorage.getItem(this.themeKey) ?? 'dark');
    this.setTheme(this.currentTheme());
  }
}
