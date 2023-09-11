import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LogoutComponent } from './logout/logout.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';

const routes: Routes = [
  {path:'' ,redirectTo:'home',pathMatch:'full' },
  {path:'home' , component:HomeComponent},
  {path:'about' , component:AboutComponent},
  {path:'contacts' , component:ContactsComponent},
  {path:'moviedetails/:id' , component:MoviedetailsComponent},
  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegisterComponent},
  {path:'logout' , component:LogoutComponent},
  {path:'**' , component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
