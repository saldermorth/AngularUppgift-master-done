import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkidFormComponent } from './skid-form.component';

describe('SkidFormComponent', () => {
  let component: SkidFormComponent;
  let fixture: ComponentFixture<SkidFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkidFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkidFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
