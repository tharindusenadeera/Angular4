import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontComponentComponent } from './front-component.component';

describe('FrontComponentComponent', () => {
  let component: FrontComponentComponent;
  let fixture: ComponentFixture<FrontComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
