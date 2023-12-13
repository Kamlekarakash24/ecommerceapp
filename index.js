var olist=document.getElementById('olist');
  
function additem(){
  var cardcount=document.getElementById('cart-count');
  cardcount.innerHTML=olist.length;

  var retrievedata=JSON.parse(localStorage.getItem('orderdata'));
   console.log(retrievedata);
   for(let i=0;i<retrievedata.length;i++){
   
   var listpart=document.createElement('div');
   listpart.classList.add('listpart');
   var picpart=document.createElement('div');
   var detailpart=document.createElement('div');

   var pic=document.createElement('img');
   pic.src=retrievedata[i].image;
   pic.setAttribute('height','100px');
   picpart.append(pic);

   var n=document.createElement('h3');
   n.textContent=retrievedata[i].name;

   var p=document.createElement('h5');
   p.textContent="RS :"+retrievedata[i].price;
   detailpart.append(n);
   detailpart.append(p);
listpart.append(picpart);
listpart.append(detailpart);
document.getElementById('ttam').innerHTML=retrievedata[i].price
     console.log(ttam);

return listpart;
   }
   
}
function orderlist(pic,name,price) {
  var orderobj={"image":pic,
 "name":name,
  "price":price };
 //console.log(orderobj);
 var mycart=[]
 mycart.push(orderobj);
 var storedata=localStorage.setItem('orderdata',JSON.stringify(mycart));

 
 
}
olist.append(additem());



var placeorder=document.getElementById('placeorder');
placeorder.addEventListener('click',function(){
   location.href='orderplaced.html'
   localStorage.removeItem('orderdata')});




 