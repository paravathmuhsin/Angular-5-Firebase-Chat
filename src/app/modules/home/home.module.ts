import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [HomeComponent],
  providers: []
})
export class HomeModule {
}
