import { Component, computed, Inject, PLATFORM_ID, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { isPlatformBrowser } from '@angular/common';
const Comments = [HeaderComponent, FooterComponent];
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, Comments],
  template: `
    <div class="w-full max-w-7xl mx-auto px-3">
      <app-header (height)="setHeaderHeight($event)" />
      <main [style.height]="mainHeight()">
        <router-outlet />
      </main>
      <app-footer (height)="setFooterHeight($event)" />
    </div>
  `,
  styles: ``,
})
export class LayoutComponent {
  headerHeight = signal<number>(0);
  footerHeight = signal<number>(0);
  mainHeight = computed(() => {
    if (isPlatformBrowser(this.platformId)) {
      return `calc(${window.innerHeight}px - ${this.headerHeight() + this.footerHeight()}px)`;
    } else {
      return `calc(100vh - ${this.headerHeight() + this.footerHeight()}px)`;
    }
  });

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  setHeaderHeight(e: number): void {
    this.headerHeight.set(e);
  }
  setFooterHeight(e: number): void {
    this.footerHeight.set(e);
  }
}
