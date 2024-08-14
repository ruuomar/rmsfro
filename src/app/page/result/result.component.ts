import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent implements OnInit{
items: any;
constructor(private result:ResultComponent){}
  ngOnInit(): void {
    
  }
  addResult(){}

}
