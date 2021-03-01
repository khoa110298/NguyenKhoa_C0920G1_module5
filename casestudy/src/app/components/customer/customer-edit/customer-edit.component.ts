import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerService} from '../../../service/customer.service';
import { Router, ActivatedRoute} from '@angular/router';
import {CustomerType} from '../../../models/customer-type';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  public formEditCustomer: FormGroup;
  public maxDate = new Date();
  public customerId;
  customerTypeList: CustomerType[] = [];

  constructor(private formBuilder: FormBuilder, private customerService: CustomerService,
              public router: Router,
              public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllCustomerType();
    this.formEditCustomer = this.formBuilder.group({
      customerType: ['', Validators.required],
      name: ['', [Validators.required, Validators.minLength(6)]],
      dateOfBirth: ['', Validators.required],
      idCard: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
    });

    this.activatedRoute.params.subscribe(data => {
      this.customerId = data.id;
      this.customerService.getCustomerById(this.customerId).subscribe(data1 => {
        this.formEditCustomer.patchValue(data1);
      });
    });
  }

  editCustomer() {
    this.customerService.editCustomer(this.formEditCustomer.value, this.customerId).subscribe(data => {
      this.router.navigateByUrl('customer-list');
    });
  }
  getAllCustomerType(){
    this.customerService.getAllCustomerType().subscribe(data => {
      this.customerTypeList = data;
    });
  }
}
