import { PhoneNumber } from './phonenumber.model';
import { AddressReq, SimpleAddressReq } from './adress.model';

export interface Account {
  id: string;
  lastLogin: Date;
  profileCompleted: boolean;
  certExpiry: Date;
}

export interface CreateAccountRequest {
  id: string;
  certExpiry: string;
}

export interface CreateStaffAccountRequest {
  email: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  primaryPhoneNumber: PhoneNumber;
  secondaryPhoneNumber?: PhoneNumber;
  address: SimpleAddressReq;
  staffAccessKey: string;
  privilege: string;
}

export interface UpdateAccountReq {
  email?: string;
  username?: string;
  password?: string;
  cwFirstName?: string;
  cwLastName?: string;
  cwEmail?: string;
  primaryPhone?: PhoneNumber;
  secondaryPhone?: PhoneNumber;
  address?: SimpleAddressReq;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface Token {
  Email: string;
  FirstName: string;
  LastName: string;
  nc_Portal_Username__c: string;
  Id: string;
  MobilePhone: string;
  nc_Address__City_s: string;
  nc_Address__PostalCode__s: string;
  nc_Address__Street__s: string;
  nc_State__c: string;
  nc_Caseworker_Name_c: string;
  nc_Caseworker_Status_cs: string;
  nc_Caseworker_Contact_Info_c: string;
  nc_Caseworker_Cerifying_County_Agency_c: string;
  nc_County_of_Residence_c: string;
  privilegeLevel: number;
  exp: number;
  iat: number;
}

export interface GetAccountsReq {
  accounts: Account[];
}

export interface VerifyReq {
  key: string;
}

export interface DeleteAccountReq {
  password: string;
}

export interface CaseWorkerInfo {
  cwFirstName: string;
  cwLastName: string;
  cwEmail: string;
  cwPhoneNumber: string;
  certifiedBy: string;
  certExpiry: Date;
}
