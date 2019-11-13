import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class LoginService {

    apiURL = environment.apiURL;

    constructor(
        private httpClient: HttpClient
    ) { }

    login(user) {
       return this.httpClient.post(`${environment.apiURL}/api/user/authentication`, user);
    }

}
