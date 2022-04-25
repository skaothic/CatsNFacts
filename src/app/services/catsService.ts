import { Injectable } from '@angular/core';
import { HttpResponse } from '../services/HttpResponse'
import { Observable,catchError,of } from 'rxjs';
import { HttpHeaders,HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class catsService {
    constructor(private http:HttpClient){}

    urlAPi='https://catfact.ninja'

httpOptions={
  headers:new HttpHeaders({
      'Content-Type':'application/json'
  })
};
    public getCats(n:number):Observable<HttpResponse>{
        return this.http.get(`${this.urlAPi}/breeds?page=${n}`,{observe:'response'})
        .pipe(catchError(err=>{
          return of (err)
        }))
}
public getFact():Observable<HttpResponse>{
    return this.http.get(`${this.urlAPi}/fact`,{observe:'response'})
    .pipe(catchError(err=>{
        return of(err)
    }))
}
public getFacts():Observable<HttpResponse>{
  return this.http.get(`${this.urlAPi}/facts`,{observe:'response'})
  .pipe(catchError(err=>{
    return of(err)
  }))
}

}