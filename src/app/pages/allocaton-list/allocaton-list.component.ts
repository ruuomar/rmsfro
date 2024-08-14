import { Component, OnInit } from '@angular/core';
import { AllocationService } from '../../services/allocation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allocaton-list',
  templateUrl:  './allocaton-list.component.html',
  styleUrl: './allocaton-list.component.css'
  
})
export class AllocatonListComponent implements OnInit {
 list:any
onedit() {

}

constructor(private allocation:AllocationService,private router:Router){}
  ngOnInit(): void {
    this.getAll()
  
  }

onAllocation(){
    return this.router.navigateByUrl('allocation')
}

getAll(){
  this.allocation.getAllSupervisor().subscribe((data)=>{
    this.list = data;
    console.log(this.list);
  })
}

ondelete(list:any){
  this.allocation.delete(list).subscribe(()=>{
    console.log("succesful deleted")
    this.getAll()
  })
}


}
