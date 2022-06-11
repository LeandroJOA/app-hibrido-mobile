/* eslint-disable guard-for-in */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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

  users: any = [
    {
      email: 'teste@gmail.com',
      senha: 'teste'
    },
    {
      email: 'teste123@gmail.com',
      senha: 'teste123'
    },
    {
      email: 'teste321@gmail.com',
      senha: 'teste321'
    },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {
    this.router = router;
  }

  ngOnInit() {
    this.createForm();
    console.log(this.users);
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
    const body = {
      email: this.inputEmail,
      password: this.inputPassword,
    }

    try {
      this.http.post<any>('http://localhost:8080/users/login', body)
        .subscribe(result => {
          if (result.authenticated) {
            alert('Usuario autenticado com sucesso!');
            this.isLoggedIn = true;
            this.router.navigate(['/', 'dashboard']);
            return;
          } else {
            alert('Falha na autenticação! Senha e/ou E-mail incorreto.');
            this.isLoggedIn = false;
            return false;
          }
        });
    } catch (error) {
      console.log('>>>>> Error' + error);
    }
  }
}
