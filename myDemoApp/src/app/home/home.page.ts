import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  // Injects the Router for navigation
  constructor(private router: Router) {}
  goToDetails(title: string, imagePath: string) {
    // Navigates to the 'details' page
    this.router.navigate(['/details'], {
      // Passes data (title & image URL) as query parameters
      queryParams: { title: title, image: imagePath },
    });
  }
}
