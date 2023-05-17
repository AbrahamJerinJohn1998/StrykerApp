import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtoolsComponent } from './addtools.component';

describe('AddtoolsComponent', () => {
  let component: AddtoolsComponent;
  let fixture: ComponentFixture<AddtoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtoolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
