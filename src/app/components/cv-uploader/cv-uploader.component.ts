import { Component } from '@angular/core';
import { JobPrediction } from '../../model/job-prediction.model';
import { UploadCvService } from '../../service/upload-cv.service';

/**
 * Component for uploading CVs and displaying job predictions.
 */
@Component({
  selector: 'app-cv-uploader',
  templateUrl: './cv-uploader.component.html',
  styleUrls: ['./cv-uploader.component.css']
})
export class CvUploaderComponent {
  // Stores job predictions and controls UI elements for display.
  jobPredictions: JobPrediction[] = [];
  showPredictions = false; // Flag to toggle prediction display.
  selectedFile?: File; // The file selected by the user.
  selectedFileName = 'Choose file'; // Placeholder text for file input.

  /**
   * Injects `UploadCvService` to handle CV file uploads.
   * @param uploadCvService Service for uploading CVs and fetching predictions.
   */
  constructor(private uploadCvService: UploadCvService) {}

  /**
   * Captures and stores the file selected by the user.
   * @param event File selection event.
   */
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.selectedFileName = file.name;
    }
  }

  /**
   * Uploads the selected file and processes predictions.
   * Displays job predictions on successful upload.
   */
  onUpload() {
    if (this.selectedFile) {
      this.uploadCvService.uploadFile(this.selectedFile).subscribe({
        next: (response: JobPrediction[]) => {
          this.jobPredictions = response;
          this.showPredictions = true;
        },
        error: (error) => console.error(error) // Handle upload error.
      });
    }
  }
}
