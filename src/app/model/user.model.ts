import { Address } from './address.model';

export interface User {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  phoneNumber: number;
  userType: string;
  address: Address;
}
