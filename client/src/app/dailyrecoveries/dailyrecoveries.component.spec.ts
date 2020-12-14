import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyrecoveriesComponent } from './dailyrecoveries.component';

describe('DailyrecoveriesComponent', () => {
  let component: DailyrecoveriesComponent;
  let fixture: ComponentFixture<DailyrecoveriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyrecoveriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyrecoveriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
