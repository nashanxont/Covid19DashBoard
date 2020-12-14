import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalrecoveryComponent } from './totalrecovery.component';

describe('TotalrecoveryComponent', () => {
  let component: TotalrecoveryComponent;
  let fixture: ComponentFixture<TotalrecoveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalrecoveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalrecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
