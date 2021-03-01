import {Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CustomerService} from '../../../service/customer.service';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {
  public customerName;
  public customerId;
  constructor(
    public dialogRef: MatDialogRef<CustomerDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerName = this.data.data1.name;
    this.customerId = this.data.data1.id;
  }

  deleteCustomer() {
    this.customerService.deleteCustomer(this.customerId).subscribe(data => {
      this.dialogRef.close();
    });
  }
}
