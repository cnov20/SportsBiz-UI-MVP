import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryInterfaceComponent } from './query-interface.component';

describe('QueryInterfaceComponent', () => {
  let component: QueryInterfaceComponent;
  let fixture: ComponentFixture<QueryInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryInterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
