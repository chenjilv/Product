
import {Base} from '../../utils/base.js';


class Category extends Base{

getCategory(sCallBack){
  var param = {
    'url': 'category/all',
     sCallBack:function(res){
      sCallBack&&sCallBack(res);
     }
  }
  this.request(param);
  }
getAllInCategory(id,sCallBack) {
    var param = {
      'url': 'product/by_category?id='+id,
      sCallBack: function (res) {
        sCallBack && sCallBack(res);
      }
    }
    this.request(param);

  }





}
export {Category};