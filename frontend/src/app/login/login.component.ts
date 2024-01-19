import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formularioRegistro:FormGroup;

  formData: any = {
    emailone: '',
    passwordone: ''
  }

  // formData: any = {
  //   email: '',
  //   password: ''
  // }
  constructor(
    private httpClient : HttpClient,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.formularioRegistro = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  // register() {
  //   this.httpClient.post('http://127.0.0.1:8000/api/register', {
  //     // name: 'Admin',
  //     email: 'admin@hotmail.com',
  //     password: '1234567890',
  //     usu_estado: 'Activo',
  //     per_id: '1072006043',
  //     car_id: 1,
  //   }).subscribe((response) => {
  //     console.log(response);
  //   })
    // console.log('login');
  // }

  login() {
    this.httpClient.post('http://127.0.0.1:8000/api/login', {
      email: this.formData.email,
      password: this.formData.password
    }).subscribe((response) => {
      console.log(response);
    })
    console.log('login');
  }

  // perfil() {
  //   this.httpClient.get('http://127.0.0.1:8000/api/user', { 
  //     headers: { 'Authorization': 'Bearer 1|B1pYgayfHpI9QIGkdC8vlLT1kz1D31DxOMqkl4yY0645f41e' } 
  //   }).subscribe((response) => {
  //     console.log(response);
  //   });
  // }

  // consultar()
  // {
  //   this.httpClient.post('http://127.0.0.1:8000/api/consultar', {
  //     numero_documento: '1072006043'
  //   }).subscribe((response) => {
  //     console.log(response);
  //   })
  // }

  // 1|B1pYgayfHpI9QIGkdC8vlLT1kz1D31DxOMqkl4yY0645f41e

  onSubmit() {
    this.httpClient.post('http://127.0.0.1:8000/api/login', {
      email: this.formData.emailone,
      password: this.formData.passwordone
    }).subscribe((response :any) => {
      console.log(response);
      if (response && response['status'] === 'success')  {
        // Redirige a la vista deseada (reemplaza 'nombre-de-la-vista' con tu ruta real)
        this.router.navigate(['/inicio']);
      } else {
        // Si no se logra iniciar sesión, muestra un mensaje al usuario
        alert('Usuario no encontrado o credenciales incorrectas');
      }
    }, (error) => {
      // En caso de error en la petición HTTP
      console.error('Error en la petición HTTP', error);
      // Puedes mostrar un mensaje de error más específico si lo deseas
      alert('Error en la autenticación. Por favor, inténtalo de nuevo.');
    });
  }
  // onSubmit() {
  //   this.httpClient.post('http://127.0.0.1:8000/api/login', {
  //     email: this.formData.email,
  //     password: this.formData.password
  //   }).subscribe((response) => {
  //     console.log(response);
  //   })
  // }

}
