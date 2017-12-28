import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { TextsComponent } from './texts/texts.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextsComponent } from './texts/texts.component';
import { FormComponent } from './form/form.component';

const appRoutes: Routes = [
  { path: 'home', component: FormComponent },
  { path: 'result', component: TextsComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    TextsComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
