import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaAprendizsComponent } from './ficha-aprendizs.component';

describe('FichaAprendizsComponent', () => {
  let component: FichaAprendizsComponent;
  let fixture: ComponentFixture<FichaAprendizsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FichaAprendizsComponent]
    });
    fixture = TestBed.createComponent(FichaAprendizsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
