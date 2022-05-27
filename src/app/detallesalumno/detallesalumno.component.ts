import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detallesalumno',
  templateUrl: './detallesalumno.component.html',
  styleUrls: ['./detallesalumno.component.scss'],
})
export class DetallesalumnoComponent implements OnInit {

  constructor(private ruta: ActivatedRoute) { }

  ngOnInit() {
    this.obtenerdetalleAlumno(this.matricula);
  }

  alumnos = [

    {"Nombre": "Abraham",
     "Apellido": "Ramirez",
     "Matricula": "4582358"
    },
    {"Nombre": "Aylin",
     "Apellido": "Demetci",
     "Matricula": "5486325"
    },
    {"Nombre": "Brian",
     "Apellido": "Esquivel",
     "Matricula": "4856987"
    },
    {"Nombre": "Diego",
     "Apellido": "Davila",
     "Matricula": "5846856"
    },
    {"Nombre": "Diego",
     "Apellido": "Jasso",
     "Matricula": "7485932"
    },
    {"Nombre": "Julio",
     "Apellido": "Manuel",
     "Matricula": "4210565"
    },
    {"Nombre": "Luis",
     "Apellido": "Villanueva",
     "Matricula": "7485315"
    },
    {"Nombre": "Luis",
     "Apellido": "Tamez",
     "Matricula": "4541265"
    },
    {"Nombre": "Manuel",
     "Apellido": "Juarez",
     "Matricula": "8541235"
    },
    {"Nombre": "Rogel",
     "Apellido": "Guel",
     "Matricula": "8541239"
    },
    {"Nombre": "Sergio",
     "Apellido": "Gutierrez",
     "Matricula": "9842658"
    },
    {"Nombre": "Omar",
     "Apellido": "Garza",
     "Matricula": "1950344"
    },
    {"Nombre": "Juan",
     "Apellido": "Torres",
     "Matricula": "7458692"
    },
    {"Nombre": "Bryan",
     "Apellido": "Castillo",
     "Matricula": "1285964"
    },
    {"Nombre": "Emiliano",
     "Apellido": "Rodriguez",
     "Matricula": "7412958"
    },
  
  ];
  alumnoDetalle: any = {}

  matricula: string = this.ruta.snapshot.params.id;
  obtenerdetalleAlumno(matricula: string): any{
    console.log(matricula);
    return this.alumnoDetalle;
  }

}
