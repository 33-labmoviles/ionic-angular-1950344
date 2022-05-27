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
