import { Component, OnInit, } from '@angular/core';
import {Router} from '@angular/router'
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {NestedTreeControl} from '@angular/cdk/tree';
import { library } from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    private router:Router
  ) {
    this.currentUrl = this.router.url.split('/');
    library.add(fas);
    this.dataSource.data = TREE_DATA; 
  }
  currentUrl:any[] = [];
  
  treeControl = new NestedTreeControl<MenuNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<MenuNode>();

  ngOnInit(): void {
  }

  hasChild = (_: number, node: MenuNode) => !!node.children && node.children.length > 0;

  onClick(rt:string){
    this.currentUrl = rt.split('/');
  }
  canActive(urlItem:string):boolean{
    if(!urlItem.includes('#')) return false;
    let urlAc = urlItem.substr(1,urlItem.length);
    return this.currentUrl.includes(urlAc);
  }

}

///
///
///
interface MenuNode {
  name: string;
  children?: MenuNode[];
  router?:string;
  icon?:string;
}
const TREE_DATA: MenuNode[] = [
  {
    name:'Tổng hợp',
    icon:'dvr',
    router:'dashboard'
  },
  {
    name: 'Đơn hàng', icon:'book',router:'#ex-order',
    children: [
      {name: 'Tạo đơn',icon:'control_point',router:'ex-order/new-order'},
      {name: 'Danh sách',icon:'table_rows',router:'ex-order/list-order'},
    ]
  }, {
    name: 'Nhà kho', icon:'villa',router:'#store',
    children: [
      {name: 'Sản phẩm',icon:'inventory_2',router:'store/list-product'},
      {name: 'Đơn nhập kho',icon:'archive',router:'store/im-order/list-order'},
    ]
  },{
    name: 'Hệ thống', icon:'settings',router:'#sys',
    children: [
      {name: 'Người dùng',icon:'person_add',router:'sys/list-user'},
      {name: 'Phân quyền',icon:'group_add',router:'sys/bind-permission'},
    ]
  }
];
