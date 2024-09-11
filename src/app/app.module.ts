import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { AdsCardComponent } from "./pages/ads/ads-card/ads-card.component";
import { AdsListComponent } from "./pages/ads/ads-list/ads-list.component";
import { MainComponent } from "./pages/main/main.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'lk',
    loadChildren: () => import('./pages/lk/lk.module').then(m => m.LkModule)
  },
  {
    path: 'ads',
    component: AdsListComponent
  },
  {
    path: 'adscard',
    component: AdsCardComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }