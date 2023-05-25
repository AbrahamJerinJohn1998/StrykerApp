import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NavbarComponent } from './navbar.component';
import { FormsModule } from '@angular/forms';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
       imports:[HttpClientTestingModule,FormsModule],
      declarations: [ NavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should set isOpen to true when calling openPopup()', () => {
    component.openPopup();
    expect(component.isOpen).toBeTrue();
  });

  it('should set isOpen to false when calling closePopup()', () => {
    component.closePopup();
    expect(component.isOpen).toBeFalse();
  });

  
});
