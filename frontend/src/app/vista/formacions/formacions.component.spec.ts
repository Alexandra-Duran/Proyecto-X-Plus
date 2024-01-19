import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormacionsComponent } from './formacions.component';

describe('FormacionsComponent', () => {
  let component: FormacionsComponent;
  let fixture: ComponentFixture<FormacionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormacionsComponent]
    });
    fixture = TestBed.createComponent(FormacionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
