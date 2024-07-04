import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolDetallesComponent } from './rol-detalles.component';

describe('RolDetallesComponent', () => {
  let component: RolDetallesComponent;
  let fixture: ComponentFixture<RolDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RolDetallesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RolDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
