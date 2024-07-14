import { Component, OnInit, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { StoreDataaTokenService } from '../../services/store-dataa-token.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent  implements OnInit{
  public role!:any
  router = inject(Router)
  storeData = inject(StoreDataaTokenService)
  auth  = inject(AuthService)

  ngOnInit(): void {
    this.storeData.getRoleStore().subscribe(response=>{
      this.role=response|| this.auth.getRolefromPayload()
    })
  }
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    logout(){
      localStorage.clear();
      this.router.navigateByUrl("login")
    }  
}
