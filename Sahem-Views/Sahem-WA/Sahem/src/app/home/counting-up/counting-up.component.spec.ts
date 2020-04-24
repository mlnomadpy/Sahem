import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountingUpComponent } from './counting-up.component';

describe('CountingUpComponent', () => {
  let component: CountingUpComponent;
  let fixture: ComponentFixture<CountingUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountingUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountingUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
