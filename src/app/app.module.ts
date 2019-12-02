import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatBadgeModule} from '@angular/material/badge';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { StaffComponent } from './staff/staff.component';
import { StaffListComponent } from './staff/staff-list/staff-list.component';
import { StaffDialogComponent } from './staff/staff-dialog/staff-dialog.component';

import { Globals } from './Globals';

// Path
const appRoutes: Routes = [
  { path: 'schedule', component: ScheduleComponent },
  { path: 'staff', component: StaffComponent },
  { path: '', redirectTo: '/schedule', pathMatch: 'full' } //default
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ScheduleComponent,
    StaffComponent,
    StaffListComponent,
    StaffDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatGridListModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule,
    MatBadgeModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [Globals],
  bootstrap: [AppComponent],
  entryComponents: [StaffDialogComponent]
})
export class AppModule { }
