import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LkComponent } from "./lk.component";

const routes: Routes = [
 {
  path: '',
  component: LkComponent
 }
];

@NgModule({
  declarations: [
    LkComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class LkModule { }