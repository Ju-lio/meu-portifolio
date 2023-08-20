import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailedComponent } from './project-detailed.component';

describe('ProjectDetailedComponent', () => {
  let component: ProjectDetailedComponent;
  let fixture: ComponentFixture<ProjectDetailedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectDetailedComponent],
    });
    fixture = TestBed.createComponent(ProjectDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
