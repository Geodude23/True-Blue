import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrueblueAddEditComponent } from './trueblue-add-edit.component';

describe('TrueblueAddEditComponent', () => {
  let component: TrueblueAddEditComponent;
  let fixture: ComponentFixture<TrueblueAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrueblueAddEditComponent]
    });
    fixture = TestBed.createComponent(TrueblueAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
