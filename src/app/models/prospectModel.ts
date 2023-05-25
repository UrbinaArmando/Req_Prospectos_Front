export class prospectModel {
  id?: number;
  name: string;
  lastName1: string;
  lastName2?: string;
  street: string;
  number: string;
  colonia: string;
  postalCode: string;
  phone: string;
  rfc: string;
  status: string;
  comments?: string;

  constructor(
    name: string,
    lastName1: string,
    street: string,
    number: string,
    colonia: string,
    postalCode: string,
    phone: string,
    rfc: string,
    status: string
  ) {
    this.name = name;
    this.lastName1 = lastName1;
    this.street = street;
    this.number = number;
    this.colonia = colonia;
    this.postalCode = postalCode;
    this.phone = phone;
    this.rfc = rfc;
    this.status = status;
  }
}
