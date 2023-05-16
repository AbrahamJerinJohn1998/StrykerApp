import { Component } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-viewtools',
  templateUrl: './viewtools.component.html',
  styleUrls: ['./viewtools.component.css']
})
export class ViewtoolsComponent {
  constructor(private api:ApiService)
  {
   this.api.ViewTools().subscribe(
    (response:any)=>
    {
      this.data=response;
    }
   )
  }
  data:any=[]
}
