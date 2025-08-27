import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoesSide } from './shoes-side';

describe('ShoesSide', () => {
  let component: ShoesSide;
  let fixture: ComponentFixture<ShoesSide>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoesSide]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoesSide);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
