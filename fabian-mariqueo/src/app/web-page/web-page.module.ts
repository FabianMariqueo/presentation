import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebPageComponent } from './web-page/web-page.component';
import { WebPageRoutingModule } from './web-page-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProfileComponent } from './profile/profile.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { PresentationComponent } from './presentation/presentation.component';
import { WorkComponent } from './work/work.component';


@NgModule({
  declarations: [
    WebPageComponent,
    ProfileComponent,
    PresentationComponent,
    WorkComponent
  ],
  imports: [

    // Angular Material Modules
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatChipsModule,
    // End Angular Material Modules

    CommonModule,
    WebPageRoutingModule
  ]
})
export class WebPageModule { }
