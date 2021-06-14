import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMesasComponent } from './detail-mesas.component';

describe('DetailMesasComponent', () => {
  let component: DetailMesasComponent;
  let fixture: ComponentFixture<DetailMesasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailMesasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
