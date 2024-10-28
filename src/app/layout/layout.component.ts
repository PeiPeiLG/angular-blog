import {
  Component,
  computed,
  effect,
  Inject,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { CategoriesComponent } from '../shared/sidebar-widgets/categories/categories.component';
import { TagsComponent } from '../shared/sidebar-widgets/tags/tags.component';
import { RecentPostsComponent } from '../shared/sidebar-widgets/recent-posts/recent-posts.component';
import { ArchiveComponent } from '../shared/sidebar-widgets/archive/archive.component';
const Comments = [
  HeaderComponent,
  FooterComponent,
  CategoriesComponent,
  TagsComponent,
  RecentPostsComponent,
  ArchiveComponent,
];
const MaterialModule = [MatButtonModule, MatMenuModule];
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, CommonModule, Comments, MaterialModule],
  template: `
    <div class="w-full max-w-6xl mx-auto px-3">
      <app-header (height)="setHeaderHeight($event)" />
      <main
        [style.min-height]="mainHeight()"
        class="grid md:grid-cols-12 gap-5 relative"
      >
        <section class="md:col-span-9 shadow-lg rounded-xl shadow-rose-500/50 flex flex-col mb-10">
          <div class="mb-auto">
            <router-outlet />
          </div>
          <!-- <div class="h-4 rounded-b-xl bg-rose-500"></div> -->
        </section>
        <section class="hidden md:block md:col-span-3">
          <div class="bg-red-50 dark:bg-shark-600 rounded-xl hidden md:block">
            <ng-template *ngTemplateOutlet="sidebarWidgets"></ng-template>
          </div>
        </section>
      </main>
      <app-footer (height)="setFooterHeight($event)" />
    </div>
    <div
      class="absolute md:hidden right-7 grid gap-2"
      [class.fixed-important]="scrollPosition() > this.headerHeight() + 15"
      [style.top]="fixedHeight + 'px'"
    >
      @if(scrollPosition()> this.headerHeight() + 15){
      <button mat-mini-fab (click)="scrollToTop()">
        <i class="fa-solid fa-chevron-up"></i>
      </button>
      }
      <button mat-mini-fab [matMenuTriggerFor]="beforeMenu">
        <i class="fa-solid fa-bars text-xl"></i>
      </button>
      <mat-menu #beforeMenu="matMenu" xPosition="before">
        <div class="w-64">
          <ng-template *ngTemplateOutlet="sidebarWidgets" />
        </div>
      </mat-menu>
    </div>

    <ng-template #sidebarWidgets>
      <ul class="p-2 grid grid-cols-1 gap-2">
        <li>
          <button
            class="bg-rose-200 dark:bg-shark-500 dark:md:bg-opacity-50 w-full p-2 rounded-xl text-left hover:bg-rose-300 dark:hover:bg-shark-300"
            type="button"
          >
            <i
              class="fa-solid fa-magnifying-glass mr-2 text-rose-800 dark:text-rose-600"
            ></i>
            <span>Quick Search</span>
          </button>
        </li>
        <li
          class="bg-rose-200 dark:bg-shark-500 dark:md:bg-opacity-50 p-2 rounded-xl"
        >
          <app-categories />
        </li>
        <li
          class="bg-rose-200 dark:bg-shark-500 dark:md:bg-opacity-50 p-2 rounded-xl"
        >
          <app-tags />
        </li>
        <li
          class="bg-rose-200 dark:bg-shark-500 dark:md:bg-opacity-50 p-2 rounded-xl"
        >
          <app-recent-posts />
        </li>
        <li
          class="bg-rose-200 dark:bg-shark-500 dark:md:bg-opacity-50 p-2 rounded-xl"
        >
          <app-archive />
        </li>
        @if(scrollPosition()> this.headerHeight() + 15){
        <li class="hidden md:block">
          <button
            (click)="scrollToTop()"
            class="bg-rose-200 dark:bg-shark-500 dark:md:bg-opacity-50 w-full p-2 rounded-xl hover:bg-rose-300 dark:hover:bg-shark-500"
            type="button"
          >
            <i
              class="fa-solid fa-chevron-up text-rose-800 dark:text-rose-600"
            ></i>
          </button>
        </li>
        }
      </ul>
    </ng-template>
  `,
  styles: `
  .fixed-important{
    @apply fixed #{!important}
  }
  `,
})
export class LayoutComponent {
  headerHeight = signal<number>(0);
  footerHeight = signal<number>(0);
  mainHeight = computed(() => {
    if (isPlatformBrowser(this.platformId)) {
      return `calc(${window.innerHeight}px - ${
        this.headerHeight() + this.footerHeight()
      }px)`;
    } else {
      return `calc(100vh - ${this.headerHeight() + this.footerHeight()}px)`;
    }
  });

  // 使用 signal 來追踪滾動位置
  scrollPosition = signal(0);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
        // 當 component 初始化時綁定 scroll 事件
        window.addEventListener('scroll', this.onScroll.bind(this));
      }
    });
  }
  // 滾動事件處理程序
  onScroll() {
    // 更新 signal 滾動位置
    this.scrollPosition.set(window.scrollY);
  }

  // 滾動至頂端的函數
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // 平滑滾動效果
    });
  }

  setHeaderHeight(e: number): void {
    this.headerHeight.set(e);
  }
  setFooterHeight(e: number): void {
    this.footerHeight.set(e);
  }

  get fixedHeight() {
    if (this.scrollPosition() > this.headerHeight() + 15) {
      return 15;
    }
    return this.headerHeight() + 15;
  }
}
