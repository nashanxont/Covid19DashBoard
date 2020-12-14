import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecovertyanddeathratesComponent } from './recovertyanddeathrates.component';

describe('RecovertyanddeathratesComponent', () => {
  let component: RecovertyanddeathratesComponent;
  let fixture: ComponentFixture<RecovertyanddeathratesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecovertyanddeathratesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecovertyanddeathratesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
