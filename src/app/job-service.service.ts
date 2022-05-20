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
          "jobTitle": "Quality Engineer III",
          "jobDescription": "Create test plans/Write test cases; Perform manual web and mobile testing on front end projects; Perform CRUD testing on back end projects; Write basic automated tests; Mentor junior QAs",
          "jobDuration": "5+ years",
          "employer": "Ramsey Solutions"
      },
      {
          "jobID": 2,
          "jobTitle": "Lead QA Analyst",
          "jobDescription": "Create test plans/Write test cases; Perform manual web and mobile testing on consumer facing projects; Created POC in Microsoft Dynamic CRM; Lead small team of QAs when manager was unavailable",
          "jobDuration": "3 years",
          "employer": "Aarons"
      },
      {
          "jobID": 3,
          "jobTitle": "QA Analyst",
          "jobDescription": "Create/maintain complex integration test cases; Create/maintain virtual server/client environments to replicate user setup for testing purposes",
          "jobDuration": "5 years",
          "employer": "CCH Small Firm Services"
      },
      {
          "jobID": 4,
          "jobTitle": "Truck Driver",
          "jobDescription": "Drive wheeled vehicles in any environment and terrain, both friendly and hostile",
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
