import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class WizardService {

  constructor(private http: HttpClient) { }

  getMasterData(): Observable<any> {
    return this.http.get('http://localhost:2323/api/Wizard/GetMasterData');
  }

  getCustomerByNIC(nic: string): Observable<any> {
    return this.http.get(`http://localhost:2323/api/Wizard/GetCustomerByNIC/${nic}`);
  }
}
