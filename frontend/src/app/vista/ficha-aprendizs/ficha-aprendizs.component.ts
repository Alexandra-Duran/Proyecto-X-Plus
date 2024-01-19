import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UsersComponent } from '../users/users.component';
import { FormacionsComponent } from '../formacions/formacions.component';

@Component({
  selector: 'app-ficha-aprendizs',
  templateUrl: './ficha-aprendizs.component.html',
  styleUrls: ['./ficha-aprendizs.component.css']
})
export class FichaAprendizsComponent implements OnInit{
  error:string = '';
  success:string = '';

  users:any[] = [];
  formacions:any[] = [];
  ficha_aprendizs:any[] = [];
  fic_ficha:any = null;

  ficha_aprendizForm = new FormGroup({
    fic_ficha: new FormControl(''),
    fic_jornada: new FormControl(''),
    fic_fechainicio: new FormControl(''),
    fic_fechafin: new FormControl(''),
    users_id: new FormControl(''),
    ficha_for: new FormControl('')
  });

  constructor (
    private httpClient : HttpClient
  ) {}

  ngOnInit(): void {
    this.getUserList();
    this.getFichaAprendizList();
    this.getFormacionList();
  }

  getUserList () {
    this.httpClient.get('http://127.0.0.1:8000/api/users')
      .subscribe((response:any) => {
        this.users = response.data;
    })
  }
  getFichaAprendizList () {
    this.httpClient.get('http://127.0.0.1:8000/api/ficha-aprendizs')
      .subscribe((response:any) => {
        this.ficha_aprendizs = response.data;
    })
  }
  getFormacionList () {
    this.httpClient.get('http://127.0.0.1:8000/api/formacions')
      .subscribe((response:any) => {
        this.formacions = response.data;
    })
  }

  getNombreUser(users_id: number): string {
    const user = this.users.find(user => user.id === users_id);
    return user ? user.email : 'Nombre no encontrado';
  }

  getNombreFormacion(ficha_for: number): string {
    const formacion = this.formacions.find(formacion => formacion.for_ficha === ficha_for);
    return formacion ? formacion.for_nombre : 'Formacion no encontrada';
  }


  onSubmit () {
    this.error = '';
    this.success = '';
    if (this.fic_ficha != null) {
      this.httpClient.put(`http://127.0.0.1:8000/api/ficha-aprendizs/${ this.fic_ficha }`, this.ficha_aprendizForm.value)
        .subscribe((response:any) => {
          if (response.status == "success") {
            this.success = response.message;
          }
          this.getFichaAprendizList();
          this.reset();
        }, error => {
          this.error = error.error.message;
        });
    } else {
      this.httpClient.post('http://127.0.0.1:8000/api/ficha-aprendizs', this.ficha_aprendizForm.value)
        .subscribe((response:any) => {
          if (response.status == "success") {
            this.success = response.message;
          }
          this.getFichaAprendizList();
          this.reset();
        }, error => {
          this.error = error.error.message;
        });
    }
  }

  editFicha_aprendiz (ficha_aprendiz: any) {
    this.fic_ficha = ficha_aprendiz.fic_ficha;
    this.ficha_aprendizForm.setValue({
      fic_ficha: ficha_aprendiz.fic_ficha,
      fic_jornada: ficha_aprendiz.fic_jornada,
      fic_fechainicio: ficha_aprendiz.fic_fechainicio,
      fic_fechafin: ficha_aprendiz.fic_fechafin,
      users_id: ficha_aprendiz.users_id,
      ficha_for: ficha_aprendiz.ficha_for
    });
  }

  deleteFicha_aprendiz (ficha_aprendiz: any) {
    if (confirm(`Estas seguro de eliminar la ficha ${ ficha_aprendiz.fic_ficha }`)) {
      this.httpClient.delete(`http://127.0.0.1:8000/api/ficha-aprendizs/${ ficha_aprendiz.fic_ficha }`)
        .subscribe((response: any) => {
          if (response.status == "success") {
            this.success = response.message;
          }
          this.getFichaAprendizList();
          this.reset();
        })
    }
  }
  
  reset() {
    this.fic_ficha = null;
    this.ficha_aprendizForm.setValue({
      fic_ficha: (''),
      fic_jornada: (''),
      fic_fechainicio: (''),
      fic_fechafin: (''),
      users_id: (''),
      ficha_for: (''),

    });
  }
}
