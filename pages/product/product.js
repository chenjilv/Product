// pages/product/product.js
import {Product} from '../product/product-model.js';
import { Cart } from '../cart/cart-model.js';

var product = new Product();
var cart = new Cart();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:1,
    // pickerArr : ['1','2','3','4','5','6','7','8','9','10'],
    pickerArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    currentTabsIndex:'0'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id =options.id;
    this.data.id= id;
    this._onLoad();
  },
  _onLoad:function(){
    product.getProductDetail(this.data.id,data=>(
      console.log(data),
      this.setData({
        'detail':data
      })
    
  ));

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '商品详情',
    })

  },

  numbers: function (even){
    console.log(even)
    console.log('counts的类型为' + typeof this.data.pickerArr[even.detail.value]); // 利用typeof判断array的类型
    
    this.setData({
      'index':this.data.pickerArr[even.detail.value]
    });
   
  },
  bindTabstap:function(even){
    this.setData({
      'currentTabsIndex': even.currentTarget.dataset.index,
    });
    console.log(even.currentTarget.dataset.index)
  },
  addCartTap:function(){

    // var item = this.data.detail;
    // var counts = this.data.index;
    // console.log(item)
    // console.log(counts)
    // wx.navigateTo({
    //   url: '../',
    //   success: function(res) {},
    //   fail: function(res) {},
    //   complete: function(res) {},
    // })
    // var _key = 'cart';
    // wx.setStorageSync(_key, data)
    // cart.add(item, counts);
    this.addToCart();
  },
  addToCart:function(){
    var tempObj ={};
    var keys = ['id', 'name','main_img_url','price'];
    for (let key in this.data.detail){
      if (keys.indexOf(key)>=0){
        tempObj[key] = this.data.detail[key];
      }
    }

    cart.add(tempObj, this.data.index);
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})