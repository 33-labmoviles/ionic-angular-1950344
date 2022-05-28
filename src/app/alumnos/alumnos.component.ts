import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'],
})
export class AlumnosComponent implements OnInit {

  constructor(private database: DatabaseService) { }


  alumnos = [

  ];

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
  
  eliminar(id){
    this.database.delete("alumnos", id).then(res =>{
      alert("Usuario eliminado");
    });
  }
  
}

