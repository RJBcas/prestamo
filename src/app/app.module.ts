import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './Layout/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


import { FlexLayoutModule } from '@angular/flex-layout';
import { FondosComponent } from './Layout/fondos/fondos.component';

import { StoreModule } from '@ngrx/store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
//------------------------------------------------------------------
import { loadersReducer } from "./store/reducers/Loaders.reducers";
import { signUpReducer } from "./store/reducers/signUp.reducers";
import { userReducer } from "./store/reducers/user.reducers";
import { metaReducers } from "./store/reducers/";
import {  requestCreatReducer } from "./store/reducers/RequestCredit.reducers";

import { EffectsModule } from "@ngrx/effects";
import { SignUpEffects } from "./store/effects/sign-up.effect";
import { SignInEffect } from "./store/effects/sign-in.effects";
import { RequestCreditEffects } from "./store/effects/requestCredit.effects";
//------------------------------------------------------------------

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from "@angular/common/http";


@NgModule({
  declarations: [AppComponent, MenuComponent, FondosComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forRoot([SignUpEffects, SignInEffect,RequestCreditEffects]),
    StoreModule.forRoot(
      {
        loaders: loadersReducer,
        signUp: signUpReducer,
        user: userReducer,
        requetCredit: requestCreatReducer
      },
      { metaReducers }
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
  providers: [HttpClientModule, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
