import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultService } from '../../services/result.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent implements OnInit{
  results: any = {};
  average_marks: number = 0;
  grade: string = '';
  tittle: string = ''


  constructor(private resultService: ResultService) { }

  ngOnInit(): void {
    this.resultService.getResult().subscribe(
      (data) => {
        this.tittle = data.tittle
        this.results = data;
        this.average_marks = data.average;
        this.grade = data.grade;
        console.log(data)
    
      },
      (error) => {
        console.error('Error fetching results', error);
      }
    ); 
  }
}
  // getGrade(average_marks: number): string {
  //   if (average_marks >= 70) {
  //     return 'A';
  //   } else if (average_marks >= 60) {
  //     return 'B+';
  //   } else if (average_marks >= 50) {
  //     return 'B';
  //   } else if (average_marks >= 40) {
  //     return 'C';
  //   } else {
  //     return 'F';  // Below 40 is considered a fail
  //   }
  // }


