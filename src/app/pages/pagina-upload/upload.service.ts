import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { }

  upload(files: Set<File>, url: string){

    //  const request = new HttpRequest('POST', url, formData);
    // return this.http.request(request)
    let formData: FormData = new FormData();

    files.forEach((file) => {formData.append('file', file, file.name)})
    return this.http.post(url, formData, { reportProgress: true, observe: 'events' })
  }

}
