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
import { CargoComponent } from './vista/cargo/cargo.component';
import { NavbarComponent } from './vista/navbar/navbar.component';
import { MenuComponent } from './vista/menu/menu.component';
import { FooterComponent } from './vista/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { CarnetComponent } from './vista/carnet/carnet.component';
import { PersonasComponent } from './vista/personas/personas.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantillaComponent,
    CargoComponent,
    NavbarComponent,
    MenuComponent,
    FooterComponent,
    LoginComponent,
    CarnetComponent,
    PersonasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
