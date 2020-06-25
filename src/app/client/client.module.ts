import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { ClientComponent } from './client/client.component';
import { ViewClientComponent } from './view-client/view-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';
/*import { MenuComponent } from '../menu/menu.component';*/

const clientRoutes: Routes = [
  {
    path: '',
    component: ClientComponent,
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
  declarations: [ClientComponent, ViewClientComponent, EditClientComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(clientRoutes)
  ]
})
export class ClientModule { }
