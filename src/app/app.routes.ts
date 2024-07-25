import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  // {
  //   path: 'blog',
  //   loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
  // }
  { path: 'about', title: 'About', component: AboutComponent },
  // {
  //   path: '',
  //   redirectTo: 'about',
  //   pathMatch: 'full',
  // }
];
