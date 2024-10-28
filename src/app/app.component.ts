import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import hljs from 'highlight.js';
import { marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: ` <router-outlet /> `,
})
export class AppComponent {
  constructor() {
    this.setMarked();
  }

  setMarked(): void {
    const renderer = new marked.Renderer();
    renderer.image = ({ href, title, text }) => {
      // 調整圖片路徑
      if (href && href.startsWith('./file/')) {
        href = href.replace('./file/', 'post/teat/file/');
      }
      // 返回圖片的 HTML 字符串
      return `<img src="${href}" alt="${text}"${
        title ? ` title="${title}"` : ''
      }>`;
    };
    marked.use(
      markedHighlight({
        emptyLangClass: 'hljs',
        langPrefix: 'hljs language-',
        highlight(code, lang) {
          return lang && hljs.getLanguage(lang)
            ? hljs.highlight(code, { language: lang }).value
            : hljs.highlightAuto(code).value;
        },
      })
    );
  }
}
