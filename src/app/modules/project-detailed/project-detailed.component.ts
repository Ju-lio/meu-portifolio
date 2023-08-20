import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Project } from 'src/app/model/project.model';
import { Skill } from 'src/app/model/skill.model';
import { TextAttributes } from 'src/app/model/text-attributes.model';
import { ProjectsService } from 'src/app/services/projects.service';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-project-detailed',
  templateUrl: './project-detailed.component.html',
  styleUrls: ['./project-detailed.component.css'],
})
export class ProjectDetailedComponent implements OnInit {
  activatedProject!: Project;
  skills!: Skill[];
  destroy$: Subject<unknown> = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private skillsService: SkillsService,
    private projectsService: ProjectsService
  ) {}

  ngOnInit(): void {
    this.getProject();
  }

  getProject(): void {
    const projectId = this.activatedRoute.snapshot.params['id'];

    this.projectsService
      .getProjects()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: response => {
          const projects = response?.body ?? [];

          this.activatedProject =
            projects.find(project => project.id === projectId) ??
            ({} as Project);

          this.getProjectSkills(this.activatedProject.skills);
        },
      });
  }

  getProjectSkills(skillsIds: string[]): void {
    this.skillsService
      .getSkills()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: response => {
          const skills = response?.body ?? [];

          this.skills =
            skills.filter(skill => skillsIds.includes(skill.id)) ??
            ([] as Skill[]);
        },
      });
  }

  getTextAtributte(text: string, show: boolean) {
    const textAttributes: TextAttributes = {
      text: text,
      show: show,
    };
    return textAttributes;
  }
}
