import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import * as fileSaver from 'file-saver';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient) {
  }

  get(url: string, urlParams?: any): Observable<any> {

    let params = '';

    if (urlParams) {
      params = '/' + urlParams;
    }

    return this.http.get(environment.apiUrl + url + params);
  }

  post(url: string, body: Object): Observable<any> {
    return this.http.post(environment.apiUrl + url, JSON.stringify(body));
  }

  put(url: string, urlParams: HttpParams, body: Object): Observable<any> {
    return this.http.put(environment.apiUrl + url + '/' + urlParams, JSON.stringify(body));
  }

  delete(url: string, urlParams: HttpParams): Observable<any> {
    return this.http.delete(environment.apiUrl + url + '/' + urlParams);
  }

  uploadFiles(url: string, formData: FormData): Observable<any> {
    return this.http.post(environment.apiUrl + url, formData);
  }

  downloadFile(path: string, body: Object): Observable<any> {
    return this.http.post(environment.apiUrl + path, JSON.stringify(body), {
      responseType: 'blob',
    })
      .pipe(map((response: any) =>
        fileSaver.saveAs(response, body['archivo'])
      ),
        catchError(function (error: any) {
          const reader: FileReader = new FileReader();
          const obs = Observable.create((observer: any) => {
            reader.onloadend = (e) => {
              observer.error(JSON.parse(reader.result as string));
              observer.complete();
            }
          });
          reader.readAsText(error.error);
          return obs;
        }));
  }
}

