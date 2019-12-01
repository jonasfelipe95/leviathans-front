import { Injectable } from '@angular/core';

@Injectable()
export class DataProvider {

    public loginTabActive = 'login';
    public userLoged = undefined;

    public constructor() { }

}
