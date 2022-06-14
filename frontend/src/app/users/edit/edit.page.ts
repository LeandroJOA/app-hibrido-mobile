import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  private routeSub: Subscription;

  registerForm: FormGroup;

  user:any = {};

  inputEmail: string = this.user.email;
  inputPassword: string = this.user.password;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.listUsers(params['userId']);
    });
  }

  listUsers(userId) {
    try {
        this.http.get<any>(`http://localhost:8080/users/${userId}`)
          .subscribe(result => this.user = result);
      } catch (error) {
        console.log('>>>>> Error' + error);
      }
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
    };

    try {
      this.http.put<any>('http://localhost:8080/users', body)
        .subscribe(() => alert('Cadastro realizado com sucesso!'));
    } catch (error) {
      console.log('>>>>> Error' + error);
    }
  }

}
