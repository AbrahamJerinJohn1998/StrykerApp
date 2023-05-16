import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtoolsComponent } from './viewtools.component';

describe('ViewtoolsComponent', () => {
  let component: ViewtoolsComponent;
  let fixture: ComponentFixture<ViewtoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewtoolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewtoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
