import { Component, OnInit } from '@angular/core';
import { SupervisorService } from '../../services/supervisor.service';

@Component({
  selector: 'app-pgo-dashbord',
  templateUrl: './pgo-dashbord.component.html',
  styleUrl: './pgo-dashbord.component.css'
})
export class PgoDashbordComponent  implements OnInit{
  supervisorCount: number | null = null;

  ngOnInit(): void {

  }
  constructor(private supervisorService:SupervisorService){}

  fetchSupervisorCount(): void {
    this.supervisorService.getSupervisorCount().subscribe({
      next: (data) => {
        this.supervisorCount = data.count;
      }
      
    })
  }

}
