import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { MesasInterface } from '../models/mesas';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  private mesas: Observable<MesasInterface[]>;
  private mesasCollection: AngularFirestoreCollection<MesasInterface>;
  private mesa: Observable<MesasInterface>;
  private mesaDoc: AngularFirestoreDocument<MesasInterface>;
  public selectedMesa: MesasInterface = { Id: null };


  constructor(private afs: AngularFirestore) {

    this.mesasCollection = afs.collection<MesasInterface>('mesas')
    this.mesas = this.mesasCollection.valueChanges();

    this.ngOnInit();
  }

  ngOnInit() {
  }
  //Mesas*************************************************
  addMesas(mesa: MesasInterface): void {
    this.mesasCollection.add(mesa);
  }
  getAllMesas() {
    return this.mesas = this.mesasCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as MesasInterface;
          data.Id = action.payload.doc.id;
          return data;
        });
      }));
  }
  getMesa(idMesa: string) {
    this.mesaDoc = this.afs.doc<MesasInterface>(`mesas/${idMesa}`);
    return this.mesa = this.mesaDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists == false) {
        return null;
      } else {
        const data = action.payload.data() as MesasInterface;
        data.Id = action.payload.id;
        return data;
      }
    }));
  }
  getMesas() {
    return this.mesas = this.mesasCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as MesasInterface;
          data.Id = action.payload.doc.id;
          return data;
        });
      }));
  }
  updateMesas(mesa: MesasInterface): void {
    let idMesa = mesa.Id;
    this.mesaDoc = this.afs.doc<MesasInterface>(`mesas/${idMesa}`);
    this.mesaDoc.update(mesa);
  }
  deleteMesa(idMesa: string): void {
    this.mesaDoc = this.afs.doc<MesasInterface>(`mesas/${idMesa}`);
    this.mesaDoc.delete();
  }
}
