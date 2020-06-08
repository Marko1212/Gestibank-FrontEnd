import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AgentsComponent } from './agents/agents.component';


@NgModule({
  declarations: [DashboardComponent, AssignmentsComponent, AgentsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
