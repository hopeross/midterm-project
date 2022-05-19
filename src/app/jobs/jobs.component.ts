import { Component, OnInit } from '@angular/core';
import { JobServiceService } from '../job-service.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobsList: any = [];

  constructor(private jobService: JobServiceService ) { };

  ngOnInit(): void {
    this.jobService.getJobs().subscribe(result => {
      this.jobsList = result;
    })
  }
}