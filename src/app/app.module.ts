import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlatComponent } from './components/flat/flat.component';
import { FlatsComponent } from './components/flats/flats.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    FlatComponent,
    FlatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAngularModule,
  ],
  providers: [AmplifyService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
