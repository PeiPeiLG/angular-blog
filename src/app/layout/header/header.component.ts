import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  inject,
  output,
  PLATFORM_ID,
  Renderer2,
  signal,
  viewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { APP_TITLE } from '../../shared/models/constants/base.constants';
import { STATIC_ROUTES } from '../../shared/models/constants/routes.constant';
import { tap, timer } from 'rxjs';
import { GET_LOCAL_STORAGE, SET_LOCAL_STORAGE } from '../../shared/models/constants/browser-storage';
import { isPlatformBrowser } from '@angular/common';
// 主題模式類型
type ThemeModeType = 'light' | 'dark';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements AfterViewInit {
  private renderer = inject(Renderer2);

  headerEl = viewChild.required<ElementRef>('header');
  height = output<number>();
  title = signal(APP_TITLE);

  getLocalStorage = new GET_LOCAL_STORAGE();
  setLocalStorage = new SET_LOCAL_STORAGE();

  themeSwitch = signal(false);
  themeMode = signal<ThemeModeType>('light');

  STATIC_ROUTES = signal(STATIC_ROUTES);

  ngAfterViewInit() {
    this.height.emit(this.headerEl().nativeElement.offsetHeight);
    if (isPlatformBrowser(this.platformId)) {
      this.themeMode.set(this.getLocalStorage.theme);
      this.setHtmlThemeClass(this.getLocalStorage.theme);
    }
  }

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  // 切換主題模式
  onSwitchThemeMode(): void {
    this.themeSwitch.update((item) => !item);
    timer(0, 500)
      .pipe(
        tap((val) => {
          if (val === 1) {
            this.themeMode.update((item) => {
              const newTheme = item === 'light' ? 'dark' : 'light';
              this.setHtmlThemeClass(newTheme);
              this.setLocalStorage.theme = newTheme;
              return newTheme;
            });
          }
          if (val === 2) {
            this.themeSwitch.update((item) => !item);
          }
        })
      )
      .subscribe();
  }

  // 設置 HTML 主題模式 class
  setHtmlThemeClass(themeMode: ThemeModeType): void {
    this.renderer[themeMode === 'dark' ? 'addClass' : 'removeClass'](
      document.documentElement,
      'dark'
    );
  }
}
