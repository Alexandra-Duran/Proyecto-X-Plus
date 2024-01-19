import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {
  error:string = '';
  success:string = '';

  users:any[] = [];
  eventos:any[] = [];
  eve_id:any = null;

  eventoForm = new FormGroup({
    eve_tipo: new FormControl(''),
    eve_nombre: new FormControl(''),
    eve_area: new FormControl(''),
    eve_fechainicio: new FormControl(''),
    eve_fechafin: new FormControl(''),
    eve_estado: new FormControl(''),
    usu_id: new FormControl(''),  
  });

  constructor (
    private httpClient : HttpClient
  ) {}

  ngOnInit(): void {
    this.getEventoList();
    this.getUserList();
  }

  getEventoList () {
    this.httpClient.get('http://127.0.0.1:8000/api/eventos')
      .subscribe((response:any) => {
        this.eventos = response.data;
    })
  }

  getUserList () {
    this.httpClient.get('http://127.0.0.1:8000/api/users')
      .subscribe((response:any) => {
        this.users = response.data;
    })
  }

  getNombreUser(usu_id: number): string {
    const user = this.users.find(user => user.id === usu_id);
    return user ? user.email : 'Usario no encontrado';
  }


  onSubmit () {
    this.error = '';
    this.success = '';
    if (this.eve_id != null) {
      this.httpClient.put(`http://127.0.0.1:8000/api/eventos/${ this.eve_id }`, this.eventoForm.value)
        .subscribe((response:any) => {
          if (response.status == "success") {
            this.success = response.message;
          }
          this.getEventoList();
          this.reset();
        }, error => {
          this.error = error.error.message;
        });
    } else {
      this.httpClient.post('http://127.0.0.1:8000/api/eventos', this.eventoForm.value)
        .subscribe((response:any) => {
          if (response.status == "success") {
            this.success = response.message;
          }
          this.getEventoList();
          this.reset();
        }, error => {
          this.error = error.error.message;
        });
    }
  }

  editEvento (evento: any) {
    this.eve_id = evento.id;
    this.eventoForm.setValue({
      eve_tipo: evento.eve_tipo,
      eve_nombre: evento.eve_nombre,
      eve_area: evento.eve_area,
      eve_fechainicio: evento.eve_fechainicio,
      eve_fechafin: evento.eve_fechafin,
      eve_estado: evento.eve_estado,
      usu_id: evento.usu_id
    });
  }

  deleteEvento (evento: any) {
    if (confirm(`Estas seguro de eliminar el usuario ${ evento.eve_nombre }`)) {
      this.httpClient.delete(`http://127.0.0.1:8000/api/eventos/${ evento.id }`)
        .subscribe((response: any) => {
          if (response.status == "success") {
            this.success = response.message;
          }
          this.getEventoList();
          this.reset();
        })
    }
  }

  reset() {
    this.eve_id = null;
    this.eventoForm.setValue({
      eve_tipo: (''),
      eve_nombre: (''),
      eve_area: (''),
      eve_fechainicio: (''),
      eve_fechafin: (''),
      eve_estado: (''),
      usu_id: ('')
    });
  }
}
