import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-title-details',
  templateUrl: './title-details.page.html',
  styleUrls: ['./title-details.page.scss'],
  standalone: false,
})
export class TitleDetailsPage implements OnInit {
  // Variables to store the received title and image path from query parameters
  title: string = '';
  imagePath: string = '';
  // Injects ActivatedRoute to access the query parameters from the URL
  constructor(private route: ActivatedRoute) {}
  // Lifecycle hook that runs when the component is initialized
  ngOnInit() {
    // Subscribes to query parameters passed from the HomePage
    this.route.queryParams.subscribe((params) => {
      // Retrieves the 'title' parameter from the URL
      this.title = params['title'];
      // Retrieves the 'image' parameter from the URL
      this.imagePath = params['image'];
    });
  }
}
