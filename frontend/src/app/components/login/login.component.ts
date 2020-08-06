import { SwalService } from './../../services/swal/swal.service';
import { AuthService } from './../../services/auth/auth.service';
import { TokenService } from './../../services/token/token.service';
import { ApiService } from '../../services/api/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email: null,
    password: null
  };

  public error = null;

  constructor(private api: ApiService, private Token: TokenService, private router: Router, private Auth: AuthService, private swal: SwalService) { }

  ngOnInit(): void {
  }

  login() {
    this.api.post('login', this.form).subscribe(
      (data) => {
        this.Token.setToken(data.access_token, data.user);
        this.Auth.changeAuthStatus(true);
        this.swal.alerta('Bienvenido', 'success', 50000);
        this.router.navigate(['home']);
      }, (error) => {
        if (error.error.errors) {
          this.error = error.error.errors;
        } else {
          this.error = error.error;
        }
      }
    );
  }

}
