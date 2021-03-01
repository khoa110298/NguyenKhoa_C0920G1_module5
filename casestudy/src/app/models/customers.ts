import {CustomerType} from './customer-type';

export class Customers {
  id: number;
  customerType: CustomerType;
  name: string;
  dateOfBirth: string;
  idCard: string;
  phone: string;
  email: string;
  address: string;


  constructor(id: number, customerType: CustomerType, name: string, dateOfBirth: string, idCard: string,
              phone: string, email: string, address: string) {
    this.id = id;
    this.customerType = customerType;
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.idCard = idCard;
    this.phone = phone;
    this.email = email;
    this.address = address;
  }
}
