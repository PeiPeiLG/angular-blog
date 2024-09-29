//我的LayoutComponent 如下 為甚麼 我的layout works!123 顯示了兩個

import { AfterViewInit, Component, ElementRef, inject, PLATFORM_ID, ViewChild, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { isPlatformBrowser } from '@angular/common';
const Comments = [HeaderComponent, FooterComponent];
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, Comments],
  template: `
    <app-header  />
    <header #header>123</header>
    <main #main>
      <router-outlet />
    </main>
    <app-footer #footer />
  `,
  styles: ``,
})
export class LayoutComponent implements AfterViewInit {
  private platformId = inject(PLATFORM_ID);
  headerEl = viewChild(HeaderComponent);
  mainEl = viewChild<ElementRef>('main');
  footerEl = viewChild<ElementRef>('footer');
  ngAfterViewInit() {
    if(isPlatformBrowser(this.platformId)){
      console.log(this.headerEl()?.elementRef);
      // this.setMainHeight();

      window.addEventListener('resize', () => console.log(1));
    }

  }

  // setMainHeight() {
  //   const headerElement = this.headerEl();
  //   const footerElement = this.footerEl();
  //   const mainElement = this.mainEl();
  //   if (!!headerElement && !!footerElement && !!mainElement) {
  //     const headerHeight = headerElement.nativeElement.offsetHeight;
  //     const footerHeight = footerElement.nativeElement.offsetHeight;
  //     mainElement.nativeElement.style.height = `calc(100vh - ${
  //       headerHeight + footerHeight
  //     }px)`;
  //   }
  // }
}
