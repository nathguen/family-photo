import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdToolbarModule, MdSidenavModule, MdIconModule, MdMenuModule, MdButtonModule, MdCardModule, MdDialogModule } from '@angular/material';


import { AppComponent } from './app.component';
import { PhotoOptionsToolbar, PhotoUploadPreviewComponent } from './photo-options-toolbar/photo-options-toolbar.component';
import { SharedImageService } from './photo-options-toolbar/shared-image-for-upload.service';

@NgModule({
  declarations: [
    AppComponent,
    PhotoOptionsToolbar,
    PhotoUploadPreviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdSidenavModule,
    MdIconModule,
    MdMenuModule,
    MdButtonModule,
    MdCardModule,
    MdDialogModule
  ],
  entryComponents: [
    PhotoOptionsToolbar,
    PhotoUploadPreviewComponent
  ],
  providers: [SharedImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
