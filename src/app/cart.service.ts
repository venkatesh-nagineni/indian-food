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

  postShoppingListdish (list, id) {
    const shoppinglistposturl = 'https://mishnmash.de/api/postShoppingListdish/';
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

  checkTrustedUser (token) {
    const shoppinglistposturl = 'https://mishnmash.de/api/checkTrustedUser/';
    return new Promise((resolve, reject) => {
      let httpHeaders = new HttpHeaders();
      httpHeaders = httpHeaders.append('token', token);
      this.http.get(shoppinglistposturl, { headers: httpHeaders })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  postnewcategory (data) {
    const shoppinglistposturl = 'https://mishnmash.de/api/postnewCategoryData/';
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders({'Content-Type': 'application/json'});
      this.http.post(shoppinglistposturl, JSON.stringify({data: data}), { headers: headers })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getShoppingList () {
    const shoppinglistposturl = 'https://mishnmash.de/api/getShoppingList/';
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

  getShoppingListOnly () {
    const shoppinglistposturl = 'https://mishnmash.de/api/getShoppingListOnly/';
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

  blockUser (blockData) {
    const shoppinglistposturl = 'https://mishnmash.de/api/blockUser/';
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders({'Content-Type': 'application/json'});
      this.http.post(shoppinglistposturl, JSON.stringify({data: blockData}), { headers: headers })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getAngebote () {
    const shoppinglistposturl = 'https://mishnmash.de/api/getAngebote/';
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

  getAngeboteHome () {
    const shoppinglistposturl = 'https://mishnmash.de/api/getAngeboteHome/';
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

  removeDishItem (data) {
    const shoppinglistposturl = 'https://mishnmash.de/api/removeDishItem/';
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders({'Content-Type': 'application/json'});
      this.http.post(shoppinglistposturl, JSON.stringify({data: data}), { headers: headers })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  sendmail (cartdata, userdata) {
    const shoppinglistposturl = 'https://mishnmash.de/api/sendmail/';
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders({'Content-Type': 'application/json'});
      this.http.post(shoppinglistposturl, JSON.stringify({cartdata: cartdata, userdata: userdata}), { headers: headers })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  sendRegistrationData (userdata) {
    const shoppinglistposturl = 'https://mishnmash.de/api/registrationData/';
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders({'Content-Type': 'application/json'});
      this.http.post(shoppinglistposturl, JSON.stringify({userdata: userdata}), { headers: headers })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  loginUser (userLoginData) {
    const shoppinglistposturl = 'https://mishnmash.de/api/loginUser/';
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders({'Content-Type': 'application/json'});
      this.http.post(shoppinglistposturl, JSON.stringify({loginData: userLoginData}), { headers: headers })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  forgotPwd (email) {
    const shoppinglistposturl = 'https://mishnmash.de/api/forgotPwd/';
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders({'Content-Type': 'application/json'});
      this.http.post(shoppinglistposturl, JSON.stringify({email: email}), { headers: headers })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
