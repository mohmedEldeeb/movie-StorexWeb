import { NgModule }                from '@angular/core';
import { RouterModule, Routes }    from '@angular/router';
import { AddCategroyComponent }    from './pages/add-categroy/add-categroy.component';
import { AddMovieComponent }       from './components/add-movie/add-movie.component';
import { LoginComponent }          from './pages/login/login.component';
import { MovieComponent }          from './pages/movie/movie.component';
import { RegistrationComponent }   from './pages/registration/registration.component';
import { UpdateCategroyComponent } from './pages/update-categroy/update-categroy.component';
import { AuthGuard }               from './serves/auth/auth.guard';
import { UbdateMovieComponent }    from './pages/ubdate-movie/ubdate-movie.component';

const routes: Routes = [
  {path:'login',              component:LoginComponent                                   },
  {path:'registration',       component:RegistrationComponent                            },
  {path:'movie',              component:MovieComponent ,          canActivate:[AuthGuard]},
  {path:'add-movie',          component:AddMovieComponent ,       canActivate:[AuthGuard]},
  {path:'categroy',           component:AddCategroyComponent ,    canActivate:[AuthGuard]},
  {path:'update-categroy/:id',component:UpdateCategroyComponent , canActivate:[AuthGuard]},
  {path:'update-movie/:id',   component:UbdateMovieComponent ,    canActivate:[AuthGuard]},
  {path: '', redirectTo: '/movie', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
