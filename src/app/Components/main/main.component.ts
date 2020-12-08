import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  public isDescpHidden: boolean;
  public addNav = { icon_name: 'add', descp: 'add new' };
  public navigations = [
    // { icon_name: 'add', descp: 'add new', path: 'addnew', pathMatch: 'full' },
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
    this.isDescpHidden = false;
  }
  toggleNav() {
    this.isDescpHidden = !this.isDescpHidden;
    console.log('bigNavBool :  ', this.isDescpHidden);
  }
  addNewItem() {
    console.log('add new item');
  }
}
