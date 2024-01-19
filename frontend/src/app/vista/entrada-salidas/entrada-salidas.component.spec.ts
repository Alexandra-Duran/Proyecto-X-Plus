import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaSalidasComponent } from './entrada-salidas.component';

describe('EntradaSalidasComponent', () => {
  let component: EntradaSalidasComponent;
  let fixture: ComponentFixture<EntradaSalidasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntradaSalidasComponent]
    });
    fixture = TestBed.createComponent(EntradaSalidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
