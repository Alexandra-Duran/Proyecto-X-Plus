import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PersonasComponent } from '../personas/personas.component';
import { CargosComponent } from '../cargos/cargos.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  error:string = '';
  success:string = '';

  cargos:any[] = [];
  personas:any[] = [];
  users:any[] = [];
  usu_id:any = null;

  userForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    usu_estado: new FormControl(''),
    per_id: new FormControl(''),
    car_id: new FormControl('')
    
  });

  constructor (
    private httpClient : HttpClient
  ) {}

  ngOnInit(): void {
    this.getUserList();
    this.getPersonaList();
    this.getCargoList();
  }

  getUserList () {
    this.httpClient.get('http://127.0.0.1:8000/api/users')
      .subscribe((response:any) => {
        this.users = response.data;
    })
  }
  getPersonaList () {
    this.httpClient.get('http://127.0.0.1:8000/api/personas')
      .subscribe((response:any) => {
        this.personas = response.data;
    })
  }
  getCargoList () {
    this.httpClient.get('http://127.0.0.1:8000/api/cargos')
      .subscribe((response:any) => {
        this.cargos = response.data;
    })
  }

  getNombrePersona(per_id: string): string {
    const persona = this.personas.find(persona => persona.per_documento === per_id);
    return persona ? persona.per_nombre : 'Nombre no encontrado';
  }

  getNombreCargo(car_id: number): string {
    const cargo = this.cargos.find(cargo => cargo.id === car_id);
    return cargo ? cargo.car_nombre : 'Cargo no encontrado';
  }


  onSubmit () {
    this.error = '';
    this.success = '';
    if (this.usu_id != null) {
      this.httpClient.put(`http://127.0.0.1:8000/api/users/${ this.usu_id }`, this.userForm.value)
        .subscribe((response:any) => {
          if (response.status == "success") {
            this.success = response.message;
          }
          this.getUserList();
          this.reset();
        }, error => {
          this.error = error.error.message;
        });
    } else {
      this.httpClient.post('http://127.0.0.1:8000/api/users', this.userForm.value)
        .subscribe((response:any) => {
          if (response.status == "success") {
            this.success = response.message;
          }
          this.getUserList();
          this.reset();
        }, error => {
          this.error = error.error.message;
        });
    }
  }

  editUser (user: any) {
    this.usu_id = user.id;
    this.userForm.setValue({
      email: user.email,
      password: user.password,
      usu_estado: user.usu_estado,
      per_id: user.per_id,
      car_id: user.car_id,
    });
  }

  deleteUser (user: any) {
    if (confirm(`Estas seguro de eliminar el usuario ${ user.id }`)) {
      this.httpClient.delete(`http://127.0.0.1:8000/api/users/${ user.id }`)
        .subscribe((response: any) => {
          if (response.status == "success") {
            this.success = response.message;
          }
          this.getUserList();
          this.reset();
        })
    }
  }

  reset() {
    this.usu_id = null;
    this.userForm.setValue({
      email: (''),
      password: (''),
      usu_estado: (''),
      per_id: (''),
      car_id: ('')
    });
  }
}
