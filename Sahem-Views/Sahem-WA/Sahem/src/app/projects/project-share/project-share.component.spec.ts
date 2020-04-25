import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectShareComponent } from './project-share.component';

describe('ProjectShareComponent', () => {
  let component: ProjectShareComponent;
  let fixture: ComponentFixture<ProjectShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
