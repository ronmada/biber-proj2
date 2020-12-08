import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  public isDescpHidden: boolean;
  public addNav = { icon_name: 'add', descp: 'Add New' };
  public navigations = [
    {
      icon_name: 'home',
      descp: 'Overview',
      path: 'overview',
      pathMatch: 'full',
    },
    {
      icon_name: 'data_usage',
      descp: 'masterData',
      path: 'masterData',
      pathMatch: 'full',
    },
    {
      icon_name: 'message',
      descp: 'campaign',
      path: 'campaign',
      pathMatch: 'full',
    },
    {
      icon_name: 'video_label',
      descp: 'coupons',
      path: 'coupons',
      pathMatch: 'full',
    },
    {
      icon_name: 'import_export',
      descp: 'imports',
      path: 'imports',
      pathMatch: 'full',
    },
  ];
  constructor() {}

  ngOnInit(): void {
    this.isDescpHidden = true;
  }
  toggleNav(): void {
    this.isDescpHidden = !this.isDescpHidden;
  }
  addNewItem(): void {
    alert('clicked on Add New');
  }
}
