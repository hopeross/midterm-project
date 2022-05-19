import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Jobs } from './models/jobs';

@Injectable({
  providedIn: 'root'
})
export class JobServiceService {
  listOfJobs: Jobs[] = [
      {
          "jobID": 1,
          "jobTitle": "Quality Engineer",
          "jobDescription": "Test computer software",
          "jobDuration": "5+ years",
          "employer": "Ramsey Solutions"
      },
      {
          "jobID": 2,
          "jobTitle": "QA Analyst",
          "jobDescription": "Test computer software",
          "jobDuration": "2 years",
          "employer": "Aarons"
      },
      {
          "jobID": 3,
          "jobTitle": "QA Analyst",
          "jobDescription": "Test computer software",
          "jobDuration": "5 years",
          "employer": "CCH Small Firm Services"
      },
      {
          "jobID": 4,
          "jobTitle": "Truck Driver",
          "jobDescription": "Drive large trucks",
          "jobDuration": "9 years",
          "employer": "US Army (Reserves)"
      }
  ]

  constructor() { }

  getJobs(): Observable<Jobs[]>{
    return of(this.listOfJobs);
  }

  getJob(jobId: number): Observable<Jobs | undefined>{
    return of (this.listOfJobs.find(j => j.jobID == jobId));
  }
}
