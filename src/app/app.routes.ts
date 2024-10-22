import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { STATIC_ROUTES } from './shared/models/constants/routes.constant';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: STATIC_ROUTES.INDEX.url,
        title: STATIC_ROUTES.INDEX.title,
        loadComponent: () =>
          import('./pages/index-page/index-page.component').then(
            (m) => m.IndexPageComponent
          ),
      },
      {
        path: STATIC_ROUTES.ABOUT.url,
        title: STATIC_ROUTES.ABOUT.title,
        loadComponent: () =>
          import('./pages/about-page/about-page.component').then(
            (m) => m.AboutPageComponent
          ),
      },
    ],
  },
];
