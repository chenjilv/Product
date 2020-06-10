import {Base} from '../../utils/base.js';
class Product extends Base{
  constructor(){
    super();
  }
  getProductDetail(id,callBack){
    var param ={
      'url':'product/'+id,
     sCallBack:function(res){
      callBack&callBack(res);
      }
    }
    this.request(param);
  };
}
export {Product};