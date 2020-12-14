import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalconfirmedComponent } from './totalconfirmed.component';

describe('TotalconfirmedComponent', () => {
  let component: TotalconfirmedComponent;
  let fixture: ComponentFixture<TotalconfirmedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalconfirmedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalconfirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
