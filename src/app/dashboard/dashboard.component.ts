import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDrawer } from '@angular/material/sidenav';
import { MatDrawerMode } from '@angular/material/sidenav';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
  @ViewChild('drawer') drawer!: MatDrawer;
  drawerMode: MatDrawerMode = 'side';
  drawerOpened = true;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.Tablet,
      Breakpoints.Web
    ]).subscribe(result => {
      if (result.matches) {
        this.updateDrawerForScreenSize();
      }
    });
  }

  updateDrawerForScreenSize() {
    if (this.breakpointObserver.isMatched(Breakpoints.Handset)) {
      this.drawerMode = 'over';
      this.drawerOpened = false;
    } else if (this.breakpointObserver.isMatched(Breakpoints.Tablet)) {
      this.drawerMode = 'side';
      this.drawerOpened = false;
    } else {
      this.drawerMode = 'side';
      this.drawerOpened = true;
    }
  }

  toggleDrawer() {
    this.drawer.toggle();
  }
}