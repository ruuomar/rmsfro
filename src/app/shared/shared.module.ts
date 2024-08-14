import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpHeaderResponse } from '@angular/common/http';
import { tokenInterceptor } from '../intorceptors/token.interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useValue: tokenInterceptor, 
      multi: true
    }
  ]
})
export class SharedModule { }
