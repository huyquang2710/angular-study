import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// giả lập kết với server ở BE
export class AuthService {
  //đinh nghĩa đã login
  isLogin: boolean = false;

constructor() { }

isAuthenticated() {
  const promise = new Promise<boolean>((resolve, reject) => {
    setTimeout(() => resolve(this.isLogin), 800);
  });
  return promise;
}
login() {
  this.isLogin = true;
}
logout() {
  this.isLogin = false;
}

}
