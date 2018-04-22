import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides,MenuController } from 'ionic-angular';
import { NgSwitch } from '@angular/common';
import { Directive } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera, CameraOptions } from '@ionic-native/camera';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
@Directive({ selector: '[ngSwitch]' })
export class HomePage {
  activeMenu: string;
  @ViewChild(Slides) slides: Slides;
  ngSwitch: any;
  constructor(public navCtrl: NavController, public menuCtrl: MenuController, private statusBar: StatusBar, private camera: Camera) {

  }
  ngAfterViewInit() {
    this.slides.freeMode = true;
    this.slides.loop = true;
    this.slides.autoplay = 1000;
  }
  appType = 'Paid';

  apps: any = {
    'Paid': [
      {
        name: '资产包转让',
        img: '../../assets/imgs/money.png'
      },
      {
        name: '债权转让',
        img: '../../assets/imgs/zqtrans.png'
      },
      {
        name: '固产转让',
        img: '../../assets/imgs/gctrans.png'
      },
      {
        name: '商业保理',
        img: '../../assets/imgs/sybaoxian.png'
      },
      {
        name: '典当担保',
        img: '../../assets/imgs/danbao.png'
      },
      {
        name: '融资借贷',
        img: '../../assets/imgs/rz.png'
      }, {
        name: '悬赏信息',
        img: '../../assets/imgs/xs.png'
      },
      {
        name: '尽职调查',
        img: '../../assets/imgs/dc.png'
      }
    ],
    'Free': [

      {
        name: '资产包转让',
        img: '../../assets/imgs/money.png'
      },
      {
        name: '债权转让',
        img: '../../assets/imgs/zqtrans.png'
      },
      {
        name: '固产转让',
        img: '../../assets/imgs/gctrans.png'
      },
      {
        name: '商业保理',
        img: '../../assets/imgs/sybaoxian.png'
      },

    ],

  };

  getItems(type: any) {
    return this.apps[type];

  }
  private num = 0;
  changeElement(): void {
    if (this.num > 3) {
      this.num = 0;
    }
    this.num++;
  }

  items = [{
    name: '地区：北京',
    source: '银行',
    namelist: '资产包转让',
    moneyName: '资金',
    money: '100万'
  },
  {
    name: '地区：北京',
    source: '类型：借贷', 
    namelist: '委外催收', 
    moneyName: '合购金额',
    money: '500万'
  },
  {
    name: '地区：北京',
    source: '买方性质：国企', 
    namelist: '商业保理', 
    moneyName: '资金',
    money: '500万'
  }];

  doInfinite(infiniteScroll) {
    setTimeout(() => {
      for (let i = 0; i < 3; i++) {
        this.items.push({
          name: '地区：北京',
          source: '银行',
          namelist: '资产包转让',
          moneyName: '资金',
          money: '100万'
        },
          {
            name: '地区：北京',
            source: '类型：借贷',
            namelist: '委外催收',
            moneyName: '合购金额',
            money: '500万'
          },
          {
            name: '地区：北京',
            source: '买方性质：国企',
            namelist: '商业保理',
            moneyName: '资金',
            money: '500万'
          });
      }


      infiniteScroll.complete();
      if (this.items.length >= 300) {
        console.log(this.items.length);
        infiniteScroll.enable(false);
      }
    }, 1000);
  }
}
