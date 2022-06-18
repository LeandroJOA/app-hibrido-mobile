import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  registerForm: FormGroup;

  inputName: string;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      name:['', [Validators.required]],
    });
  }

  get name(): FormControl {
    return <FormControl>this.registerForm.get('name');
  }

  createCourse(id) {
    const body = {
      course: this.inputName,
    };

    try {
      this.http.put<any>('http://localhost:8080/courses/' + id, body)
        .subscribe(() => alert('Cadastro realizado com sucesso!'));
    } catch (error) {
      console.log('>>>>> Error' + error);
    }
  }

}
