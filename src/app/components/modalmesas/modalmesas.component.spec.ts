import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalmesasComponent } from './modalmesas.component';

describe('ModalmesasComponent', () => {
  let component: ModalmesasComponent;
  let fixture: ComponentFixture<ModalmesasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalmesasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalmesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
