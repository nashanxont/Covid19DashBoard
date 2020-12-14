import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalrecoveredComponent } from './totalrecovered.component';

describe('TotalrecoveredComponent', () => {
  let component: TotalrecoveredComponent;
  let fixture: ComponentFixture<TotalrecoveredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalrecoveredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalrecoveredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
