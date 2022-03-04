import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkidpaketComponent } from './skidpaket.component';

describe('SkidpaketComponent', () => {
  let component: SkidpaketComponent;
  let fixture: ComponentFixture<SkidpaketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkidpaketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkidpaketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
