import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { marked, MarkedOptions } from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css'; // 引入 GitHub 風格的 highlight.js 樣式

interface CardModel {
  title: string;
  description: string;
  image: string;
  postUrl: string;
  createdAt: string; // yyyy-MM-dd
  tags: { name: string; url: string }[];
}
@Component({
  selector: 'app-index-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './index-page.component.html',
  styleUrl: './index-page.component.scss',
})
export class IndexPageComponent {
  // 配置 marked 庫，包括語法高亮的設置
  constructor() {
    marked.setOptions({
      highlight: function (code: any, lang: any) {
        const highlightedCode = lang && hljs.getLanguage(lang)
        ? hljs.highlight(lang, code).value
        : hljs.highlightAuto(code).value;
      return `<pre><code class="hljs ${lang}">${highlightedCode}</code></pre>`;
      },
      langPrefix: 'hljs ', // 使用 highlight.js 樣式的前綴
    } as MarkedOptions);
  }
  cards = signal<CardModel[]>([
    {
      title: '職涯旅程',
      description:
        '## 畢業即失業?\n2017年6月我大學畢業了，大學畢業其實是一件很可怕的事情，以前國中畢業就接著上高中，高中畢業接著上大學，好像一切都被安排的穩妥，但大學畢業後不給自己想後路就真的是 「 畢業即失業 」',
      image: 'https://fakeimg.pl/260x160/',
      postUrl: '/post/1',
      createdAt: '2021-01-01',
      tags: [
        { name: '職涯', url: '/topics/1' },
        { name: '職涯', url: '/topics/1' },
        { name: '職涯', url: '/topics/1' },
      ],
    },
    {
      title: '職涯旅程',
      description: '這是一個關於我的職涯旅程',
      image: 'https://fakeimg.pl/260x160/',
      postUrl: '/post/1',
      createdAt: '2021-01-01',
      tags: [{ name: '職涯', url: '/topics/1' }],
    },
    {
      title: '職涯旅程',
      description: '這是一個關於我的職涯旅程',
      image: 'https://fakeimg.pl/260x160/',
      postUrl: '/post/1',
      createdAt: '2021-01-01',
      tags: [{ name: '職涯', url: '/topics/1' }],
    },
  ]);
  markdownContent = signal(`
# 欢迎使用 Markdown Viewer
這是使用 **Angular 18** 的示例。
~~~typescript
console.log('Hello, world!');
~~~
- 列表項 1
- 列表項 2`
  );
  htmlContent = computed(() => marked(this.markdownContent()));
}
