import {
  AfterViewInit,
  Component,
  ElementRef,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { APP_TITLE } from '../../shared/models/constants/base.constants';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements AfterViewInit {
  footerEl = viewChild.required<ElementRef>('footer');
  height = output<number>();
  year = signal(new Date().getFullYear());
  title = signal(APP_TITLE);
  ngAfterViewInit() {
    this.height.emit(this.footerEl().nativeElement.offsetHeight);
  }
}
