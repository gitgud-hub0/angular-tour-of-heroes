import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  private appConfig: any;

  constructor(private http: HttpClient) { }

  loadAppConfig() {
    return this.http.get('/assets/config.json')
    .pipe(
      tap(data => this.appConfig = data )
    );
  }

  get heroServiceApiUrl() {

    if (!this.appConfig) {
      throw Error('Config file not loaded!');
    }

    return this.appConfig.heroServiceApiUrl;
  }
}