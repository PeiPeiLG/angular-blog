import { Component, computed, signal } from '@angular/core';
interface Skill {
  key: string;
  count: number;
}
@Component({
  selector: 'app-topics-page',
  standalone: true,
  imports: [],
  templateUrl: './topics-page.component.html',
  styleUrl: './topics-page.component.scss'
})
export class TopicsPageComponent {
  skillTags = signal<Skill[]>([
    { key: 'HTML', count: 4 },
    { key: 'CSS', count: 6 },
    { key: 'JavaScript', count: 8 },
    { key: 'Angular', count: 10 },
    { key: 'TypeScript', count: 9 },
    { key: 'jQuety', count: 3 },
  ]);
  sortSkillTags = computed(() =>
    this.skillTags().sort((a, b) => b.count - a.count)
  );
  skillTagsRows = computed(() => {
    const result: Skill[][] = [];
    let start = 0;
    let rowLength = 1;

    const sortedSkills = this.sortSkillTags();

    while (start < sortedSkills.length) {
      result.push(sortedSkills.slice(start, start + rowLength));
      start += rowLength;
      rowLength++;
    }

    return result;
  });
}
