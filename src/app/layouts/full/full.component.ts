import { Component, EventEmitter, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LoginService } from 'src/app/components/login/services/login.service';
import { MessageService } from 'src/app/components/login/services/message.service';

interface sidebarMenu {
  link: string;
  icon: string;
  menu: string;
}

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent {

  showBarInfo = true;

  search: boolean = false;
  isLogged!: boolean;
  isAdmin!: boolean;
  username!: boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private loginService: LoginService, private messageService: MessageService) { }

  routerActive: string = "activelink";

  ngOnInit(): void{

    this.messageService.getMessage().subscribe(res =>{
      this.username = res['text']
      this.isLogged = res['isLogged']
      this.isAdmin = res['idAdmin']
    },
    err => console.log(err));
    
  }


  hideSideBard() {
    this.showBarInfo = !this.showBarInfo;
  }

  public login(){
    this.loginService.login();
  }

  public logout(){
    this.loginService.logout();
  }

  sidebarMenu: sidebarMenu[] = [
    {
      link: "/home",
      icon: "home",
      menu: "Dashboard",
    },
    {
      link: "/teen",
      icon: "grid",
      menu: "Adolescentes",
    },
    {
      link: "/funcionary",
      icon: "disc",
      menu: "Funcionarios",
    },
    // {
    //   link: "/asignation",
    //   icon: "disc",
    //   menu: "Asignación",
    // },
    {
      link: "/bulk-Allocation",
      icon: "disc",
      menu: "Asignación Masiva",
    },
    {
      link: "/attendance",
      icon: "disc",
      menu: "Asistencia",
    },
    {
      link: "/view-attendance",
      icon: "disc",
      menu: "Vista de Asistencia",
    },
    /* {
      link: "/button",
      icon: "disc",
      menu: "Buttons",
    },
    {
      link: "/forms",
      icon: "layout",
      menu: "Forms",
    },
    {
      link: "/alerts",
      icon: "info",
      menu: "Alerts",
    },
    {
      link: "/grid-list",
      icon: "file-text",
      menu: "Grid List",
    },
    {
      link: "/menu",
      icon: "menu",
      menu: "Menus",
    },
    {
      link: "/expansion",
      icon: "divide-circle",
      menu: "Expansion Panel",
    },
    {
      link: "/chips",
      icon: "award",
      menu: "Chips",
    },
    {
      link: "/tabs",
      icon: "list",
      menu: "Tabs",
    },
    {
      link: "/progress",
      icon: "bar-chart-2",
      menu: "Progress Bar",
    },
    {
      link: "/toolbar",
      icon: "voicemail",
      menu: "Toolbar",
    },
    {
      link: "/progress-snipper",
      icon: "loader",
      menu: "Progress Snipper",
    },
    {
      link: "/tooltip",
      icon: "bell",
      menu: "Tooltip",
    },
    {
      link: "/snackbar",
      icon: "slack",
      menu: "Snackbar",
    },
    {
      link: "/slider",
      icon: "sliders",
      menu: "Slider",
    },
    {
      link: "/slide-toggle",
      icon: "layers",
      menu: "Slide Toggle",
    }, */
  ]

}
