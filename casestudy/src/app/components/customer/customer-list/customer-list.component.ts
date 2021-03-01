import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../../service/customer.service';
import {Customers} from '../../../models/customers';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatDialog } from '@angular/material/dialog';
import { CustomerDeleteComponent} from '../customer-delete/customer-delete.component';
import {CustomerType} from '../../../models/customer-type';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  term: string;
  public customers: Customers[] = [];
  p = 1;

  constructor(private customerService: CustomerService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.customerService.getAllCustomers().subscribe(data => {
      this.customers = data;
      console.log(this.customers);
    });
  }

  openDialog(customerId): void {
    this.customerService.getCustomerById(customerId).subscribe(dataCustomer => {
      const dialogRef = this.dialog.open(CustomerDeleteComponent, {
        width: '500px',
        data: {data1: dataCustomer},
        disableClose: true,
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.ngOnInit();
      });
    });
  }

}

