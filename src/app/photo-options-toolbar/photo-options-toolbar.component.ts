import { Component, Injectable } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { SharedImageService } from './shared-image-for-upload.service';


@Component({
    selector: 'photo-options-toolbar',
    templateUrl: 'photo-options-toolbar.component.html'
})
export class PhotoOptionsToolbar {
    constructor(
        public dialog: MdDialog,
        public sharedImageService: SharedImageService
    ) {
        window.addEventListener('preview-photo', () => {
            this.openDialog();
        });
    }

    // photoForUpload: any = {
    //     file: {}
    //     // src: this.sharedImageService.src
    // };


    openDialog() {
        let dialogRef = this.dialog.open(PhotoUploadPreviewComponent);
        dialogRef.afterClosed().subscribe(result => {
            if(<string>result.toLowerCase() === 'yes') {
                // @TODO begin the upload process
            }
        });
    }

    previewPhoto(files): void {
        // let photoForUpload = this.photoForUpload;
        let sharedImageService = this.sharedImageService;
        sharedImageService.file = files[0];
        let reader = new FileReader();
        reader.onload = function (e) {
            let tempReader = <FileReader>event.target;
            // photoForUpload.src = tempReader.result;
            sharedImageService.src = tempReader.result;
            let photoPreviewEvent = new Event('preview-photo');
            window.dispatchEvent(photoPreviewEvent);
        }

        reader.readAsDataURL(files[0]);
    }
}

@Component({
  selector: 'image-upload-dialog',
  templateUrl: 'image-upload-dialog.component.html'
})
export class PhotoUploadPreviewComponent{
  constructor(
      public dialogRef: MdDialogRef<PhotoUploadPreviewComponent>,
      public sharedImageService: SharedImageService
      ) {}
}