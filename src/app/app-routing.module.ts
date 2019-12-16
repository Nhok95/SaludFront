import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BusinessComponent } from './components/business/business.component';
import { ContratacionComponent } from './components/contratacion/contratacion.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';


const routes: Routes = [      
  {path:'', redirectTo: 'home', pathMatch: 'full'},  
  {path: 'home', component: MainComponent},   //main page
  {path: 'profile', component: ProfileComponent},  //userprofile data
  {path: 'business', component: BusinessComponent}, // business offers
  {path: 'contratacion', component:ContratacionComponent}, //get a contract with Generali
  {path: 'chatbot', component:ChatbotComponent}, //talk with euGene Rali
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
