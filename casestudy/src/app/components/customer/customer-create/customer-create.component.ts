import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerService} from '../../../service/customer.service';
import { Router} from '@angular/router';
import {CustomerType} from '../../../models/customer-type';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  public formCreateCustomer: FormGroup;
  public maxDate = new Date();
  customerType: CustomerType[] = [];

  constructor(private formBuilder: FormBuilder, private customerService: CustomerService,
              public router: Router) { }

  ngOnInit(): void {
    this.getAllCustomerType();
    this.formCreateCustomer = this.formBuilder.group({
      customerType: ['', Validators.required],
      name: ['', [Validators.required, Validators.minLength(6)]],
      dateOfBirth: ['', Validators.required],
      idCard: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
    });
  }

  addNewCustomer() {
    this.customerService.addNewCustomer(this.formCreateCustomer.value).subscribe(data => {
      this.router.navigateByUrl('customer-list');
      console.log(this.customerService);
    });
  }
  getAllCustomerType(){
    this.customerService.getAllCustomerType().subscribe((data: CustomerType[]) => {
      this.customerType = data;
    });
  }
}
