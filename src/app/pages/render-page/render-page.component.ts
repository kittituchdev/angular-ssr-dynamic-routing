import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AboutWorkComponent } from "../about-work/about-work.component";

@Component({
  selector: 'app-render-page',
  imports: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    AboutWorkComponent
  ],
  templateUrl: './render-page.component.html',
  styleUrl: './render-page.component.css'
})
export class RenderPageComponent {
  currentRoute: string | undefined = '';
  constructor(
    private readonly route: ActivatedRoute
  ) {
    console.log(this.route.snapshot.routeConfig?.path);
    this.currentRoute = this.route.snapshot.routeConfig?.path ?? 'not-found';
  }
}
