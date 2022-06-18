import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  class: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.listClass();
  }

  listClass() {
    try {
        this.http.get<any>(`http://localhost:8080/classes`)
          .subscribe(result => this.class = result);
      } catch (error) {
        console.log('>>>>> Error' + error);
      }
  }

  deleteClass(classId) {
    if (confirm('Deseja deletar este turma?')) {
      try {
        this.http.delete<any>(`http://localhost:8080/classes/${classId}`)
          .subscribe(() => {
            alert('Turma deletado com sucesso!');

            this.listClass();
          });
      } catch (error) {
        console.log('>>>>> Error' + error);
      }
    }
  }
}
