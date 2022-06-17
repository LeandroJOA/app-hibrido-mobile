import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  classes: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.listClasses();
  }

  listClasses() {
    try {
        this.http.get<any>(`http://localhost:8080/classes`)
          .subscribe(result => this.classes = result);
      } catch (error) {
        console.log('>>>>> Error' + error);
      }
  }

  deleteClasses(classeId) {
    if (confirm('Deseja deletar este turma?')) {
      try {
        this.http.delete<any>(`http://localhost:8080/classes/${classeId}`)
          .subscribe(() => {
            alert('Turma deletado com sucesso!');

            this.listClasses();
          });
      } catch (error) {
        console.log('>>>>> Error' + error);
      }
    }
  }
}
