import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { Register1Component } from './pages/Auth/oldregister/register1.component';
import { Login1Component } from './pages/Auth/oldlogin/login1.component';
import {EtudiantComponent} from "./pages/etudiant/etudiant.component";
import {ChambreComponent} from './pages/chambre/chambre.component';
import {EquipementComponent} from './pages/equipement/equipement.component';
import {ChambreDetailsComponent} from './pages/chambre-details/chambre-details.component';
import {ChambreGroupComponent} from './pages/chambre-group/chambre-group.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
      }
    ]
  }, {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule)
      }
    ]
  },
  { path: 'regisrter',       component: Register1Component },
  { path: 'login1',       component: Login1Component },
  { path: 'etudiant',       component: EtudiantComponent },
  {
  },
  { path: 'chambre',       component: ChambreComponent },
  { path: 'equipement',       component: EquipementComponent },
  {path: 'chambre-details/:id', component: ChambreDetailsComponent},
  { path: 'chambre-group', component: ChambreGroupComponent },


  {
  },
  { path: 'registerr',       component: Register1Component },
  { path: 'login1',       component: Login1Component },

  {
    path: '**',
    redirectTo: 'dashboard'
  },

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: false
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
