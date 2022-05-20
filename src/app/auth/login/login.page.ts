import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  name: string;
  password: string;

  usuarios: any = [
    {email: 'bcf', senha: 'bcf'},
    {email: 'mamae', senha: 'abacaxi'},
    {email: 'papai', senha: 'melancia'},
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email:['', [Validators.required, Validators.email]],
      senha:['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get email(): FormControl {
    return <FormControl>this.loginForm.get('email');
  }

  get senha(): FormControl {
    return <FormControl>this.loginForm.get('senha');
  }

  realizarLogin(){
    this.usuarios.array.forEach(us => {
      us = this.usuarios;
      if (us.email === this.name && us.senha === this.password) {
        const isLoggedIn = false;
        const router = document.querySelector('ion-router');
        const routeRedirect = document.createElement('ion-route-redirect');
        routeRedirect.setAttribute('from', '*');
        routeRedirect.setAttribute('to', '/register');

        if (!isLoggedIn) {
          router.appendChild(routeRedirect);
        }
          return true;
      }
    });

    alert('Dados incorretos, tente novamente.');
    return false;
  }

}
