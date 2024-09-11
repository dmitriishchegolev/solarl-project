import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { LkComponent } from "./pages/lk/lk.component";
import { MainComponent } from "./pages/main/main.component";

const routes: Routes = [
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LkComponent,
    LkComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }