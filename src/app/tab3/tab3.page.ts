import { Component, Input } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private database: DatabaseService) {}

  alumnos = [

    
  ];

  @Input() Nombre: string = "";
  @Input() Apellido: string = "";
  @Input() Matricula: string = "";

  agregarAlumno(): void {
    var nuevoAlumno: any = {
      "Nombre": this.Nombre,
      "Apellido": this.Apellido,
      "Matricula": this.Matricula
    }

    this.database.create('alumnos',nuevoAlumno);

    this.alumnos.push(nuevoAlumno); 

   

    console.log(this.alumnos); 
  }

}
