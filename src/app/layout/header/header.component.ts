import {
  AfterViewInit,
  Component,
  ElementRef,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { APP_TITLE } from '../../shared/models/constants/base.constants';
import { STATIC_ROUTES } from '../../shared/models/constants/routes.constant';
import { tap, timer } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements AfterViewInit {
  headerEl = viewChild.required<ElementRef>('header');
  height = output<number>();
  title = signal(APP_TITLE);
  themeMode = signal<{ onSwitch: boolean; mode: 'light' | 'dark' }>({
    onSwitch: false,
    mode: 'light',
  });
  STATIC_ROUTES = signal(STATIC_ROUTES);
  ngAfterViewInit() {
    this.height.emit(this.headerEl().nativeElement.offsetHeight);
  }

  onSwitchThemeMode(): void {
    this.themeMode.update((item) => ({
      ...item,
      onSwitch: true,
    }));

    timer(0, 500) // 0 毫秒後立即觸發第一次，之後每 500 毫秒觸發一次
    .pipe(
      
      tap((val) => {
        if (val === 1) {
          this.themeMode.update((item) => ({
            ...item,
            mode: this.themeMode().mode === 'light' ? 'dark' : 'light',
          }));
          return;
        } else if (val === 2) {
          this.themeMode.update((item) => ({
            ...item,
            onSwitch: false,
          }));
        }
      })
    )
    .subscribe();
  }
}
