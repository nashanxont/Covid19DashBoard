import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalreportComponent } from './totalreport.component';

describe('TotalreportComponent', () => {
  let component: TotalreportComponent;
  let fixture: ComponentFixture<TotalreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
