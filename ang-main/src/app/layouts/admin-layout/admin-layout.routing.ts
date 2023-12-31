import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/Auth/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';

import {EtudiantComponent} from "../../pages/etudiant/etudiant.component";
import {ClubComponent} from "../../pages/club/club.component";
import {DetailUniversiteComponent} from "../../pages/detail-universite/detail-universite.component";

import { AuthentificationGuard } from 'src/app/pages/Auth/authentification.guard';
import { UserGuard } from 'src/app/pages/Auth/user.guard';
import { UsersComponent } from 'src/app/pages/Auth/users/users.component';
import {BlocDetailsComponent} from "../../pages/bloc/bloc-details/bloc-details.component";
import {BibliothequeComponent} from "../../pages/bibliotheque/bibliotheque.component";
import {ChambreComponent} from '../../pages/chambre/chambre.component';
import {EquipementComponent} from '../../pages/equipement/equipement.component';
import {ChambreDetailsComponent} from '../../pages/chambre-details/chambre-details.component';
import { UniversiteComponent } from 'src/app/pages/universite/universite.component';
import {BlocComponent, BlocDialog} from "../../pages/bloc/bloc.component";
import {FoyerComponent} from "../../pages/foyer/foyer.component";
import {DetailsfoyerComponent} from "../../pages/detailsfoyer/detailsfoyer.component";
import {SuggestionsComponent} from "../../pages/suggestions/suggestions.component";
import {RestaurantComponent} from "../../pages/restaurant/restaurant.component";
import { ReservationComponent ,ReservationEditDialog,ReservationDialog} from 'src/app/pages/reservation/reservation.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent ,  canActivate:[AuthentificationGuard,UserGuard] },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'etudiant',           component: EtudiantComponent ,  canActivate:[AuthentificationGuard,UserGuard] },
    { path :'club', component: ClubComponent ,  canActivate:[AuthentificationGuard,UserGuard] },
    { path: 'detail/:id', component: DetailUniversiteComponent },
    { path: 'users',    component:UsersComponent,  canActivate:[AuthentificationGuard,UserGuard] },
    { path: 'bloc',          component:BlocComponent ,  canActivate:[AuthentificationGuard,UserGuard] },
    { path: 'bibliotheque/:idBloc', component: BibliothequeComponent ,  canActivate:[AuthentificationGuard,UserGuard] },
    { path: 'bloc-details/:idBloc', component: BlocDetailsComponent ,  canActivate:[AuthentificationGuard,UserGuard] },
    { path: 'chambre',           component: ChambreComponent ,  canActivate:[AuthentificationGuard,UserGuard] },
    { path: 'equipement',           component: EquipementComponent ,  canActivate:[AuthentificationGuard,UserGuard] },
    { path: 'chambre-details/:id', component: ChambreDetailsComponent ,  canActivate:[AuthentificationGuard,UserGuard] },
    { path: 'maps',           component: MapsComponent },
    { path: 'uni',           component: UniversiteComponent ,  canActivate:[AuthentificationGuard,UserGuard] },
    { path: 'foyer',          component:FoyerComponent ,  canActivate:[AuthentificationGuard,UserGuard] },
    { path: 'bloc/:idFoyer', component: BlocComponent ,  canActivate:[AuthentificationGuard,UserGuard] },
    { path: 'foyer/consulterblocs/:idFoyer', component: DetailsfoyerComponent ,  canActivate:[AuthentificationGuard,UserGuard]  },
    { path: 'foyer/suggestion/:idFoyer',          component:SuggestionsComponent ,  canActivate:[AuthentificationGuard,UserGuard] },
    { path: 'res/:id',           component: ReservationComponent ,  canActivate:[AuthentificationGuard,UserGuard] },
    { path: 'restau',           component: RestaurantComponent ,  canActivate:[AuthentificationGuard,UserGuard] },
    { path: 'receive/:id',           component: ReservationDialog ,  canActivate:[AuthentificationGuard,UserGuard] },


];

