import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantillaComponent } from './vista/plantilla/plantilla.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatDialogModule} from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { CarnetComponent } from './vista/carnet/carnet.component';
import { PersonasComponent } from './vista/personas/personas.component';
import { CargosComponent } from './vista/cargos/cargos.component';
import { EventosComponent } from './vista/eventos/eventos.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './vista/users/users.component';
import { InicioComponent } from './vista/inicio/inicio.component';
import { AsistenciaComponent } from './vista/asistencia/asistencia.component';
import { ElementosComponent } from './vista/elementos/elementos.component';
import { EntradaSalidasComponent } from './vista/entrada-salidas/entrada-salidas.component';
import { FormacionsComponent } from './vista/formacions/formacions.component';
import { ReportesComponent } from './vista/reportes/reportes.component';
import { TipoElementosComponent } from './vista/tipo-elementos/tipo-elementos.component';
import { NavbarComponent } from './componenst/navbar/navbar.component';
import { AsideComponent } from './componenst/aside/aside.component';
import { FooterComponent } from './componenst/footer/footer.component';
import { FichaAprendizsComponent } from './vista/ficha-aprendizs/ficha-aprendizs.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'inicio', component: InicioComponent
  },
  {
    path: 'cargos', component: CargosComponent
    
  },
  {
    path: 'users', component: UsersComponent
  },
  {
    path: 'asistencia', component: AsistenciaComponent
  },
  {
    path: 'carnet', component: CarnetComponent
  },
  {
    path: 'elementos', component: ElementosComponent
  }, 
  {
    path: 'entrada_salidas', component: EntradaSalidasComponent
  },
  {
    path: 'eventos', component: EventosComponent
  },
  {
    path: 'formacions', component: FormacionsComponent
  },
  {
    path: 'reportes', component: ReportesComponent
  },
  {
    path: 'personas', component: PersonasComponent
  },
  {
    path: 'tipo_elementos', component: TipoElementosComponent
  },
  {
    path: 'ficha_aprendiz', component: FichaAprendizsComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    PlantillaComponent,
    LoginComponent,
    CarnetComponent,
    PersonasComponent,
    CargosComponent,
    EventosComponent,
    UsersComponent,
    InicioComponent,
    AsistenciaComponent,
    ElementosComponent,
    EntradaSalidasComponent,
    FormacionsComponent,
    ReportesComponent,
    TipoElementosComponent,
    NavbarComponent,
    AsideComponent,
    FooterComponent,
    FichaAprendizsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
