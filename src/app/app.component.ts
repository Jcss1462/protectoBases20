import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyectoDeBases20';


  query:any


  constructor(private location: Location){}

  updateQuery(e) {
    this.query = e.target.value;
  }

  redirectToSearch(){
    window.location.href = "http://localhost:4200/busqueda?query="+this.query;
  }

  redirectToImage(){
    window.location.href = "http://localhost:4200/busquedaimagen?filename="+this.query;
  }


 

}
