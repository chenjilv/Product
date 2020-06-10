import { Base } from '../../utils/base.js';

class Theme extends Base{
constructor(){
    super();
  }
 
  getThemeProduct(id,callBack){
   var param ={
     'url':'theme/'+id,
     sCallBack:function(res){
      //  console.log(res)
       callBack&callBack(res)
     }
    

   }
   this.request(param);

 }

}
export {Theme}