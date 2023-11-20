import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  error:string = '';
  success:string = '';

  personas:any[] = [];
  per_documento:any = null;

  personaForm = new FormGroup({
    per_documento: new FormControl(''),
    per_tipodoc: new FormControl(''),
    per_nombre: new FormControl(''),
    per_apellido: new FormControl(''),
    per_telefono: new FormControl(''),
    per_email: new FormControl(''),
    per_genero: new FormControl(''),
    per_foto: new FormControl(''),
    per_estado: new FormControl('')
    
  });

  constructor (
    private httpClient : HttpClient
  ) {}

  ngOnInit(): void {
    this.getPersonaList();
  }

  getPersonaList () {
    this.httpClient.get('http://127.0.0.1:8000/api/personas')
      .subscribe((response:any) => {
        this.personas = response.data;
    })
  }

  onSubmit () {
    this.error = '';
    this.success = '';
    if (this.per_documento != null) {
      this.httpClient.put(`http://127.0.0.1:8000/api/personas/${ this.per_documento }`, this.personaForm.value)
        .subscribe((response:any) => {
          if (response.status == "success") {
            this.success = response.message;
          }
          this.getPersonaList();
          this.reset();
        }, error => {
          this.error = error.error.message;
        });
    } else {
      this.httpClient.post('http://127.0.0.1:8000/api/personas', this.personaForm.value)
        .subscribe((response:any) => {
          if (response.status == "success") {
            this.success = response.message;
          }
          this.getPersonaList();
          this.reset();
        }, error => {
          this.error = error.error.message;
        });
    }
  }

  editPersona (persona: any) {
    this.per_documento = persona.per_documento;
    this.personaForm.setValue({
      // name: product.name,
      // price: product.price,
      per_documento: persona.per_documento,
      per_tipodoc: persona.per_tipodoc,
      per_nombre: persona.per_nombre,
      per_apellido: persona.per_apellido,
      per_telefono: persona.per_telefono,
      per_email: persona.per_email,
      per_genero: persona.per_genero,
      per_foto: persona.per_foto,
      per_estado: persona.per_estado
    });
  }

  deletePersona (persona: any) {
    if (confirm(`Estas seguro de eliminar la persona ${ persona.per_nombre }`)) {
      this.httpClient.delete(`http://127.0.0.1:8000/api/personas/${ persona.per_documento }`)
        .subscribe((response: any) => {
          if (response.status == "success") {
            this.success = response.message;
          }
          this.getPersonaList();
          this.reset();
        })
    }
  }

  reset() {
    this.per_documento = null;
    this.personaForm.setValue({
      per_documento: (''),
      per_tipodoc: (''),
      per_nombre: (''),
      per_apellido: (''),
      per_telefono: (''),
      per_email: (''),
      per_genero: (''),
      per_foto: (''),
      per_estado: ('')
    });
  }
}
