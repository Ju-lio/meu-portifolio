import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Skill } from 'src/app/model/skill.model';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills!: Skill[];
  destroy$: Subject<unknown> = new Subject();

  constructor(private skillsService: SkillsService) {}

  ngOnInit(): void {
    this.getSkills();
  }

  getSkills() {
    this.skillsService
      .getSkills()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: response => {
          this.skills = response?.body ?? [];
        },
      });
  }
}
