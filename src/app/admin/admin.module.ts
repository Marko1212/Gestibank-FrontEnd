import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { AdminComponent } from './admin/admin.component';
/*import { MenuComponent } from '../menu/menu.component';*/

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
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
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ]
})
export class AdminModule { }
