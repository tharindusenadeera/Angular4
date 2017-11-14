import{ Injectable } from '@angular/core';
import{ Http,Response,Headers,RequestOptions } from '@angular/http';
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

    getSomeThing() {
        return this.http.get('http://localhost:3000/').map((res:Response) => res.json());
      }
      
    addData(front:Front){
        console.log(front);
        var body = JSON.stringify(front);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin','*');
        var options = new RequestOptions({ headers: headers});
        return this.http.post('/users/add', body, options);
        
    }


}