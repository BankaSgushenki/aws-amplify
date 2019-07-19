import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlatsComponent } from './components/flats/flats.component';
import { AuthGuard } from './services/auth-guard.service';


const routes: Routes = [
  { path: 'flats', component: FlatsComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
