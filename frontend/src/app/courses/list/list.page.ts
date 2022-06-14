import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  courses:any = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.listCourse();
  }

  listCourse() {
    try {
        this.http.get<any>(`http://localhost:8080/courses`)
          .subscribe(result => this.courses = result);
      } catch (error) {
        console.log('>>>>> Error' + error);
      }
  }

  deleteCourse(courseId) {
    if (confirm('Deseja deletar este usuário?')) {
      try {
        this.http.delete<any>(`http://localhost:8080/courses/${courseId}`)
          .subscribe(() => {
            alert('Usuário deletado com sucesso!');

            this.listCourse();
          });
      } catch (error) {
        console.log('>>>>> Error' + error);
      }
    }
  }

}
