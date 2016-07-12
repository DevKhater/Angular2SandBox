import { Component, OnInit } from '@angular/core';
import { GithubService  } from '../github.service';

@Component({
  moduleId: module.id,
  selector: 'github',
  templateUrl: 'github.component.html',
  styleUrls: ['github.component.css'],
  providers: [GithubService]
})
export class GithubComponent implements OnInit {
  user: any;
  repos: any;
  username: any;
  constructor (private _githubService : GithubService){
    this.user=false;
  }

  search() {
    this._githubService.UpdateUsername(this.username);
    this.getData();
  }

  getData() {
    this._githubService.getUser().subscribe(
        user => {
        this.user = user;
      });

    this._githubService.getRepos().subscribe(
        repos => {
        this.repos = repos;
      });

  }
  ngOnInit() {
  }

}
