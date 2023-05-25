import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SidebarComponent } from './sidebar.component';
import { FormsModule } from '@angular/forms';
import { ViewtoolsComponent } from '../viewtools/viewtools.component';
import { Router } from '@angular/router';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
       imports:[HttpClientTestingModule,FormsModule],
      declarations: [ SidebarComponent,ViewtoolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should navigate to the default route', () => {
    spyOn(router, 'navigate'); // Spy on the navigate method of the router

    component.powerTools();

    expect(router.navigate).toHaveBeenCalledWith(['']);
  });

  it('should navigate to the "/view" route', () => {
    spyOn(router, 'navigate'); // Spy on the navigate method of the router

    component.powerToolset();

    expect(router.navigate).toHaveBeenCalledWith(['/view']);
  });
});
