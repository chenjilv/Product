import {Config} from 'config.js';
class Base{

constructor(){
  this.BaseRestUrl = Config.restUrl;
};

request(params){
  var url = this.BaseRestUrl+params.url; 
  if(!params.type){
    params.type = 'GET';
  }
  wx.request({
    url: url,
    method: params.type,
    data: params.data,
    header:{
      'content-type':'application/json',
      'token' : wx.getStorageSync('token')
    },
    success: function(res) {
      // if(params.sCallBack){
      //     params.sCallBack(res);
      // }
      params.sCallBack&&params.sCallBack(res.data);

    },
    fail: function(err) {
      console.log(err)
    },
    })
  }
  // 绑点事件获取wxml传递的值
  dataSet(even,key){
    return even.currentTarget.dataset[key];
  }

}
export{Base};
