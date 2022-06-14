import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  students:any = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.listStudent();
  }

  listStudent() {
    try {
        this.http.get<any>(`http://localhost:8080/students`)
          .subscribe(result => this.students = result);
      } catch (error) {
        console.log('>>>>> Error' + error);
      }
  }

  deleteStudent(studentId) {
    if (confirm('Deseja deletar este aluno?')) {
      try {
        this.http.delete<any>(`http://localhost:8080/students/${studentId}`)
          .subscribe(() => {
            alert('Aluno deletado com sucesso!');

            this.listStudent();
          });
      } catch (error) {
        console.log('>>>>> Error' + error);
      }
    }
  }

}
