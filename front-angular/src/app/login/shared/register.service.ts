import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class RegisterService {

    constructor(
        private httpClient: HttpClient
    ) { }

    register(user) {
       return this.httpClient.post(`${environment.apiURL}/api/user`, user);
    }

}
