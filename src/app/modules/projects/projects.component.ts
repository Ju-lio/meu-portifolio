import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Project } from 'src/app/model/project.model';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects!: Project[];
  destroy$: Subject<unknown> = new Subject();

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.projectsService
      .getProjects()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: response => {
          this.projects = response?.body ?? [];
        },
      });
  }
}
