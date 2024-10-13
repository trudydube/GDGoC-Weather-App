import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://api.weatherapi.com/v1/current.json';

  constructor(private http: HttpClient) {}

  // Method to call the API
  getPosts(location:string): Observable<any> {


    // Remove the {PasteYourKeyHere} portion and paste your key there
    // E.g. if your API key is ABCDEFGHIJ then --> ?key=ABCDEFGHIJK&q=
    // Obtain your key from https://www.weatherapi.com/ and click the clipboard icon to copy it
    // You must have an account in order to get an API key. Sign up if you do not have an account
    return this.http.get<any>(this.apiUrl + "?key={PasteYourKeyHere}&q=" + location + "&aqi=no"); 
    
  }
}
