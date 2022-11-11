import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicingComponent } from './invoicing/invoicing.component';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  {
    path: 'invoicing',
    component: NavigationComponent,
  },
  {
    path: 'materials',
    component: NavigationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
