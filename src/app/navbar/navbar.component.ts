import { Component } from '@angular/core';
import { ApiService } from '../api.service';

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

  name= ""
    category=""
    quantity=""
    status=""
    description=""

    
  constructor(private api:ApiService){}
  clearForm() {
    
      name: '';
      category: '';
      quantity: '';
      status:'';
    description:''
    }
    readValue=()=>
{
  let data:any={"name":this.name,"category":this.category,"quantity":this.quantity,"status":this.status,"description":this.description}
  console.log(data)
  this.isOpen = false;
  {
  this.api.addTools(data).subscribe(
    (response:any)=>
    {
      console.log(response)
      if (response.status=="Tool added successfully ") {
        alert("Tool added successfully")
        this.name=""
        this.category=""
        this.status=""
        this.status=""
        this.description=""
        location.reload();
      } else {
        alert("something went wrong")
      }
      
      
    }
  )
  }
}
data:any=[]

nameInvalid: boolean = false;

nameRequired: boolean = false;

nameInvalidFormat: boolean = false;

 onNameChange() {

this.nameRequired = this.name == null || this.name.trim() === '';

 this.nameInvalidFormat = !this.nameRequired ;

 this.nameInvalid = this.nameRequired || this.nameInvalidFormat;
 }
  }
 
