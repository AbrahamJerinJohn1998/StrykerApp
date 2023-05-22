import { Component } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-viewtools',
  templateUrl: './viewtools.component.html',
  styleUrls: ['./viewtools.component.css']
})
export class ViewtoolsComponent {
  constructor(private api: ApiService) {
    this.api.ViewTools().subscribe(
      (response: any) => {
        this.data = response;
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

  data: any = []
}
