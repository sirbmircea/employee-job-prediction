import { Component } from '@angular/core';
import { JobPrediction } from '../../model/job-prediction.model';
import { UploadCvService } from '../../service/upload-cv.service';

@Component({
  selector: 'app-cv-uploader',
  templateUrl: './cv-uploader.component.html',
  styleUrls: ['./cv-uploader.component.css']
})
export class CvUploaderComponent {
  jobPredictions: JobPrediction[] = [];
  showPredictions = false;
  selectedFile?: File;
  selectedFileName = 'Choose file';

  constructor(private uploadCvService: UploadCvService) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file; 
      this.selectedFileName = file.name;
    }
  }

  onUpload() {
    if (this.selectedFile) {
      this.uploadCvService.uploadFile(this.selectedFile).subscribe({
        next: (response: JobPrediction[]) => {
          this.jobPredictions = response;
          this.showPredictions = true;
        },
        error: (error) => console.error(error)
      });
    }
  }
}
