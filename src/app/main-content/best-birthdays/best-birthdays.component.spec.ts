import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestBirthdaysComponent } from './best-birthdays.component';

describe('BestBirthdaysComponent', () => {
  let component: BestBirthdaysComponent;
  let fixture: ComponentFixture<BestBirthdaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestBirthdaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestBirthdaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
