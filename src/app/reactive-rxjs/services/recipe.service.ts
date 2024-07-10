import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Recipe } from './../model/Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes$ = this.http
                 .get<Recipe[]>(`${environment.API}/recipes`)
                 .pipe(
                  catchError( error => of([]) )
                 )
  
  constructor(
    private http: HttpClient
  ) { }

}


