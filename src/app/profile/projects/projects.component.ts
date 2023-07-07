import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  display = false;
  onPress() {
    //this.display = true;

    //To toggle the component
    this.display = !this.display;
  }
}
