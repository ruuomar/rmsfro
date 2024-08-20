import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-research-complited',
  templateUrl: './research-complited.component.html',
  styleUrl: './research-complited.component.css'
})
export class ResearchComplitedComponent {
items: any;
constructor(private router:Router){}

addresult(){
  return this.router.navigateByUrl('dialogResul')
}

}
