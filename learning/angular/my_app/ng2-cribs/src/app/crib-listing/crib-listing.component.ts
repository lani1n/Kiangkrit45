import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

  cribs: Array<any> = [];
  error: string | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // make an http request

    // this.http.get('data/cribs.json').
    //   pipe(map((res: any => res.json())));
    //   subscribe(
    //     data => this.cribs = data,
    //     error => this.error = error.statusText
    // );
  }

}
