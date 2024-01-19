import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoElementosComponent } from './tipo-elementos.component';

describe('TipoElementosComponent', () => {
  let component: TipoElementosComponent;
  let fixture: ComponentFixture<TipoElementosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipoElementosComponent]
    });
    fixture = TestBed.createComponent(TipoElementosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
