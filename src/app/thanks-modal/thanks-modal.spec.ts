import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanksModal } from './thanks-modal';

describe('ThanksModal', () => {
  let component: ThanksModal;
  let fixture: ComponentFixture<ThanksModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThanksModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThanksModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
