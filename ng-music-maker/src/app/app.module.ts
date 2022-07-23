import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditDrumTrackComponent } from './view/edit-drum-track/edit-drum-track.component';
import { FormsModule } from '@angular/forms';
import {PanelModule} from 'primeng/panel';

@NgModule({
  declarations: [
    AppComponent,
    EditDrumTrackComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    PanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
