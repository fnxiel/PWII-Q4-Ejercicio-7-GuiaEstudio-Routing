import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PrimerapantallaComponent } from './primerapantalla/primerapantalla.component';
import { SegundapantallaComponent } from './segundapantalla/segundapantalla.component';

const routes: Routes = [
  {path: "primerapantalla", component: PrimerapantallaComponent},
  {path: "segundapantalla", component: SegundapantallaComponent},
  {path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
