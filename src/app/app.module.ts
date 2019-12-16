import { NgModule } from '@angular/core';

// Modules
import { BrowserModule }        from '@angular/platform-browser'; //
import { FormsModule }          from '@angular/forms';            // 2-way data binding
import { AppRoutingModule }     from './app-routing.module';      // router-outlet
import { PrimengModule }        from './primeng.module';          // primeng

//Components
import { AppComponent }          from './app.component';
import { MainComponent }         from './components/main/main.component';
import { ProfileComponent }      from './components/profile/profile.component';
import { BusinessComponent }     from './components/business/business.component';
import { ContratacionComponent } from './components/contratacion/contratacion.component';

//Services

//Pipes

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProfileComponent,
    BusinessComponent,
    ContratacionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    AppRoutingModule,
    PrimengModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
