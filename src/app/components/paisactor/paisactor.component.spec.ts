import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisactorComponent } from './paisactor.component';

describe('PaisactorComponent', () => {
  let component: PaisactorComponent;
  let fixture: ComponentFixture<PaisactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisactorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaisactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
