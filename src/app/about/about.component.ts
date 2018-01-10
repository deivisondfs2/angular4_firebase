import { Jobs } from './../domain/jobs';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private db: AngularFireDatabase) { }

  dados: FirebaseListObservable<any[]>;

  jobs: Jobs[] = [];

  ngOnInit() {
    this.dados = this.db.list('/jobs', { preserveSnapshot: true });
    this.dados
      .subscribe(snapshots => {
        snapshots.forEach(snapshot => {
          this.jobs.push(snapshot.val() as Jobs);
        });
      });

    console.log(this.jobs);
  }

}
