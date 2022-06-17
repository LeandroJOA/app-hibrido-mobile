import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  registerForm: FormGroup;
  inputclasse: string;
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
      classe:['', [Validators.required]],
      courseId:['', [Validators.required]]
    });
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get classe(): FormControl {
    return <FormControl>this.registerForm.get('classe');
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get courseId(): FormControl {
    return <FormControl>this.registerForm.get('courseId');
  }

  createClasse() {
    const body = {
      classe: this.inputclasse,
      courseId: this.inputcourseId,
    };

    try {
      this.http.post<any>('http://localhost:8080/classes', body)
        .subscribe(() => alert('Cadastro realizado com sucesso!'));
    } catch (error) {
      console.log('>>>>> Error' + error);
    }
  }

}
