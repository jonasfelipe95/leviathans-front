import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class CharacterService {

    apiURL = environment.apiURL;

    constructor(
        private httpClient: HttpClient
    ) { }

    getAll(): Observable<any[]> {
        return this.httpClient.get<any[]>(`${environment.apiURL}/api/character`);
    }
    getChacacterById(characterId: string): Observable<any> {
        return this.httpClient.get<any>(`${environment.apiURL}/api/character/${characterId}`);
    }
    getCharacterByUser(userId): Observable<any> {
        return this.httpClient.get<any>(`${environment.apiURL}/api/character/user/${userId}`);
    }
    getJobById(jobId): Observable<any> {
        return this.httpClient.get<any>(`${environment.apiURL}/api/job/${jobId}`);
    }
    getAmuletById(amuletId): Observable<any> {
        return this.httpClient.get<any>(`${environment.apiURL}/api/amulet/${amuletId}`);
    }
    getElementById(elementId): Observable<any> {
        return this.httpClient.get<any>(`${environment.apiURL}/api/element/${elementId}`);
    }

}
