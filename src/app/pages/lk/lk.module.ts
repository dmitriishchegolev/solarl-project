import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
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
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: []
})
export class LkModule { }