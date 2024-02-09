import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvUploaderComponent } from './components/cv-uploader/cv-uploader.component';

const routes: Routes = [
  { path: 'check-cv', component: CvUploaderComponent },
  // other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
