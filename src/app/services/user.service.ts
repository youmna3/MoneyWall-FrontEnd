import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { environment } from 'src/environments/environments';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  StorageService: StorageService = new StorageService();
  constructor() {}
  getData() {
    let data = JSON.stringify(
      this.StorageService.getUserDataFromLocalStorage()
    );
    return JSON.parse(data);
  }

  getUserData() {
    return this.getData().data;
  }

  getUserID() {
    return this.getUserData().id;
  }

  user_accessToken() {
    return this.getData().access_token;
  }
  getIsAuthenticated(): boolean {
    return this.user_accessToken() != null;
  }
  getName() {
    return `${this.getUserData()?.fname}`;
  }
  signOut() {
    localStorage.removeItem('userData');
  }
  // async users() {
  //   let reqHeader = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     Authorization: 'Bearer ' + this.user_accessToken(),
  //   });

  //   return this.http.get(`${environment.apiURL}admin/users`, {
  //     headers: reqHeader,
  //   });
  // }
}
