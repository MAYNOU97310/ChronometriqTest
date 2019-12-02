import { Component, OnInit } from '@angular/core';
import { Globals } from '../Globals';
import { Observable } from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import { Breakpoints, BreakpointObserver,  } from '@angular/cdk/layout';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  global: Globals;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
constructor(public globals: Globals, private breakpointObserver: BreakpointObserver){
    this.global = globals;
  }

  ngOnInit() {
  }

}
