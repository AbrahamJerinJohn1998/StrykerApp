import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-viewtools',
  templateUrl: './viewtools.component.html',
  styleUrls: ['./viewtools.component.css']
})
export class ViewtoolsComponent{
  id=""
  name = ""
  category = ""
  quantity = ""
  status = ""
  description = ""
  isOpen = false;
  p: number = 1;
  isLoading: boolean = true;
  currentTool:any=[]
  k=""
  openPopup(id:any) {
    this.isOpen = true;
    this.currentTool =this.data.find((k:any)=> {return k.id == id})
    console.log(this.currentTool)
    this.name=this.currentTool.name
    this.category=this.currentTool.category
    this.quantity=this.currentTool.quantity
    this.status=this.currentTool.status
    this.description=this.currentTool.description
localStorage.setItem("k",this.currentTool.id)
  }

  closePopup(){
    this.isOpen = false;
  }
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


  constructor(private api: ApiService) {
    this.api.ViewTools().subscribe(
      (response: any) => {
        this.data = response;
        this.isLoading = false;

      }
    )
  }

  deleteBtnClick = (id: any) => {
    let data: any = { "id": id }
    this.api.deleteTools(data).subscribe(
      (response: any) => {
        console.log(response)
        if (response.status == "Tool deleted successfully") {

          alert("Tool deleted successfully")
          location.reload();
        } else {
          alert("can't delete")
        }
      }
    )
  }

  updateBtnClick = () => {
console.log(localStorage.getItem("k"))
 let data: any = {"id":localStorage.getItem("k"), "name": this.name, "category": this.category, "quantity": this.quantity, "status": this.status, "description": this.description }
 console.log(data)
{
    this.api.updateTools(data).subscribe(

      (response: any) => {
        console.log(response)

        if (response.status == "Tool details updated successfully") {
          alert("Tool details updated successfully")

          this.name = ""
          this.category = ""
          this.quantity = ""
          this.status = ""
          this.description = ""
          this.isOpen = false;
          location.reload();

        }
        else {
          alert("Failed to update Tool record.Try again")
        }

      }
    )
}
  }

key:String ='id';
reverse:boolean = false;
sort(key : any){
  this.key= key;
  this.reverse= ! this.reverse;
}
  data: any = []
}
