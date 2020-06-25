import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { ConseillerComponent } from './conseiller/conseiller.component';
/*import { MenuComponent } from '../menu/menu.component';*/

const conseillerRoutes: Routes = [
  {
    path: '',
    component: ConseillerComponent,
    children: [
      /*{
        path: 'menu',
        component: MenuComponent
      },
      {
        path: '',
        redirectTo: 'menu',
        pathMatch: 'full'
      }*/
    ],
  }
];

@NgModule({
  declarations: [ConseillerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(conseillerRoutes)
  ]
})
export class ConseillerModule { }
