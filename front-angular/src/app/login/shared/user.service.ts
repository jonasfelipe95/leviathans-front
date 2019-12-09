import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

    apiURL = environment.apiURL;

    constructor(
        private httpClient: HttpClient
    ) { }

    login(user): Observable<any> {
        return this.httpClient.post<any>(`${environment.apiURL}/api/user/authentication`, user);
    }
    register(user): Observable<any> {
        return this.httpClient.post<any>(`${environment.apiURL}/api/user`, user);
    }
    getUserById(userId): Observable<any> {
        return this.httpClient.get<any>(`${environment.apiURL}/api/user/${userId}`);
    }

}
