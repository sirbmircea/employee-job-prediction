import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobPrediction } from '../model/job-prediction.model'; 

@Injectable({
  providedIn: 'root'
})
export class UploadCvService {

  constructor(private http: HttpClient) {}

  uploadFile(file: File): Observable<JobPrediction[]> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post<JobPrediction[]>('http://localhost:3001/upload', formData);
  }
}
