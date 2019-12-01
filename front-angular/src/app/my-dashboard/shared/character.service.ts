import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class CharacterService {

    apiURL = environment.apiURL;

    constructor(
        private httpClient: HttpClient
    ) { }

    getCharacterByUser(userId) {
        return this.httpClient.get(`${environment.apiURL}/api/character/user/${userId}`);
    }
    getJobById(jobId) {
        return this.httpClient.get(`${environment.apiURL}/api/job/${jobId}`);
    }
    getAmuletById(amuletId) {
        return this.httpClient.get(`${environment.apiURL}/api/amulet/${amuletId}`);
    }
    getElementById(elementId) {
        return this.httpClient.get(`${environment.apiURL}/api/element/${elementId}`);
    }

}
