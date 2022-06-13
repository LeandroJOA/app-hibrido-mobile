import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  users:any = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.listUsers();
  }

  listUsers() {
    try {
        this.http.get<any>(`http://localhost:8080/users`)
          .subscribe(result => this.users = result);
      } catch (error) {
        console.log('>>>>> Error' + error);
      }
  }

  deleteUser(userId) {
    if (confirm('Deseja deletar este usuário?')) {
      try {
        this.http.delete<any>(`http://localhost:8080/users/${userId}`)
          .subscribe(() => {
            alert('Usuário deletado com sucesso!');

            this.listUsers();
          });
      } catch (error) {
        console.log('>>>>> Error' + error);
      }
    }
  }

}
