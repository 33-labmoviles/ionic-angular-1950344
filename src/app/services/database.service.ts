import { Injectable } from '@angular/core';
import{AngularFirestore} from '@angular/fire/compat/firestore'
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private firestore: AngularFirestore) { }

async create(collection, dato){
  return await this.firestore.collection(collection).add(dato);
}

async getAll(collection){
  return await this.firestore.collection(collection).snapshotChanges();
}

async getById(collection, id){
return await this.firestore.collection(collection).doc(id).get();
}
async delete(collection, id){
  return await this.firestore.collection(collection).doc(id).delete();
}

async update(collection, id, dato){
  return await this.firestore.collection(collection).doc(id).set(dato);
}



}
