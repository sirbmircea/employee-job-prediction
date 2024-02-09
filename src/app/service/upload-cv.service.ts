import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobPrediction } from '../model/job-prediction.model'; 

/**
 * Service to handle the uploading of CV files and fetching job predictions.
 * Injectable across the app due to 'providedIn: root'.
 */
@Injectable({
  providedIn: 'root'
})
export class UploadCvService {
  /**
   * Injects HttpClient to enable HTTP requests.
   * @param http HttpClient for making HTTP requests.
   */
  constructor(private http: HttpClient) {}

  /**
   * Uploads a file to the backend and returns an Observable of job predictions.
   * @param file The CV file to be uploaded.
   * @returns Observable of JobPrediction array.
   */
  uploadFile(file: File): Observable<JobPrediction[]> {
    const formData = new FormData();
    formData.append('file', file, file.name); // Prepares file data for upload.
    // Posts the file to the backend and expects an array of JobPredictions in response.
    return this.http.post<JobPrediction[]>('http://localhost:3001/upload', formData);
  }
}
