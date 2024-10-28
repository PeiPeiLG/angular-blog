import { Component, computed, input, signal } from '@angular/core';
import { marked } from 'marked';
@Component({
  selector: 'app-post-page',
  standalone: true,
  imports: [],
  templateUrl: './post-page.component.html',
  styleUrl: './post-page.component.scss',
})
export class PostPageComponent {
  date = input();
  id = input();
  htmlContent = computed(() => marked(this.markdownContent()));


  markdownContent = signal(`
# 請開始你的表演\n![樓梯](post/career-journey/file/cover.jpg)\n![小橘子](post/career-journey/file/SLRd8iy.jpg)\n~~~ts\nconst a:string = 'HI';\n~~~\n
`);

}
