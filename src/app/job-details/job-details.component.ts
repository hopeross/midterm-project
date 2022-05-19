import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobServiceService } from '../job-service.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {
  jobDetails?: any; 

  constructor(private activatedRoute: ActivatedRoute, private jobService: JobServiceService) { }

  ngOnInit(): void {
    const jobId = this.activatedRoute.snapshot.params['jobID'];
    console.log(jobId);

    this.jobService.getJob(jobId).subscribe(result => {
      this.jobDetails = result;
      console.log(this.jobDetails.employer);
    })
  }
}
