import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sde } from './sde';

describe('Sde', () => {
  let component: Sde;
  let fixture: ComponentFixture<Sde>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sde]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sde);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
