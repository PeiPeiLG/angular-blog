import {
  AfterViewInit,
  Component,
  ElementRef,
  output,
  signal,
  viewChild
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { APP_TITLE } from '../../shared/models/constants/base.constants';
import { STATIC_ROUTES } from '../../shared/models/constants/routes.constant';

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
  STATIC_ROUTES = signal(STATIC_ROUTES);
  ngAfterViewInit() {
    this.height.emit(this.headerEl().nativeElement.offsetHeight);
  }
}
