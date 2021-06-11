import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl = 'http://localhost:3000';
  constructor(private httpClient:HttpClient) { }

  signup(user:any, image:File){
    let formData = new FormData();
    formData.append('firstName',user.firstName);
    formData.append('lastName',user.lastName);
    formData.append('email',user.email);
    formData.append('password',user.password);
    formData.append('role',user.role);
    formData.append('tel', user.tel);
    formData.append('image',image);
    return this.httpClient.post<{message:string}>(`${this.userUrl}/signup`, formData);
  }

  getAllUsers() {
    return this.httpClient.get<{users:any, message:string}>(`${this.userUrl}/allUsers`);
  }

  getUserByID( id: String) {
    return this.httpClient.get<{ user: any }>(`${this.userUrl}/displayUser/${id}`);
  }

  deleteUser(id:number) {
    return this.httpClient.delete(`${this.userUrl}/${id}`);
  }

  editUser(user:any){
    return this.httpClient.put(`${this.userUrl}/${user.id}`, user);
  }

  login(user:any)
  {
       return this.httpClient.post<{user:any}>(`${this.userUrl}/login`,user);
  }


}
