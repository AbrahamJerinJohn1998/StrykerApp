import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isOpen = false;
  openPopup() {
    this.isOpen = true;
  }
  formData = {
    name: '',
    category: '',
    quantity:'',
    status:'',
    description:''
  };
  submitForm() {
    // Perform form submission logic here
    console.log(this.formData);
    // Optionally, close the popup after form submission
    this.isOpen = false;
  }
  
 }
