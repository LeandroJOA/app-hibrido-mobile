import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  courses: any = getListaCursos();


  constructor(private http: HttpClient) { }

  ngOnInit() {
  }


  getListaCursos(){
    return this.http.get<any[]>('http://localhost:8080/courses');
  }

  deleteCourse(courseId) {
    if (confirm('Deseja deletar este curso?')) {
      try {
        this.http.delete<any>('http://localhost:8080/course/${courseId}')
          .subscribe(() => alert('Curso deletado com sucesso!'));
      } catch (error) {
        console.log('>>>>> Error' + error);
      }
    }
  }

}
