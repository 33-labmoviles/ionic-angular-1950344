import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesalumnoComponent } from './detallesalumno.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [DetallesalumnoComponent],
  exports: [DetallesalumnoComponent]
})
export class AlumnosComponentModule {}