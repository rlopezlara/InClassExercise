<h1>Introduction To Ionic Framework:</h1><br/>
Ionic is an open-source UI toolkit for building performant, high-quality mobile apps using web technologies — HTML, CSS, and JavaScript — with integrations for popular frameworks like Angular, React, and Vue. <br/> More explanation about Ionic in this YouTube video (7.24 minutes)<a href="https://www.youtube.com/watch?v=PLM9coCCIRY" target="_blank">Here</a>


<h2>About the Demo Application:</h2><br/>
In this tutorial, we will create a simple application with two pages. On the first page, we will display an image and a list of 5 items. When the user presses one of the items, we will navigate to the second page, where a card with an image related to the title will be displayed.

<h3>Instructions:</h3><br/>
1.	Open the terminal in VS Code and run the following command to install Ionic dependencies: 

	 npm install -g @ionic/cli 
<br/>
2.	To create an Ionic project, run the following command. This will start the project and ask for the project name, type (blank), and framework to use (Angular, React, or Vue). In our case, we will use Angular:

	ionic start myDemoApp blank –type=angular 
<br/>
3.	For this demo, we will use ngModule components. After running the command, you will be asked if you want to join the Ionic community. You can type N to skip this.

4.	Once the project is set up, navigate to the project directory using:

		  cd myAppDemo
  <br/>
	To run the live page, use the following command:<br/>
		
  		  ionic serve
 
This will automatically open localhost in your browser. To visualize the app in mobile view, right-click the page, inspect the source, and enable the "Toggle Device Toolbar".<br/>
 
<h3>Coding Part:</h3><br/>
5.	 Go to the home folder and open home.page.html. We will first add an image to our page. We will delete the default content inside the ion-content tag and update the title to DemoApp.<br/>

	<ion-content class="ion-padding">
	<img alt="JS" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" />
	</ion-content>

	
 <br/>
6.	Inside our content, we will create a list with 5 anime names:<br/>

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
	  </ion-list>"

 <br/>
  
7.	To improve the visual appearance, we will add some color to our list items using Ionic themes:<br/>
<li>color="primary"</li>
<li>color="success"</li>
<li>color="warning"</li>
<li>color="danger"</li>
<li>color="secondary"</li>
<br/>
8.	After the first page is ready, we will add a second page to our app. To do this, use the following command: (First, it needs to stop the live page “ctrl + c”)

		Ionic g page pages/TitleDetails
<br/>
9.	After creating the second page, a new folder called pages will appear in the SRC folder, containing the necessary files for the new page. If we check the app-routing.module.ts file, we will see a new route for the details page. Rename “title-details” to “details”.
    
<h4>Important:</h4>
If there is an error in the title-details-routing.module.ts, go to title-details.page.ts and set "standalone: false" in the component metadata.<br/>

10.	On the second page, title-details.page.html, we will add a Go Back button inside the "ion-title" to return to the home page:
<br/>
	  	
	 	<ion-buttons slot="start">
	 	<ion-back-button defaultHref="/home"></ion-back-button>
	 	</ion-buttons>
 <br/>
 
11.	In title-details.page.html, we will set up a card component, inside of the ion-content:<br/>
 
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


<br/>
12.	Now, save the images in the assets folder. <a href="https://drive.google.com/file/d/14iyv0dbGAoO74eym30Wj-7vz04WSRbBi/view?usp=sharing" target="_blank">Here</a> is the list of images, download them and copy all images into the Assets folder.<br/>

13.	Next, in home.page.ts, we will create a function to navigate to the second page when the user presses an item in the list. The function will also pass the title and image URL to the details page:

		export class HomePage {
 		 constructor(private router: Router) {}
 		 goToDetails(title: string, imagePath: string) {
   		 this.router.navigate(['/details'], {
     		 queryParams: { title: title, image: imagePath },
    		});
 		 }
		} 
 
 <br/>
<b>Important: import { Router } from '@angular/router';</b><br/>

14.	In details.page.ts, create a function to receive the information and display it in the card:<br/>
	 	
		export class TitleDetailsPage implements OnInit {
  		title: string = '';
  		imagePath: string = '';

  		constructor(private route: ActivatedRoute) {}

  		ngOnInit() {
    	this.route.queryParams.subscribe((params) => {
      	this.title = params['title'];
      	this.imagePath = params['image'];
    	});
  		}
		}
 
<br/>
<b>Important: import { ActivatedRoute } from '@angular/router';</b><br/>

15.	Finally, add the click event to each item in the list to pass the title and image to the second page(click)="goToDetails('Dragon Ball', 'assets/Goku.jpg')".
    <br/>
16.	Finally, in title-details.page.html add the variable [src]="imagePath" and  [alt]="title" in the img tag:<br/>
		  
		<img [src]="imagePath" [alt]="title" />
	 
<br/>
In the title tag:
<br/><br/>
	
 		<ion-card-title >{{ title }}</ion-card-title>
	
 <br/>
<h3>Demo Application Finished()</h3>
<br/>
<h2>Additional information:</h2><br/>

<b>Extension for IONIC:</b>
<br/>
The Ionic Extension for Visual Studio Code (VS Code) is a powerful tool that enhances the development experience when working with Ionic projects. It provides a variety of features to streamline, improve your workflow, including Code Snippets, Ionic Commands, and Integrated Debugging and Live Server Preview, among others.
<br/>
<h4>Run your project in Visual Studio Android, using these commands:</h4>
<li>npm install @capacitor/core @capacitor/cli</li>
<li>npm install @capacitor/android</li>
<li>npx cap add android</li>
<li>ionic build</li>
<li>npx cap sync android</li>
<li>npx cap open android</li>
<br/>
<h3>Sources : </h3>
Official Ionic Framework :<br/>
https://ionicframework.com/<br/>
YouTube videos :<br/>
https://www.youtube.com/watch?v=y_vwf15eADs<br/>
Ionic Academy:<br/>
https://ionicacademy.com/<br/>









 



