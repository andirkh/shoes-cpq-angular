import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoesBottom } from './shoes-bottom';

describe('ShoesBottom', () => {
  let component: ShoesBottom;
  let fixture: ComponentFixture<ShoesBottom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoesBottom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoesBottom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
