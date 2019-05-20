import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyectoDeBases20';


  query:any



  updateQuery(e) {
    this.query = e.target.value;
  }

 

}
