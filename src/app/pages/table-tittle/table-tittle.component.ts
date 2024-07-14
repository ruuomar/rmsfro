import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-tittle',
  templateUrl: './table-tittle.component.html',
  styleUrl: './table-tittle.component.css'
})
export class TableTittleComponent {
  // natengeza constractor
  constructor(private router:Router){

  }

  viewDetail(){
    this.router.navigateByUrl('detailTittle')

  }

}
