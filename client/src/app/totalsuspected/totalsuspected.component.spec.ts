import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalsuspectedComponent } from './totalsuspected.component';

describe('TotalsuspectedComponent', () => {
  let component: TotalsuspectedComponent;
  let fixture: ComponentFixture<TotalsuspectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalsuspectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalsuspectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
