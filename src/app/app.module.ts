import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import {UserEffects} from './store/user/user.effects';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store/app.store';
import {environment} from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {UserService} from './services/user.service';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {AuthService} from './services/auth.service';
import {AuthGuardService} from './services/auth-guard.service';
import { GroupCreateDialogComponent } from './components/group-create-dialog/group-create-dialog.component';
import {AuthInterceptor} from './auth-interceptor';
import {GroupEffects} from './store/group/group.effects';
import {GroupService} from "./services/group.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AuthLayoutComponent,
    DashboardLayoutComponent,
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
    GroupCreateDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    MatDialogModule,
    !environment.production ? StoreDevtoolsModule : [],
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
        UserEffects,
        GroupEffects
    ])
  ],
  providers: [
      UserService,
      AuthService,
      AuthGuardService,
      GroupService,
      {
        provide : HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi   : true,
      },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
