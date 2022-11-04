import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url='https://test-api.storexweb.com/'
  constructor(private http:HttpClient) { }

  // signUp
  signUP(credentials:any){
    return this.http.post(this.url+'api/register',credentials)
  }

  // login

  login(credntials:any){
    return this.http.post(this.url+'api/login',credntials)
  }

  // get movie 
  getMovie(){
    return this.http.get(this.url+'api/movies')
  }
  // get movie  by id
  getMovieById(id:string | null){
    return this.http.get(this.url+`api/movies/${id}`)
  }
  // get movie  by id
  getMovieByCategroy(id:string | null){
    return this.http.get(this.url+`api/moviesByCategory/${id}`)
  }
  // get category 
  getCategory(){
    return this.http.get(this.url+'api/category')
  }
  // get category by id
  getCategoryById(id:string | null){
    return this.http.get(this.url+`api/category/${id}`)
  }
  // update category by id
  updateCategroyByID(id:string | null,credntials:any){
    return this.http.post(this.url+`api/category/${id}`,credntials)
  }
  // delet category by id
  deleteCategroyByID(id:string | null,credntials:any){
    return this.http.post(this.url+`api/category/${id}`,credntials)
  }
  // add movie
  addMovie(credntials:any){
    // const headers = { 'content-type': 'multipart/form-data'} 
    return this.http.post(this.url+'api/movies',credntials)
  }
  // add movie
  createCategroy(credntials:any){
    // const headers = { 'content-type': 'multipart/form-data'} 
    return this.http.post(this.url+'api/category',credntials)
  }
    // update movie
  updateMovieById(id:any,credntials:any){

    return this.http.post(this.url+`api/movies/${id}`, credntials)
  }
  getToken(){
    return localStorage.getItem('token')
  }
  isLoggedIn():boolean{
    if(localStorage.getItem('token')) return true
    return false
  }
}
