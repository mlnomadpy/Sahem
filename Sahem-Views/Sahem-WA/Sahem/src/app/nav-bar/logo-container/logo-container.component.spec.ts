import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoContainerComponent } from './logo-container.component';

describe('LogoContainerComponent', () => {
  let component: LogoContainerComponent;
  let fixture: ComponentFixture<LogoContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
