import { Routes } from '@angular/router';
import { BookingComponent } from '../pages/booking/booking.component';
import { ConfirmComponent } from '../pages/confirm/confirm.component';

export const routes: Routes = [
  { path: '', component: BookingComponent },
  { path: 'confirm', component: ConfirmComponent},
];
