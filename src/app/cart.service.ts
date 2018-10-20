import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

 /*  postShoppingList (list): Observable<any> {
    return this.http.post<any>(shoppinglistposturl, JSON.stringify({data: list}), httpOptions).pipe(
      catchError(error => of(`Bad Promise: ${error}`))
    );
  } */

  postShoppingListdish (list, id) {
    const shoppinglistposturl = 'http://localhost:8080/api/postShoppingListdish/';
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders({'Content-Type': 'application/json'});
      this.http.post(shoppinglistposturl, JSON.stringify({ data: list, id: id}), { headers: headers })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  postnewcategory (data) {
    const shoppinglistposturl = 'http://localhost:8080/api/postnewCategoryData/';
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders({'Content-Type': 'application/json'});
      this.http.post(shoppinglistposturl, JSON.stringify({ data: data}), { headers: headers })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getShoppingList () {
    const shoppinglistposturl = 'http://localhost:8080/api/getShoppingList/';
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders({'Content-Type': 'application/json'});
      this.http.get(shoppinglistposturl, { headers: headers })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
