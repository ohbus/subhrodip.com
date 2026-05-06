import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cde } from './cde';

describe('Cde', () => {
  let component: Cde;
  let fixture: ComponentFixture<Cde>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cde]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cde);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
