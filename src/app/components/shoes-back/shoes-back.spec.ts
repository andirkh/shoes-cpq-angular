import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoesBack } from './shoes-back';

describe('ShoesBack', () => {
  let component: ShoesBack;
  let fixture: ComponentFixture<ShoesBack>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoesBack]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoesBack);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
