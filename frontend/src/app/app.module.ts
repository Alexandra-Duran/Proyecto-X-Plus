import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { IngresarComponent } from './ingresar/ingresar.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantillaComponent,
    CargoComponent,
    NavbarComponent,
    MenuComponent,
    FooterComponent,
    IngresarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
