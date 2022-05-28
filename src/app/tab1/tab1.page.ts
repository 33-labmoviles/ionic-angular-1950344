import { Component, Input } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  alumnos = [

   
  
  ];


  constructor(private database: DatabaseService) {}


ngOnInit(){
  this.database.getAll('alumnos').then(firebaseResponse => {
    firebaseResponse.subscribe(alumnosRef => {
      this.alumnos = alumnosRef.map(alumnoRef =>{
        let alumno=alumnoRef.payload.doc.data();
        alumno['id'] = alumnoRef.payload.doc.id;
        return alumno;
      }
        )
    })
  })
}

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
    

    

   this.alumnos.sort(function(a, b) {
    var nameA = a.Nombre.toUpperCase(); 
    var nameB = b.Nombre.toUpperCase(); 
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    return 0;
  });

    console.log(this.alumnos); 
  }

}
