import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Books } from '../models/books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  API_URLBooks= environment.apiUrl;
 
  constructor(private http:HttpClient) {
  }

  getAll(startIndex: number, maxResults: number,search:string): Observable<Books> {
    let params = new HttpParams().append('startIndex', ((startIndex-1)*maxResults)).append('maxResults', maxResults)
    search ?  params = params.append('q', search) : params = params.append('q', '{search}');
    return this.http.get<Books>(this.API_URLBooks,{params});
  }

  getById(id:string): Observable<Books> {
    return this.http.get<Books>(`${this.API_URLBooks}/${id}`);
  }
}
