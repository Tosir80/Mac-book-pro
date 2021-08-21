

function getPrice(product,price){
    const  getProduct =document.getElementById(product) ;
    if(price == 0){
        getProduct.innerText=price;
    }else if(price == 100){
        getProduct.innerText=price;
    }else if(price==20){
        getProduct.innerText=price;
    }
    else{
        getProduct.innerText=price;
    }
    setTotalPrice();
}

function getPriceValue(priceId){
     const total=document.getElementById(priceId);
     const price = parseFloat(total.innerText);
     return price ;
}
// Total Price Calculation 
function getTotalPrice(){
  
    const totalBestPrice = getPriceValue('best-price');
    const totalExtraMemoryPrice=getPriceValue('extra-memory');
    const totalExtraStoragePrice=getPriceValue('extra-storage');
    const totalDelivery=getPriceValue('delivery');
     const totalPrice=totalBestPrice + totalExtraMemoryPrice +totalExtraStoragePrice +totalDelivery;
     return totalPrice;   
}

// total Price show with discount
const totalPaymentPrice=document.getElementById('total-paymentprice');
function setTotalPrice(){
    const productPrice =document.getElementById('total-price');
   productPrice.innerText=getTotalPrice();
   totalPaymentPrice.innerText=getTotalPrice();
}
//total Price show without discount
 const couponBtn=document.getElementById('coupon-btn');
    couponBtn.addEventListener('click',function(){
    const couponInput=document.getElementById('coupon-input');
    const couponCode = couponInput.value;

    if(couponCode.toLowerCase()=='stevekaku'){
        const discountAmount=getTotalPrice()*20/100;
        totalPaymentPrice.innerText=getTotalPrice()-discountAmount;
    }else{
        alert("Promo code is not Matching");
    }
    couponInput.value=''
    })


// 8gb memory handle;
document.getElementById('8GB-memory').addEventListener('click',function(){
 getPrice('extra-memory' , 0);
    
})
// 16gb memory handle;
document.getElementById('16GB-memory').addEventListener('click',function(){
  getPrice('extra-memory' , 180);

})
// 256gb Ssd handle;
document.getElementById('256GB-Ssd').addEventListener('click',function(){
 getPrice('extra-storage' ,0);
})
// 512gb Ssd handle;
document.getElementById('512GB-Ssd').addEventListener('click',function(){
    getPrice('extra-storage' ,100);
})
// 1tb Ssd handle;
document.getElementById('1TB-Ssd').addEventListener('click',function(){
    getPrice('extra-storage' ,180);
})

// delivery
document.getElementById('free-delivery').addEventListener("click",function(){
      getPrice('delivery',0 );
})
document.getElementById('paid-delivery').addEventListener("click",function(){
    getPrice('delivery',20);
})
