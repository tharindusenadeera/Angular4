import{ Injectable } from '@angular/core';
import{ Http,Response,Headers } from '@angular/http';
import{ Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Front } from './front';

@Injectable()
export class FrontService{

    constructor(private http: Http){

    }  
    getFrontsFromService():Front[]{
        return[]
    }

    addData(front:Front){
        console.log(front);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/add', JSON.stringify(front), { headers: headers })
        .map(res => res.json());
        
    }
}