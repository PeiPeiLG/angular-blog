import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { APP_TITLE } from './shared/models/constants/base.constants';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <router-outlet />
  `,
})
export class AppComponent {
}
