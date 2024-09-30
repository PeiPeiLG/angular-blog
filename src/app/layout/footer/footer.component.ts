import {
  AfterViewInit,
  Component,
  ElementRef,
  output,
  viewChild,
} from '@angular/core';

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
  ngAfterViewInit() {
    this.height.emit(this.footerEl().nativeElement.offsetHeight);
  }
}
