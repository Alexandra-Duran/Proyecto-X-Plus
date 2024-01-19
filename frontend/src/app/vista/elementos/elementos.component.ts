import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PersonasComponent } from '../personas/personas.component';
import { TipoElementosComponent } from '../tipo-elementos/tipo-elementos.component';

@Component({
  selector: 'app-elementos',
  templateUrl: './elementos.component.html',
  styleUrls: ['./elementos.component.css']
})
export class ElementosComponent implements OnInit {
  error:string = '';
  success:string = '';

  tipo_elementos:any[] = [];
  personas:any[] = [];
  elementos:any[] = [];
  ele_serial:any = null;

  elementoForm = new FormGroup({
    ele_serial: new FormControl(''),
    ele_tipo: new FormControl(''),
    ele_marca: new FormControl(''),
    ele_modelo: new FormControl(''), 
    ele_color: new FormControl(''),
    ele_foto: new FormControl(''),
    ele_observacion: new FormControl(''),
    ele_estado: new FormControl(''),
    per_id: new FormControl(''),
    tip_id: new FormControl('')
    
  });

  constructor (
    private httpClient : HttpClient
  ) {}

  ngOnInit(): void {
    this.getTipo_elementoList();
    this.getPersonaList();
    this.getElementoList();
  }

  getTipo_elementoList () {
    this.httpClient.get('http://127.0.0.1:8000/api/tipo-elementos')
      .subscribe((response:any) => {
        this.tipo_elementos = response.data;
    })
  }
  getPersonaList () {
    this.httpClient.get('http://127.0.0.1:8000/api/personas')
      .subscribe((response:any) => {
        this.personas = response.data;
    })
  }
  getElementoList () {
    this.httpClient.get('http://127.0.0.1:8000/api/elementos')
      .subscribe((response:any) => {
        this.elementos = response.data;
    })
  }

  getNombrePersona(per_id: number): string {
    const persona = this.personas.find(persona => persona.per_documento === per_id);
    return persona ? persona.per_nombre : 'Nombre no encontrado';
  }

  getNombreTipoElemento(tip_id: number): string {
    const tipo_elemento = this.tipo_elementos.find(tipo_elemento => tipo_elemento.id === tip_id);
    return tipo_elemento ? tipo_elemento.car_nombre : 'Tipo elemento no encontrado';
  }


  onSubmit () {
    this.error = '';
    this.success = '';
    if (this.ele_serial != null) {
      this.httpClient.put(`http://127.0.0.1:8000/api/elementos/${ this.ele_serial }`, this.elementoForm.value)
        .subscribe((response:any) => {
          if (response.status == "success") {
            this.success = response.message;
          }
          this.getElementoList();
          this.reset();
        }, error => {
          this.error = error.error.message;
        });
    } else {
      this.httpClient.post('http://127.0.0.1:8000/api/elementos', this.elementoForm.value)
        .subscribe((response:any) => {
          if (response.status == "success") {
            this.success = response.message;
          }
          this.getElementoList();
          this.reset();
        }, error => {
          this.error = error.error.message;
        });
    }
  }
  
  editElemento (elemento: any) {
    this.ele_serial = elemento.ele_serial;
    this.elementoForm.setValue({
      ele_serial: elemento.ele_serial, 
      ele_tipo: elemento.ele_tipo,
      ele_marca: elemento.ele_marca,
      ele_modelo: elemento.ele_modelo, 
      ele_color: elemento.ele_color,
      ele_foto: elemento.ele_foto,
      ele_observacion: elemento.ele_observacion,
      ele_estado: elemento.ele_estado,
      per_id: elemento.per_id,
      tip_id: elemento.tip_id

    });
  }

  deleteElemento (elemento: any) {
    if (confirm(`Estas seguro de eliminar el elemento ${ elemento.ele_serial }`)) {
      this.httpClient.delete(`http://127.0.0.1:8000/api/elementos/${ elemento.ele_serial }`)
        .subscribe((response: any) => {
          if (response.status == "success") {
            this.success = response.message;
          }
          this.getElementoList();
          this.reset();
        })
    }
  }

  reset() {
    this.ele_serial = null;
    this.elementoForm.setValue({
      ele_serial: (''),
      ele_tipo: (''),
      ele_marca: (''),
      ele_modelo: (''), 
      ele_color: (''),
      ele_foto: (''),
      ele_observacion: (''),
      ele_estado: (''),
      per_id: (''),
      tip_id: ('')
    });
  }
}
