/* eslint-disable guard-for-in */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  inputEmail: string;
  inputPassword: string;

  isLoggedIn = false;

  usuarios: any = [
    {
      email: 'teste',
      senha: 'teste'
    },
    {
      email: 'teste123',
      senha: 'teste123'
    },
    {
      email: 'teste321',
      senha: 'teste321'
    },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.router = router;
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get email(): FormControl {
    return <FormControl>this.loginForm.get('email');
  }

  get password(): FormControl {
    return <FormControl>this.loginForm.get('password');
  }

  login(){
    for (const usuario of this.usuarios) {
      if (this.inputEmail === usuario.email && this.inputPassword === usuario.senha) {
        this.isLoggedIn = true;
        this.router.navigate(['/', 'home']);
        return;
      }
    }
    alert('Dados incorretos, tente novamente.');
    this.isLoggedIn = false;
    return false;
  }
}
