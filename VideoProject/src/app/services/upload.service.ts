import { Injectable } from '@angular/core';

import { Upload } from '../models/upload.model';
import { AngularFireModule } from 'angularfire2'
import { GalleryImage } from '../models/GalleryImage.model'
import * as firebase from 'firebase/app';
import { AngularFireDatabase, AngularFireList,AngularFireObject } from 'angularfire2/database'
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

 private basePath ='/uploads';
 private uploads : AngularFireList<GalleryImage[]>;

  constructor(private ngFire : AngularFireModule , private db: AngularFireDatabase) { }

  uploadFile( upload: Upload){
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`)
    .put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
    //Three observers
    //1. state changed observer
    (snapshot)=>{
      // upload progress
      upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes ) *100;
      console.log(upload.progress);
    },
    //2. error observer
    (error)=>{
      //upload failed 
      console.log(error);
    },
    //3. success observer
    (): any =>{
      upload.url = uploadTask.snapshot.downloadURL;
      upload.name = upload.file.name;
      this.saveFileData(upload);
    }
  );
}
  private saveFileData( upload : Upload){
    this.db.list(`${ this.basePath}/`).push(upload);
    console.log("file saved " + upload.url);
  }
}
