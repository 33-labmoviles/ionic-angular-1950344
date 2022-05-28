import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-detallesalumno',
  templateUrl: './detallesalumno.component.html',
  styleUrls: ['./detallesalumno.component.scss'],
})
export class DetallesalumnoComponent implements OnInit {

  constructor(
    private ruta: ActivatedRoute,
    public actionSheetC: ActionSheetController,
    private database: DatabaseService) { }

    alumnos = [

    ];


  ngOnInit() {
    
    this.database.getAll('alumnos').then(firebaseResponse => {
      firebaseResponse.subscribe(alumnosRef => {
        this.alumnos = alumnosRef.map(alumnoRef =>{
          let alumno=alumnoRef.payload.doc.data();
          alumno['id'] = alumnoRef.payload.doc.id;
          return alumno;
        }
          )
      })
    });
  }

  
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
