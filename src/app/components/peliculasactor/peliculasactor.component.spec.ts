import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasactorComponent } from './peliculasactor.component';

describe('PeliculasactorComponent', () => {
  let component: PeliculasactorComponent;
  let fixture: ComponentFixture<PeliculasactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculasactorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeliculasactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
