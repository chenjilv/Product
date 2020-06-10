import {Base} from '../../utils/base.js';

class Home extends Base{
  constructor(){
    super();
  }

  getBannerData(id,callBack){
      var params = {
        url:'banner/'+id,
        sCallBack:function(res){
          callBack&&callBack(res.items)
        }

      }
    this.request(params);
  }

  getThemeData(ids,callBack){

   var params = {
       url:"theme?ids="+ids,
       sCallBack:function(res){
         callBack&&callBack(res);
       }

   }
   this.request(params);  
  }

  getProductRecentData(callBack) {

    var params = {
      url: "product/recent",
      sCallBack: function (res) {
        callBack && callBack(res);
      }

    }
    this.request(params);
  }


    // wx.request({
    //   url: 'http://localhost/Muke/public/api/v1/theme?ids=1,2,3',
    //   method:'Get',
    //   success:function(res){
    //     // console.log(res)

    //    callBack(res);

    //   }

    // })

}
export {Home};