import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
// inapokea request halafu inasend ambayo ni observable wenyewe

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token'); // Get the token from storage
  const request = req.clone ({
    headers: (new HttpHeaders()).append('Authorization','`Bearer ${token}`')
  })
  return next( request);
};
