import { SwalService } from './../../services/swal/swal.service';
import { ApiService } from '../../services/api/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public form = {
    email: null,
    password: null,
    password_confirmation: null,
    rol_id: 1
  };

  public error = null;

  constructor(private api: ApiService, private swal: SwalService, private router: Router) { }

  ngOnInit(): void {
  }

  registrar() {
    this.api.post('register', this.form).subscribe(
      (data) => {
        this.swal.alerta('Registrado exitosamente', 'success', 5000);
        this.router.navigate(['login']);
      }, (error) => {
        this.error = error.error.errors;
      }
    );
  }

}
