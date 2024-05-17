import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { delay, take } from 'rxjs';

export class CrudService<T> {


  
  constructor(protected http: HttpClient, 
    @Inject(String) private API_URL: string){

  }

  
  list(){
    return this.http.get<T[]>(this.API_URL).pipe(delay(2000))
  }

  private create(record: T){
    return this.http.post(this.API_URL, record).pipe(take(1))
  }

  loadById(id: any){
    return this.http.get<T>(`${this.API_URL}/${id}`).pipe(take(1))
  }
  
  private update(record: T){
    return this.http.put(`${this.API_URL}/${record['id' as keyof T]}`, record).pipe(take(1))
  }

  save(record: T){
    if(record['id' as keyof T]){
      return this.update(record)
    }
    return this.create(record)
  }

  remove(record: T){
    return this.http.delete(`${this.API_URL}/${record['id' as keyof T]}`).pipe(take(1));
  }

}
