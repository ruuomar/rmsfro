import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-result',
  template: `
    <div>
      <h2>Add Result for Research ID:</h2>
      <!-- Form to add marks -->
      <form (ngSubmit)="submitResult()">
        <!-- Example form field -->
        <label for="marks">Marks</label>
        <input type="number" id="marks"  name="marks">
        
        <button type="submit">Submit</button>
      </form>
    </div>
  `,
  styleUrl: './add-result.component.css'
})
export class AddResultComponent implements OnInit {
  
 
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    
  }



  submitResult() {
    // Handle the submission of the result
    console.log(`Research ID: }, Marks: $}`);
    // Implement your submission logic here, e.g., calling a service to save the result.
  }


}


