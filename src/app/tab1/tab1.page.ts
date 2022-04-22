import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  alumnos = [

    {"Nombre": "Abraham",
     "Apellido": "Ramirez",
     "Matricula": "ABC123"
    },
    {"Nombre": "Aylin",
     "Apellido": "Demetci",
     "Matricula": "ABC123"
    },
    {"Nombre": "Brian",
     "Apellido": "Esquivel",
     "Matricula": "ABC123"
    },
    {"Nombre": "Diego",
     "Apellido": "Davila",
     "Matricula": "ABC123"
    },
    {"Nombre": "Diego",
     "Apellido": "Jasso",
     "Matricula": "ABC123"
    },
    {"Nombre": "Julio",
     "Apellido": "Manuel",
     "Matricula": "ABC123"
    },
    {"Nombre": "Luis",
     "Apellido": "Villanueva",
     "Matricula": "ABC123"
    },
    {"Nombre": "Luis",
     "Apellido": "Tamez",
     "Matricula": "ABC123"
    },
    {"Nombre": "Manuel",
     "Apellido": "Juarez",
     "Matricula": "ABC123"
    },
    {"Nombre": "Rogel",
     "Apellido": "Guel",
     "Matricula": "ABC123"
    },
    {"Nombre": "Sergio",
     "Apellido": "Gutierrez",
     "Matricula": "ABC123"
    },
    {"Nombre": "Omar",
     "Apellido": "Garza",
     "Matricula": "ABC123"
    },
    {"Nombre": "Juan",
     "Apellido": "Torres",
     "Matricula": "ABC123"
    },
    {"Nombre": "Bryan",
     "Apellido": "Castillo",
     "Matricula": "ABC123"
    },
    {"Nombre": "Emiliano",
     "Apellido": "Rodriguez",
     "Matricula": "ABC123"
    },
  
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
