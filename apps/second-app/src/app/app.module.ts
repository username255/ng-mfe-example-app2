import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SharedUiModule } from 'shared-ui-demo-sdasdasdads';
import { AppComponent } from './app.component';
import { OneComponent } from './components/one/one.component';
import { ThreeComponent } from './components/three/three.component';
import { TwoComponent } from './components/two/two.component';


@NgModule({
  declarations: [AppComponent, OneComponent, TwoComponent, ThreeComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(
      [
        {
          path: 'one',
          component: OneComponent,
        },
        {
          path: 'two',
          component: TwoComponent,
        },
        {
          path: 'three',
          component: ThreeComponent,
        },
        {
          path: '*',
          redirectTo: 'one',
        },
      ],
    ),
    SharedUiModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
