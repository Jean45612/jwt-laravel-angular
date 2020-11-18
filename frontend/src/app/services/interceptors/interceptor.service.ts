import { SwalService } from './../swal/swal.service';
import { AuthService } from './../auth/auth.service';
import { TokenService } from './../token/token.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private Token: TokenService, private router: Router, private Auth: AuthService, private swal: SwalService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let request = req;

    let headers = new HttpHeaders();

    headers = headers.append('Content-Type', 'application/json; charset=utf-8');

    if (request.method === 'POST' && request.body.toString() === "[object FormData]") { //SI ES QUE VOY A SUBIR IMAGENES ELIMINO LO DEL APLICATION JSON
      headers = headers.delete('Content-Type', 'application/json; charset=utf-8');
    }

    const token = this.Token.getToken();

    if (token) {
      headers = headers.append('Authorization', 'Bearer ' + token);
    }

    request = req.clone({
      headers
    });

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log('error', error);
        if (error.status === 401 && error.error.message === "Token has expired") {
          console.log('debo refrescar');
        }

        if (error.error.message === "Token has expired and can no longer be refreshed") {
          this.swal.alerta('La sesión ha expirado', 'warning');
          this.Token.remove();
          this.Auth.changeAuthStatus(false);
          this.router.navigate(['login']);
        }

        return throwError(error);

      })
    );
  }

}
