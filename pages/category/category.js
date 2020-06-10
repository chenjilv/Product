
import {Category} from '../category/category-model.js';

var category = new Category();


// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    transClassArr: ['translate1','translate2','translate3','translate4','translate5','translate6'],
    catagoryIndex:0,
    loadedData:{}

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._onLoad();
  },
  _onLoad:function(options){

    category.getCategory(getCategory=>{
      this.setData({
        'catagoryArr': getCategory
      });
      category.getAllInCategory(getCategory['0'].id, data => {
       var dataobj ={
         'topimg' : getCategory['0'].img.url,
         'title': getCategory['0'].name,
         'products' : data
       }
        this.setData({
          'productobj0': dataobj
        });
        this.data.loadedData[0] = dataobj;
      
      });
    });
  },

  isLoadedData:function(index){
    if(this.data.loadedData[index]){
      return true;
    }
    return false;
  },


  categoryTap:function(even){
    var index = even.target.dataset.index;
    var id = even.target.dataset.id;
    console.log(index)
    this.setData({
      'catagoryIndex': index
    });

      if(!this.isLoadedData(index)){
        // var that = this;
        this.getProductBycategory(id,data=>(

          this.setData(this.getDataByBind(index, data)),
          console.log(this.getDataByBind(index, data))

          // this.setData()
        ));
      }
      },

      // category.getAllInCategory(id, data => {
        
      //   var dataobj = {
      //     'topimg': this.data.catagoryArr[index].img.url,
      //     'title': this.data.catagoryArr[index].name,
      //     'products': data
      //   }
      //   this.setData({
      //     'productobj': dataobj
      //   });
      //   this.data.loadedData[index] = dataobj;
      // });
      // }
      // else{
      //   this.setData({
      //     'productobj': this.data.loadedData[index]
      //   });
      // }
    // });
  // },
  getDataByBind(index,data){
    // console.log(index)
    var obj ={};
    var arr = ['0','1','2','3','4','5'];
    var bastData = this.data.catagoryArr[index];
    // console.log(bastData)
    for(var item in arr){
      if(item = arr[index]){
        obj['productobj'+item] = {
          'topimg': bastData.img.url,
          'title': bastData.name,
          'products': data
        }

      
       return obj;
      }
    }
  },

  //首次点击获取分类
  getProductBycategory:function(id,callBack){
    category.getAllInCategory(id, data=>(
        callBack&&callBack(data)
    ));

  },

  productDetail:function(even){
    var id = even.currentTarget.dataset.id;

    wx.navigateTo({
      url: '../product/product?id='+id,
      success: function(res) {

        
      },
      fail: function(res) {},
      complete: function(res) {},
    })

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '分类',
    })

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