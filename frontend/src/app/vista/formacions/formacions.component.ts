import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formacions',
  templateUrl: './formacions.component.html',
  styleUrls: ['./formacions.component.css']
})
export class FormacionsComponent implements OnInit {
  error:string = '';
  success:string = '';

  formacions:any[] = [];
  for_ficha:any = null;

  formacionForm = new FormGroup({
    for_ficha: new FormControl(''),
    for_tipo: new FormControl(''),
    for_nombre: new FormControl(''),
    // for_jornada: new FormControl(''),
    // for_fechainicio: new FormControl(''),
    // for_fechafin: new FormControl(''),
    for_estado: new FormControl('')

  });


  constructor (
    private httpClient : HttpClient
  ) {}

  ngOnInit(): void{
    this.getFormacionList();
  }

  getFormacionList () {
    this.httpClient.get('http://127.0.0.1:8000/api/formacions')
    .subscribe((response:any) => {
        this.formacions = response.data;
    })
  }

  onSubmit () {
    this.error = '';
    this.success = '';
    if (this.for_ficha != null) {
      this.httpClient.put(`http://127.0.0.1:8000/api/formacions/${ this.for_ficha }`, this.formacionForm.value)
        .subscribe((response:any) => {
          if (response.status == "success") {
            this.success = response.message;
          }
          this.getFormacionList();
          this.reset();
        }, error => {
          this.error = error.error.message;
        });
    } else {
      this.httpClient.post('http://127.0.0.1:8000/api/formacions', this.formacionForm.value)
        .subscribe((response:any) => {
          if (response.status == "success") {
            this.success = response.message;
          }
          this.getFormacionList();
          this.reset();
        }, error => {
          this.error = error.error.message;
        });
    }
  }
    
  editFormacion (formacion: any) {
    this.for_ficha = formacion.for_ficha;
    this.formacionForm.setValue({
      for_ficha: formacion.for_ficha,
      for_tipo: formacion. for_tipo,
      for_nombre: formacion.for_nombre,
      // for_jornada: formacion. for_jornada,
      // for_fechainicio: formacion.for_fechainicio,
      // for_fechafin: formacion.for_fechafin,
      for_estado: formacion.for_estado,
    });
  }

  deleteFormacion (formacion: any) {
    if (confirm(`Estas seguro de eliminar esta formacion ${ formacion.for_nombre }`)) {
      this.httpClient.delete(`http://127.0.0.1:8000/api/formacions/${ formacion.for_ficha }`)
        .subscribe((response: any) => {
          if (response.status == "success") {
            this.success = response.message;
          }
          this.getFormacionList();
          this.reset();
        })
    }
  }

  reset() {
    this.for_ficha = null;
    this.formacionForm.setValue({
      for_ficha: (''),
      for_tipo: (''),
      for_nombre: (''),
      // for_jornada: (''),
      // for_fechainicio: (''),
      // for_fechafin: (''),
      for_estado: ('')
    });
  }

}
