import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotaldeathComponent } from './totaldeath.component';

describe('TotaldeathComponent', () => {
  let component: TotaldeathComponent;
  let fixture: ComponentFixture<TotaldeathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotaldeathComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotaldeathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
