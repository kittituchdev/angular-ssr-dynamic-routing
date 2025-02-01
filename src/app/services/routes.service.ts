import { Injectable } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';
import { RenderPageComponent } from '../pages/render-page/render-page.component';
import { NotFoundComponent } from '../pages/not-found/not-found.component';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor(
    private readonly router: Router
  ) { }

  /**
   * Initialize routes
   */
  async init() {
    const routesResponse = await this.getAllRoutes();
    const newRoutes: Routes = routesResponse.map((route: any) => {
      return {
        path: route.path,
        component: RenderPageComponent
      } as Route
    })
    this.router.resetConfig([
      ...newRoutes,
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]);
  }

  /**
   * Get all routes
   * @returns Promise<any[]>
   */
  getAllRoutes(): Promise<any[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            path: 'home'
          },
          {
            path: 'about'
          },
          {
            path: 'about/work'
          },
          {
            path: 'contact'
          }
        ])
      }, 500)
    })
  }
}
