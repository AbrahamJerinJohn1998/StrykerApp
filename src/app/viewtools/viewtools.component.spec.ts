import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ViewtoolsComponent } from './viewtools.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { of } from 'rxjs';
import { ApiService } from '../api.service';

describe('ViewtoolsComponent', () => {
  let component: ViewtoolsComponent;
  let fixture: ComponentFixture<ViewtoolsComponent>;
  let mockApiService: jasmine.SpyObj<ApiService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
       imports:[HttpClientTestingModule,FormsModule],
      declarations: [ ViewtoolsComponent ,NavbarComponent,SidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewtoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open the popup and set the current tool when calling openPopup()', () => {
    // Create a mock data array
    const mockData = [
      { id: 1, name: 'Tool 1', category: 'Category 1', quantity: '10', status: 'Active', description: 'Description 1' },
      { id: 2, name: 'Tool 2', category: 'Category 2', quantity: '5', status: 'Inactive', description: 'Description 2' },
      // Add more mock data items as needed
    ];

    // Set the component's data property to the mock data array
    component.data = mockData;

    // Set the id of the current tool to be opened
    const currentToolId = 1;

    // Call the openPopup() method with the current tool id
    component.openPopup(currentToolId);

    // Check if the isOpen property is set to true
    expect(component.isOpen).toBeTrue();

    // Check if the current tool is set correctly
    expect(component.currentTool).toEqual(mockData.find((k: any) => k.id === currentToolId));

    // Check if the form fields are updated with the current tool's values
    expect(component.name).toBe(component.currentTool.name);
    expect(component.category).toBe(component.currentTool.category);
    expect(component.quantity).toBe(component.currentTool.quantity);
    expect(component.status).toBe(component.currentTool.status);
    expect(component.description).toBe(component.currentTool.description);

    // Check if the current tool's id is stored in localStorage
    expect(localStorage.getItem('k')).toBe(component.currentTool.id.toString());
  });
  it('should set isOpen to false when closePopup is called', () => {
    component.isOpen = true;
    component.closePopup();
    expect(component.isOpen).toBeFalse();
  });
  
  // it('should initialize data and isLoading properties', () => {
  //   const responseData = { /* your mock response data */ };
  //   mockApiService.ViewTools.and.returnValue(of(responseData));

  //   expect(component.data).toBeUndefined();
  //   expect(component.isLoading).toBe(true);

  //   fixture.detectChanges();

  //   expect(component.data).toBe(responseData);
  //   expect(component.isLoading).toBe(false);
  // });
  // it('should update tool details successfully', () => {
  //   const mockResponse = {
  //     status: 'Tool details updated successfully'
  //   };
  //   const mockData = {
  //     id: '123',
  //     name: 'Tool',
  //     category: 'Category',
  //     quantity: '5',
  //     status: 'Available',
  //     description: 'Description'
  //   };

  //   spyOn(window, 'alert');
  //   spyOn(window.location, 'reload');

  //   mockApiService.updateTools.and.returnValue(of(mockResponse));

  //   component.name = mockData.name;
  //   component.category = mockData.category;
  //   component.quantity = mockData.quantity;
  //   component.status = mockData.status;
  //   component.description = mockData.description;
  //   component.updateBtnClick();

  //   expect(mockApiService.updateTools).toHaveBeenCalledWith(mockData);
  //   expect(window.alert).toHaveBeenCalledWith('Tool details updated successfully');
  //   expect(window.location.reload).toHaveBeenCalled();
  //   expect(component.name).toBe('');
  //   expect(component.category).toBe('');
  //   expect(component.quantity).toBe('');
  //   expect(component.status).toBe('');
  //   expect(component.description).toBe('');
  //   expect(component.isOpen).toBe(false);
  // });

  // it('should handle failed tool details update', () => {
  //   const mockResponse = {
  //     status: 'Failed to update Tool record. Try again'
  //   };

  //   spyOn(window, 'alert');

  //   mockApiService.updateTools.and.returnValue(of(mockResponse));

  //   component.updateBtnClick();
  //   expect(mockApiService.updateTools).toHaveBeenCalled();
  //   expect(window.alert).toHaveBeenCalledWith('Failed to update Tool record. Try again');
  //   // Make assertions for other properties as needed
  // });

  
  it('should update the sorting key and reverse flag', () => {
    const initialKey = component.key;
    const initialReverse = component.reverse;

    const newKey = 'name';

    component.sort(newKey);

    expect(component.key).toBe(newKey);
    expect(component.reverse).toBe(!initialReverse);
    // Add more assertions if needed
  });
  
});

