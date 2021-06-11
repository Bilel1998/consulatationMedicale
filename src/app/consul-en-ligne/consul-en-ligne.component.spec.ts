import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulEnLigneComponent } from './consul-en-ligne.component';

describe('ConsulEnLigneComponent', () => {
  let component: ConsulEnLigneComponent;
  let fixture: ComponentFixture<ConsulEnLigneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulEnLigneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulEnLigneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
