// pages/home/home.js
import {Home} from 'home-model.js';

var home = new Home();

Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this._onLoad();
  },
  onReady:function(){
  wx.setNavigationBarTitle({
    title: '小铺面',
  })
  },
  _onLoad:function(){
    var id = 1;
    home.getBannerData(id,(res)=>{
      // console.log(res)
      this.setData({
        'bannerArr':res,
      })
    });
    var ids = ['1','2','3'];
    home.getThemeData(ids, (res) => {
      console.log(res)
      this.setData({
        'themeArr': res,
      })
    });

    home.getProductRecentData((res) => {
      console.log(res)
      this.setData({
        'product': res,
      })
    });

  },

  onPruductItem:function(even){
    var id = home.dataSet(even, 'id');
    wx.navigateTo({
      url: '../product/product?id='+id,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  onThemeItem: function (even) {
    var id = home.dataSet(even, 'id');
    var name = home.dataSet(even, 'name');
    console.log(name)
    wx.navigateTo({
      url: '../theme/theme?id=' + id+'&name='+name,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  
  // callBack:function(res){
  //   console.log(res)
  //   // return res;
  // },
 
})