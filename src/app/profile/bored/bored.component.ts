import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bored',
  templateUrl: './bored.component.html',
  styleUrls: ['./bored.component.scss']
})
export class BoredComponent implements OnInit {
  constructor(private router: Router) {
  }

  onClick(url: string){
    console.log(url);
    this.router.navigate([url]);
  }

  ngOnInit() {
  }

}
