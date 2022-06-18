import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  registerForm: FormGroup;
  inputclass: string;
  inputcourseId: string;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      class:['', [Validators.required]],
      courseId:['', [Validators.required]]
    });
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get class(): FormControl {
    return <FormControl>this.registerForm.get('class');
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get courseId(): FormControl {
    return <FormControl>this.registerForm.get('courseId');
  }

  createClass() {
    const body = {
      classe: this.inputclass,
      courseId: this.inputcourseId,
    };

    try {
      console.log(body)
      this.http.post<any>('http://localhost:8080/classes', body)
        .subscribe(() => alert('Cadastro realizado com sucesso!'));
    } catch (error) {
      console.log('>>>>> Error' + error);
    }
  }

}
