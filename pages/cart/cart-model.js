import { Base } from '../../utils/base.js';
class Cart extends Base{

   constructor(){
     super();
     this._key ='cart';
   }
/*
*添加商品到购物车
*是否缓存中已存在该商品，如果已存在则添加数量
*/

add(item, counts){
var cartData = this.getCartFromLocal();
 
var _isHasOne = this._isHasThatOne(item.id,cartData);
  
  
  if (_isHasOne.index ==-1){
    
   item.counts = counts;
   item.selectStatus =  true; //是否被选中
   cartData.push(item);
    
  }else{
    console.log('cartData[_isHasOne.index].counts的类型为' + typeof cartData[_isHasOne.index].counts); // 利用typeof判断array的类型
    console.log('counts的类型为' + typeof counts); // 利用typeof判断array的类型
    cartData[_isHasOne.index].counts+=counts;
    console.log(cartData[_isHasOne.index].counts);
  }
  
  wx.setStorageSync(this._key, cartData)

}
  

getCartFromLocal(){
  var res =  wx.getStorageSync(this._key);
  if(!res){
    res = [];
  }else{
    res = res;
  }
  return res;
}

_isHasThatOne(id,arr){
  var item;
  var result = {index:-1};
  for(let i=0;i<arr.length;i++){
    item = arr[i];
    if (item.id ==id){
      result ={
        index:i,
        data:item
      }
    break;
    }
  }
  return result;
}

}export {Cart}