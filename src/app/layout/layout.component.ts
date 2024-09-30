import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
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
  mainHeight = computed(
    () => `calc(100vh - ${this.headerHeight() + this.footerHeight()}px`
  );

  setHeaderHeight(e: number): void {
    this.headerHeight.set(e);
  }
  setFooterHeight(e: number): void {
    this.footerHeight.set(e);
  }
}
