import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastsContainerComponent } from './components/toasts-container/toasts-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiService } from './serves/api/api.service';
import { HttpInterceptorService } from './serves/http-interceptor.service';
import { MovieComponent } from './pages/movie/movie.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { AddCategroyComponent } from './pages/add-categroy/add-categroy.component';
import { UpdateCategroyComponent } from './pages/update-categroy/update-categroy.component';
import { UbdateMovieComponent } from './pages/ubdate-movie/ubdate-movie.component';
import { FilterPipe } from './pipes/filter-pipes';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ToastsContainerComponent,
    NavbarComponent,
    MovieComponent,
    AddMovieComponent,
    AddCategroyComponent,
    UpdateCategroyComponent,
    UbdateMovieComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ApiService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:HttpInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
