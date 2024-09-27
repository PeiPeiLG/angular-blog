//我的LayoutComponent 如下 為甚麼 我的layout works!123 顯示了兩個

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <p>layout works!123</p>
    <router-outlet />
  `,
  styles: ``,
})
export class LayoutComponent {}
