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
      {
        path: STATIC_ROUTES.POST.url,
        title: STATIC_ROUTES.POST.title,
        loadComponent: () =>
          import('./pages/post-page/post-page.component').then(
            (m) => m.PostPageComponent
          ),
      },
      {
        path: STATIC_ROUTES.TOPICS.url,
        title: STATIC_ROUTES.TOPICS.title,
        loadComponent: () =>
          import('./pages/topics-page/topics-page.component').then(
            (m) => m.TopicsPageComponent
          ),
      },
      {
        path: STATIC_ROUTES.LIST.url,
        title: STATIC_ROUTES.LIST.title,
        loadComponent: () =>
          import('./pages/list-page/list-page.component').then(
            (m) => m.ListPageComponent
          ),
      },
    ],
  },
];
