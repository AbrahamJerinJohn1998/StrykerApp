import { Component } from '@angular/core';

@Component({
  selector: 'app-viewtools',
  templateUrl: './viewtools.component.html',
  styleUrls: ['./viewtools.component.css']
})
export class ViewtoolsComponent {
  constructor(private api:ApiService)
  {
   api.ViewTools().subscribe(
    (response:any)=>
    {
      this.data=response;
    }
   )
  }
  data:any=[]
}
