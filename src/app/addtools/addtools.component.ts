import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addtools',
  templateUrl: './addtools.component.html',
  styleUrls: ['./addtools.component.css']
})
export class AddtoolsComponent {
  name=""
  category=""
  quantity=""
  status=""
  description=""
  constructor(private api:ApiService){}
  
    readValues=()=>
    {
    
    let data:any={"name":this.name,"category":this.category,"quantity":this.quantity,"status":this.status,"descrition":this.description}
    console.log(data)
    this.api.addTools(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status=="success") {
          alert("Tool added successfully")
          this.name=""
          this.category=""
          this.quantity=""
          this.status=""
          this.description=""
        } else {
          alert("something went wrong")
        }
      }
    )
    }
}
