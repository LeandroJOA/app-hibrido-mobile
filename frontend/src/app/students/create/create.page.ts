import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  registerForm: FormGroup;

  inputName: string;
  inputClass: string;
  inputDocument: string;

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
      class:['', [Validators.required]],
      document:['', [Validators.required]]
    });
  }

  get name(): FormControl {
    return <FormControl>this.registerForm.get('name');
  }

  get class(): FormControl {
    return <FormControl>this.registerForm.get('class');
  }

  get document(): FormControl {
    return <FormControl>this.registerForm.get('document');
  }

  createStudent() {
    const body = {
      name: this.inputDocument,
      class: this.inputClass,
      document: this.inputDocument,
    };

    try {
      this.http.post<any>('http://localhost:8080/students', body)
        .subscribe(() => alert('Cadastro realizado com sucesso!'));
    } catch (error) {
      console.log('>>>>> Error' + error);
    }
  }

}
