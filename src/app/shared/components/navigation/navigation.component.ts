import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mvl-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  query: string = '';
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSearch(query) {
    this.router.navigate([query ? {q: query} : {} ]);
  }
}
