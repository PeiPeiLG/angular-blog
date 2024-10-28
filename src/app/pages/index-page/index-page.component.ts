import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';


interface CardModel {
  id: string;
  title: string;
  cover: string;
  date: string; // yyyy-MM-dd
  tags: { name: string; url: string }[];
  content: string;
}
@Component({
  selector: 'app-index-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './index-page.component.html',
  styleUrl: './index-page.component.scss',
})
export class IndexPageComponent {
  cards = signal<CardModel[]>([
    {
      id: 'career-journey',
      title: '職涯旅程',
      cover: 'file/cover.jpg',
      date: '2024-01-01',
      tags: [{ name: '職涯', url: '/tag/職涯' }],
      content: '這是一個關於我的職涯旅程',
    },
    {
      id: 'career-journey',
      title: '職涯旅程',
      cover: 'file/cover.jpg',
      date: '2024-01-01',
      tags: [{ name: '職涯', url: '/tag/職涯' }],
      content: '這是一個關於我的職涯旅程',
    },
  ]);
}
