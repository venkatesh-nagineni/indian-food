import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

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
    const shoppinglistposturl = 'http://82.165.112.97/api/postShoppingListdish/';
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
    const shoppinglistposturl = 'http://82.165.112.97/api/checkTrustedUser/';
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
    const shoppinglistposturl = 'http://82.165.112.97/api/postnewCategoryData/';
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
    const shoppinglistposturl = 'http://82.165.112.97/api/getShoppingList/';
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
    const shoppinglistposturl = 'http://82.165.112.97/api/getShoppingListOnly/';
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
    const shoppinglistposturl = 'http://82.165.112.97/api/blockUser/';
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
    const shoppinglistposturl = 'http://82.165.112.97/api/getAngebote/';
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
    const shoppinglistposturl = 'http://82.165.112.97/api/getAngeboteHome/';
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
    const shoppinglistposturl = 'http://82.165.112.97/api/removeDishItem/';
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
    const shoppinglistposturl = 'http://82.165.112.97/api/sendmail/';
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
    const shoppinglistposturl = 'http://82.165.112.97/api/registrationData/';
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
    const shoppinglistposturl = 'http://82.165.112.97/api/loginUser/';
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
    const shoppinglistposturl = 'http://82.165.112.97/api/forgotPwd/';
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

  contactMail (data) {
    const shoppinglistposturl = 'http://82.165.112.97/api/contactMail/';
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

  // for change background color header
  changeColor (colors) {
    const shoppinglistposturl = 'http://82.165.112.97/api/changeColors/';
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders({'Content-Type': 'application/json'});
      this.http.post(shoppinglistposturl, JSON.stringify({colors: colors}), { headers: headers })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  // get blocked list
  getBlockedList () {
    const shoppinglistposturl = 'http://82.165.112.97/api/getBlockedList/';
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

  // unblock user
  unBlockUser(id) {
    const shoppinglistposturl = 'http://82.165.112.97/api/unBlockUser/';
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders({'Content-Type': 'application/json'});
      this.http.post(shoppinglistposturl, JSON.stringify({id: id}), { headers: headers })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
