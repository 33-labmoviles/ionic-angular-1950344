import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-detallesalumno',
  templateUrl: './detallesalumno.component.html',
  styleUrls: ['./detallesalumno.component.scss'],
})
export class DetallesalumnoComponent implements OnInit {

  constructor(
    private ruta: ActivatedRoute,
    public actionSheetC: ActionSheetController) { }

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

    for(let i = 0; i < this.alumnos.length; i++){
      if(matricula == this.alumnos[i].Matricula){
        this.alumnoDetalle = this.alumnos[i];
      }
    }

    return this.alumnoDetalle;
  }



  async mostrarActionSheet() {
    const actionSheet = await this.actionSheetC.create({
      header: 'Opciones',
      cssClass: 'mi-primer-action-sheet',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        id: 'delete-button',
        data: {
          type: 'delete'
        },
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        data: 10,
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'happy-outline',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }

}
