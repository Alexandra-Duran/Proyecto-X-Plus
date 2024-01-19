import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-tipo-elementos',
  templateUrl: './tipo-elementos.component.html',
  styleUrls: ['./tipo-elementos.component.css']
})
export class TipoElementosComponent {
  error:string = '';
  success:string = '';

  tipo_elementos:any[] = [];
  tip_id:any = null;

  tipo_elementoForm = new FormGroup({
    tip_nombre: new FormControl(''),
    tip_descripcion: new FormControl(''),
    tip_estado: new FormControl('')
    
  });

  constructor (
    private httpClient : HttpClient
  ) {}

  ngOnInit(): void {
    this.getTipo_elementoList();
    
  }

  getTipo_elementoList () {
    this.httpClient.get('http://127.0.0.1:8000/api/tipo-elementos')
      .subscribe((response:any) => {
        this.tipo_elementos = response.data;
    })
  }

  onSubmit () {
    this.error = '';
    this.success = '';
    if (this. tip_id != null) {
      this.httpClient.put(`http://127.0.0.1:8000/api/tipo-elementos/${ this.tip_id }`, this.tipo_elementoForm.value)
        .subscribe((response:any) => {
          if (response.status == "success") {
            this.success = response.message;
          }
          this.getTipo_elementoList();
          this.reset();
        }, error => {
          this.error = error.error.message;
        });
    } else {
      this.httpClient.post('http://127.0.0.1:8000/api/tipo-elementos', this.tipo_elementoForm.value)
        .subscribe((response:any) => {
          if (response.status == "success") {
            this.success = response.message;
          }
          this.getTipo_elementoList();
          this.reset();
        }, error => {
          this.error = error.error.message;
        });
    }
  }

  editTipo_elemento (tipo_elemento: any) {
    this.tip_id = tipo_elemento.id;
    this.tipo_elementoForm.setValue({
      // name: product.name,
      // price: product.price,
      tip_nombre: tipo_elemento.tip_nombre,
      tip_descripcion: tipo_elemento.tip_descripcion,
      tip_estado: tipo_elemento.tip_estado,
      
    });
  }

  deleteTipo_elemento (tipo_elemento: any) {
    if (confirm(`Estas seguro de eliminar el elemento ${ tipo_elemento.id }`)) {
      this.httpClient.delete(`http://127.0.0.1:8000/api/tipo-elementos/${ tipo_elemento.id }`)
        .subscribe((response: any) => {
          if (response.status == "success") {
            this.success = response.message;
          }
          this.getTipo_elementoList();
          this.reset();
        })
    }
  }

  reset() {
    this.tip_id = null;
    this.tipo_elementoForm.setValue({
      tip_nombre: (''),
      tip_descripcion: (''),
      tip_estado: (''),
    });
  }
}


