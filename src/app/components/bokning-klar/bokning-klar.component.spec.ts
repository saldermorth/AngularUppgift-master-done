import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BokningKlarComponent } from './bokning-klar.component';

describe('BokningKlarComponent', () => {
  let component: BokningKlarComponent;
  let fixture: ComponentFixture<BokningKlarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BokningKlarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BokningKlarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
