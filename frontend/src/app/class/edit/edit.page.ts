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
  inputclass: string;
  inputcourseId: string;

  constructor(
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

  createClass(id) {
    const body = {
      class: this.inputclass,
      courseId: this.inputcourseId,
    };

    try {
      this.http.put<any>('http://localhost:8080/classes/' +id, body)
        .subscribe(() => alert('Cadastro realizado com sucesso!'));
    } catch (error) {
      console.log('>>>>> Error' + error);
    }
  }

}
