import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService)
  const  router = inject(Router)

  if (auth.islogedin()){
    return true;
  }

  router.navigateByUrl('login')
    return false
  
  
};
