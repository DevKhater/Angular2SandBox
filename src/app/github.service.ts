import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username = 'devkhater';
  private client_id = '4e634278cdde7b956ceb';
  private secret_id = '518ca3b1384e9912e4ebfc7bc8972a8b9769f15b';

  constructor(private _http: Http){
    console.log('Github Service Running');
  }

  getUser (){
    return this._http.get('https://api.github.com/users/'+ this.username+'?client_id='+this.client_id+'&client_secret='+this.secret_id)
      .map(res => res.json());
  }
  getRepos (){
    return this._http.get('https://api.github.com/users/'+ this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.secret_id)
      .map(res => res.json());
  }

  UpdateUsername(username: any){
    this.username = username;
  }
}
