/* eslint-disable guard-for-in */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable @typescript-eslint/member-ordering */
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;

  inputEmail: string;
  inputPassword: string;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get email(): FormControl {
    return <FormControl>this.registerForm.get('email');
  }

  get password(): FormControl {
    return <FormControl>this.registerForm.get('password');
  }

  createUser() {
    const body = {
      email: this.inputEmail,
      password: this.inputPassword,
    }

    try {
      this.http.post<any>('http://localhost:8080/users', body)
        .subscribe(() => console.log('adicionado'));
    } catch (error) {
      console.log('>>>>> Error' + error);
    }
  }

}
