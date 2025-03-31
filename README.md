#Introduction To Ionic Framework:
Ionic is an open-source UI toolkit for building performant, high-quality mobile apps using web technologies — HTML, CSS, and JavaScript — with integrations for popular frameworks like Angular, React, and Vue.
#About the Demo Application:
In this tutorial, we will create a simple application with two pages. On the first page, we will display an image and a list of 5 items. When the user presses one of the items, we will navigate to the second page, where a card with an image related to the title will be displayed.
Instructions:
1.	Open the terminal in VS Code and run the following command to install Ionic dependencies: 

npm install -g @ionic/cli   

2.	To create an Ionic project, run the following command. This will start the project and ask for the project name, type (blank), and framework to use (Angular, React, or Vue). In our case, we will use Angular:

Ionic start myDemoApp blank –type=angular

3.	For this demo, we will use ngModule components. After running the command, you will be asked if you want to join the Ionic community. You can type N to skip this.

4.	Once the project is set up, navigate to the project directory using:

cd myAppDemo
	To run the live page, use the following command:
ionic serve
This will automatically open localhost in your browser. To visualize the app in mobile view, right-click the page, inspect the source, and enable the "Toggle Device Toolbar".
Important:
All our work will focus on the SRC folder. The home. page. html file contains the visual elements, while home.page.ts contains the components and the HomePage class to set up functionality.
	Coding Part:  
5.	 Go to the home folder and open home.page.html. We will first add an image to our page. We will delete the default content inside the <ion-content> tag and update the title to DemoApp.

<ion-content class="ion-padding">
<img alt="JS" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" />
</ion-content>

6.	Inside our content, we will create a list with 5 anime names:
 <ion-list class="ion-padding">
    <ion-item >
      <ion-label>Dragon Ball</ion-label>
    </ion-item>
    <ion-item >
      <ion-label>Hunter Knights of the Zodiac</ion-label>
    </ion-item>
    <ion-item >
      <ion-label>Slam Dunk</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Pokemon</ion-label>
    </ion-item>
    <ion-item >
      <ion-label>Hunter X</ion-label>
    </ion-item>
  </ion-list>
7.	To improve the visual appearance, we will add some color to our list items using Ionic themes:
•	color="primary"
•	color="success"
•	color="warning"
•	color="danger"
•	color="secondary"

8.	After the first page is ready, we will add a second page to our app. To do this, use the following command: (First, it needs to stop the live page “ctrl + c”)

Ionic g page pages/TitleDetails

9.	After creating the second page, a new folder called pages will appear in the SRC folder, containing the necessary files for the new page. If we check the app-routing.module.ts file, we will see a new route for the details page. Rename “title-details” to “details”. 
Important: If there is an error in the title-details-routing.module.ts, go to title-details.page.ts and set standalone: false in the component metadata.

10.	On the second page,title-details. page.html, we will add a Go Back button inside the <ion-title> to return to the home page:

 <ion-buttons slot="start">
      <ion-back-button defaultHref="/home"></ion-back-button>
    </ion-buttons>

11.	In title-details. page.html, we will set up a card component, inside of the <ion-content>:

<ion-card>
  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
  <ion-card-header>
    <ion-card-title>Card Title</ion-card-title>
    <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
  </ion-card-header> 
  <ion-card-content>
    Here's a small text description for the card content. Nothing more, nothing less.
  </ion-card-content>
</ion-card>

12.	Now, save the images in the assets folder.

13.	Next, in home.page.ts, we will create a function to navigate to the second page when the user presses an item in the list. The function will also pass the title and image URL to the details page:

export class HomePage {
  constructor(private router: Router) {}
  goToDetails(title: string, imageUrl: string) {
    this.router.navigate(['/details'], {
      queryParams: { title: title, image: imageUrl },
    });
  }
}
Important: import { Router } from '@angular/router';

14.	In details.page.ts, create a function to receive the information and display it in the card:
export class TitleDetailsPage implements OnInit {
  title: string = '';
  imageUrl: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.title = params['title'];
      this.imageUrl = params['image'];
    });
  }
}
Important: import { ActivatedRoute } from '@angular/router';

15.	Finally, add the click event to each item in the list to pass the title and image to the second page(click)="goToDetails('Dragon Ball', 'assets/Goku.jpg')".
16.	
17.	Finally, in title-details.page.html add the variable [src]="imagePath" and  [alt]="title" in the img tag:
<img [src]="imagePath" [alt]="title" />

In the title tag:

 <ion-card-title >{{ title }}</ion-card-title>   
 
Demo Application Finished()





Additional information:
Extension for IONIC:
The Ionic Extension for Visual Studio Code (VS Code) is a powerful tool that enhances the development experience when working with Ionic projects. It provides a variety of features to streamline, improve your workflow, including Code Snippets, Ionic Commands, and Integrated Debugging and Live Server Preview, among others.
Run your project in Visual Studio Android, using these commands:
•	npm install @capacitor/core @capacitor/cli
•	npm install @capacitor/android
•	npx cap add android
•	ionic build
•	npx cap sync android
•	npx cap open android

Sources : 
Official Ionic Framework :
https://ionicframework.com/
YouTube videos :
https://www.youtube.com/watch?v=y_vwf15eADs
Ionic Academy:
https://ionicacademy.com/









<ion-list class="ion-padding">
    <ion-item color="success">
      <ion-label  routerLink="/details">Dragon Ball</ion-label>
    </ion-item>
    <ion-item color="warning">
      <ion-label>Hunter Knights of the Zodiac </ion-label>
    </ion-item>
    <ion-item color="primary">
      <ion-label>slam dunk</ion-label>
    </ion-item>
     
</ion-content>



