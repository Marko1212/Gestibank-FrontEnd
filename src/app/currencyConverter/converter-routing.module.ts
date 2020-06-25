import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ConverterComponent } from "./converter.component";

const converterRoutes: Routes = [
  {
    path: "convertisseurDevises",
    children: [{ path: "", component: ConverterComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(converterRoutes)],
  exports: [RouterModule],
})
export class ConverterRoutingModule {}
