import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  message:string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.message = this.route.snapshot.params['message'];
  }

}
