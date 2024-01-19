import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.css']
})
export class CargosComponent implements OnInit {
  error:string = '';
  success:string = '';

  cargos:any[] = [];
  car_id:any = null;

  cargoForm = new FormGroup({
    car_nombre: new FormControl(''),
    car_descripcion: new FormControl(''),
    car_estado: new FormControl('')
  });

  constructor (
    private httpClient : HttpClient
  ) {}

  ngOnInit(): void {
    this.getCargoList();
  }

  getCargoList () {
    this.httpClient.get('http://127.0.0.1:8000/api/cargos')
      .subscribe((response:any) => {
        this.cargos = response.data;
    })
  }

  onSubmit () {
    this.error = '';
    this.success = '';
    if (this.car_id != null) {
      this.httpClient.put(`http://127.0.0.1:8000/api/cargos/${ this.car_id }`, this.cargoForm.value)
        .subscribe((response:any) => {
          if (response.status == "success") {
            this.success = response.message;
          }
          this.getCargoList();
          this.reset();
        }, error => {
          this.error = error.error.message;
        });
    } else {
      this.httpClient.post('http://127.0.0.1:8000/api/cargos', this.cargoForm.value)
        .subscribe((response:any) => {
          if (response.status == "success") {
            this.success = response.message;
          }
          this.getCargoList();
          this.reset();
        }, error => {
          this.error = error.error.message;
        });
    }
  }

  editCargo (cargo: any) {
    this.car_id = cargo.id;
    this.cargoForm.setValue({
      // name: product.name,
      // price: product.price,
      car_nombre: cargo.car_nombre,
      car_descripcion: cargo.car_descripcion,
      car_estado: cargo.car_estado
    });
  }

  deleteCargo (cargo: any) {
    if (confirm(`Estas seguro de eliminar el cargo ${ cargo.car_nombre }`)) {
      this.httpClient.delete(`http://127.0.0.1:8000/api/cargos/${ cargo.id }`)
        .subscribe((response: any) => {
          if (response.status == "success") {
            this.success = response.message;
          }
          this.getCargoList();
          this.reset();
        })
    }
  }

  reset() {
    this.car_id = null;
    this.cargoForm.setValue({
      car_nombre: (''),
      car_descripcion: (''),
      car_estado: ('')
    });
  }
}
