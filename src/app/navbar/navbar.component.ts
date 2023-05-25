import { Component, EventEmitter, Output } from '@angular/core';
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
  closePopup() {
    this.isOpen = false;
  }

  name = ""
  category = ""
  quantity = ""
  status = ""
  description = ""


  constructor(private api: ApiService) { }
  // clearForm() {

  //   name: '';
  //   category: '';
  //   quantity: '';
  //   status: '';
  //   description: ''
  // }
  

 nameInvalid: boolean = false;
  nameRequired: boolean = false;
  categoryInvalid: boolean = false;
  categoryRequired: boolean = false;
  quantityInvalid: boolean = false;
  quantityRequired: boolean = false;
  statusInvalid: boolean = false;
  statusRequired: boolean = false;
  descriptionInvalid: boolean = false;
  descriptionRequired: boolean = false;
   
  onNameChange() {
  this.nameRequired = this.name == null || this.name.trim() === '';
 this.nameInvalid = this.nameRequired 
  }
  onCategoryChange() {
    this.categoryRequired = this.category == null || this.category.trim() === '';
   this.categoryInvalid = this.categoryRequired 
    }
    onQuantityChange() {
      this.quantityRequired = this.quantity== null || this.quantity.trim() === '';
     this.quantityInvalid = this.quantityRequired 
      }
      onStatusChange() {
        this.statusRequired = this.status == null || this.status.trim() === '';
       this.statusInvalid = this.statusRequired 
        }
        onDescriptionChange() {
          this.descriptionRequired = this.description== null || this.description.trim() === '';
         this.descriptionInvalid = this.descriptionRequired 
          }


  readValue = () => {
    let data: any = { "name": this.name, "category": this.category, "quantity": this.quantity, "status": this.status, "description": this.description }
    console.log(data)

    {
      this.api.addTools(data).subscribe(
        (response: any) => {
          console.log(response)
          if (response.status == "Tool added successfully ") {
            alert("Tool added successfully")
            this.name = ""
            this.category = ""
            this.status = ""
            this.status = ""
            this.description = ""
            this.isOpen = false;
            location.reload();
          } else {
            alert("something went wrong")
          }


        }
      )
    }
  }
  data: any = []


}

