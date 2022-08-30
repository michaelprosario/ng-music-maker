import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditDrumTrackComponent } from './view/edit-drum-track/edit-drum-track.component';
import { FormsModule } from '@angular/forms';
import {PanelModule} from 'primeng/panel';
import { DrumTrackRowComponent } from './view/drum-track-row/drum-track-row.component';
import { DrumTrackCellComponent } from './view/drum-track-cell/drum-track-cell.component';
import { HttpClientModule } from '@angular/common/http';
import { EditProgressionPlayerComponent } from './view/edit-progression-player/edit-progression-player.component';

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
  declarations: [
    AppComponent,
    EditDrumTrackComponent,
    DrumTrackRowComponent,
    DrumTrackCellComponent,
    EditProgressionPlayerComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    PanelModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
