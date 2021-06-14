import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMesasComponent } from './list-mesas.component';

describe('ListMesasComponent', () => {
  let component: ListMesasComponent;
  let fixture: ComponentFixture<ListMesasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMesasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
