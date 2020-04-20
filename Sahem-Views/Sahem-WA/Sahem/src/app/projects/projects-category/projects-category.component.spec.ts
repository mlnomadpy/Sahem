import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsCategoryComponent } from './projects-category.component';

describe('ProjectsCategoryComponent', () => {
  let component: ProjectsCategoryComponent;
  let fixture: ComponentFixture<ProjectsCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
