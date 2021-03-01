import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { CustomerCreateComponent } from './components/customer/customer-create/customer-create.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MaterialModule } from './material.module';
import { CustomerDeleteComponent } from './components/customer/customer-delete/customer-delete.component';
import { CustomerEditComponent } from './components/customer/customer-edit/customer-edit.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'customer-list', component: CustomerListComponent},
  {path: 'customer-create', component: CustomerCreateComponent},
  {path: 'customer-edit/:id', component: CustomerEditComponent},

  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [HomeComponent, CustomerListComponent, CustomerCreateComponent, PageNotFoundComponent,
    CustomerDeleteComponent, CustomerEditComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    Ng2SearchPipeModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
