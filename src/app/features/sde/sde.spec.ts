import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { SdeComponent } from './sde';

describe('SdeComponent', () => {
  let component: SdeComponent;
  let fixture: ComponentFixture<SdeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SdeComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
