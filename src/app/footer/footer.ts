import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router'; // Add Router

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  constructor(private router: Router) {} // Inject the Router

  // Same logic as Navbar to handle merged sections
  scrollToSection(sectionId: string, event: Event) {
    event.preventDefault();
    
    this.router.navigate(['/home'], { fragment: sectionId }).then(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }
}