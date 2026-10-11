import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { CdeComponent } from './cde';

describe('CdeComponent', () => {
  let component: CdeComponent;
  let fixture: ComponentFixture<CdeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdeComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
