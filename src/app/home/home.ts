import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  scrollTo(section: string) {
  document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
}
}
