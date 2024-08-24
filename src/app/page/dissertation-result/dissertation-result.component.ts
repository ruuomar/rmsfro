import { Component, OnInit } from '@angular/core';
import { ResultService } from '../../services/result.service';

@Component({
  selector: 'app-dissertation-result',
  templateUrl: './dissertation-result.component.html',
  styleUrl: './dissertation-result.component.css'
})
export class DissertationResultComponent implements OnInit{
items: any;

constructor(private resultService:ResultService){}

  ngOnInit(): void {
    this.getAllResult();
    
  }
  getAllResult(){
   this.resultService.pgogetResult().subscribe((data)=>{
    this.items = data;
    console.log(this.items)
   })
  }

}
