import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const ROUTES: Routes = [

    { path: 'home', component: HomeComponent },
    //{ path: 'profesionales/:profesional', component: TrabajadoresComponent },
    //{ path: 'resultado/:text', component: ResultadoComponent },
    { path: '**', pathMatch:'full',redirectTo:'home' }

];

export const APP_ROUTING = RouterModule.forRoot(ROUTES,{useHash:true});