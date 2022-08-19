import { EventEmitter, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Token } from '../../models/account.model';
import jwtDecode, { JwtDecodeOptions } from 'jwt-decode';
import * as moment from 'moment';
export enum Privilege {
  NONE,
  USER,
  MOD,
  ADMIN,
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public loggedInEvent: EventEmitter<void> = new EventEmitter<void>();
  public loggedOutEvent: EventEmitter<void> = new EventEmitter<void>();

  private privilegeLevel = Privilege.NONE;
  private expiresAt = moment();
  private email: string;
  private firstName: string;
  private lastName: string;
  private username: string;
  private id: string;
  private phoneNumber: string;
  private city: string;
  private postalCode: string;
  private street: string;
  private state: string;
  private cwName: string;
  private cwStatus: string;
  private cwContactInfo: string;
  private certifyingCountyAgency: string;
  private county: string;
  constructor(private cookieService: CookieService) {
    this.init();
  }

  init(): void {
    //this.cookieService.set('access-token', JSON.stringify(res.body.token), { path: '/', domain: '.fostersource.org' });
    const token = this.getToken();
    console.log('init');
    console.log(token);
    if (token) {
      this.expiresAt = moment().add(token.exp, 'second');
      this.privilegeLevel = token.privilegeLevel;
      this.id = token.Id;
      this.emitLoggedIn();
    } else {
      this.privilegeLevel = Privilege.NONE;
    }
  }

  setCookieOnDomain(res: any): void {
    this.cookieService.set('sf-token', res.token, { path: '/' });
    this.init();
  }

  getToken(): Token | undefined {
    try {
      const token = this.cookieService.get('sf-token');
      console.log('About to decode');
      console.log(jwtDecode(token));
      return jwtDecode(token);
    } catch (e) {
      console.log(e);
      return undefined;
    }
  }

  validTime(): boolean {
    const valid = moment().isBefore(this.expiresAt);
    if (!valid) {
      this.emitLoggedOut();
      return false;
    }
    return true;
  }

  isUser(): boolean {
    return this.privilegeLevel === Privilege.USER && this.validTime();
  }

  isAtLeastUser(): boolean {
    return this.privilegeLevel >= Privilege.USER && this.validTime();
  }

  isMod(): boolean {
    return this.privilegeLevel === Privilege.MOD && this.validTime();
  }

  isAtLeastMod(): boolean {
    return this.privilegeLevel >= Privilege.MOD && this.validTime();
  }

  isAdmin(): boolean {
    return this.privilegeLevel === Privilege.ADMIN && this.validTime();
  }

  isAtLeastAdmin(): boolean {
    return this.privilegeLevel >= Privilege.ADMIN && this.validTime();
  }

  logout(): void {
    this.cookieService.delete('sf-token', '/', '.fostersource.org');
    //this.cookieService.delete('sf-token');
    this.emitLoggedOut();
  }

  emitLoggedIn(): void {
    this.loggedInEvent.emit();
  }

  emitLoggedOut(): void {
    this.loggedOutEvent.emit();
  }
}
