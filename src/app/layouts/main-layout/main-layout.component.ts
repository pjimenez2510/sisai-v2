import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { navItems } from '../../shared/components/sidebar/sidebar-data';
import { Subscription } from 'rxjs';
import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { NavService } from '../../shared/services/nav.service';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { NgScrollbar } from 'ngx-scrollbar';
import { MatNavList } from '@angular/material/list';
import { AppNavItemComponent } from '../../shared/components/sidebar/nav-item/nav-item.component';
const MOBILE_VIEW = 'screen and (max-width: 768px)';
const TABLET_VIEW = 'screen and (min-width: 769px) and (max-width: 1024px)';
const MONITOR_VIEW = 'screen and (min-width: 1024px)';
const BELOWMONITOR = 'screen and (max-width: 1023px)';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    MatSidenavModule,
    SidebarComponent,
    NgScrollbar,
    MatNavList,
    AppNavItemComponent,
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css',
})
export class MainLayoutComponent {
  navItems = navItems;

  @ViewChild('leftsidenav')
  public sidenav: MatSidenav | any;

  //get options from service
  private layoutChangesSubscription = Subscription.EMPTY;
  private isMobileScreen = false;
  private isContentWidthFixed = true;
  private isCollapsedWidthFixed = false;
  private htmlElement!: HTMLHtmlElement;

  get isOver(): boolean {
    return this.isMobileScreen;
  }

  constructor(
    private breakpointObserver: BreakpointObserver,
    private navService: NavService,
  ) {
    this.htmlElement = document.querySelector('html')!;
    this.htmlElement.classList.add('light-theme');
    this.layoutChangesSubscription = this.breakpointObserver
      .observe([MOBILE_VIEW, TABLET_VIEW, MONITOR_VIEW])
      .subscribe((state) => {
        // SidenavOpened must be reset true when layout changes

        this.isMobileScreen = state.breakpoints[MOBILE_VIEW];

        this.isContentWidthFixed = state.breakpoints[MONITOR_VIEW];
      });
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.layoutChangesSubscription.unsubscribe();
  }

  toggleCollapsed() {
    this.isContentWidthFixed = false;
  }

  onSidenavClosedStart() {
    this.isContentWidthFixed = false;
  }

  onSidenavOpenedChange(isOpened: boolean) {
    this.isCollapsedWidthFixed = !this.isOver;
  }
}
