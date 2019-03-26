import { Component, OnInit } from '@angular/core';
import { Upload } from '../models/upload.model';
import { UploadService } from '../services/upload.service';
import * as _ from 'lodash';// helps to loop over files more efficiently

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent  {

  files: FileList;
  upload : Upload;

  constructor( private uploadService: UploadService) { }

  handleFiles(event){
    this.files = event.target.files;
  }

  uploadFiles(){
    const filesToUpload = this.files;
   // console.log(_.range(filesToUpload.length))
   const fileIdx = _.range(filesToUpload.length);

   _.each(fileIdx, (idx)=>{
    // console.log(filesToUpload[idx]);
    this.upload = new Upload(filesToUpload[idx]);
    this.uploadService.uploadFile(this.upload);
   })
  }
}
