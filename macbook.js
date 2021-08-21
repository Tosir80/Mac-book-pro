// memory  button
const memory8GB=document.getElementById('8GB-memory')
const memory16GB=document.getElementById('16GB-memory');
//ssd storage  button
const storage256GB=document.getElementById('256GB-Ssd');
const storage51256GB=document.getElementById('512GB-Ssd');
const storage1TB=document.getElementById('1TB-Ssd');
// delivery button
const freeDelivery=document.getElementById('free-delivery');
const paidDelivery=document.getElementById('paid-delivery');

// coupon
const totalPaymentPrice=document.getElementById('total-paymentprice')
 


function getPrice(product,price){
    const  getProduct =document.getElementById(product) ;
    if(price == 0){
        getProduct.innerText=price
    }else if(price == 100){
        getProduct.innerText=price
    }else if(price==20){
        getProduct.innerText=price
    }
    else{
        getProduct.innerText=price
    }
    setTotalPrice()
}
// Total Price Calculation 
function getTotalPrice(){
    const bestPrice=document.getElementById('best-price')
    const extraMemoryPrice =document.getElementById('extra-memory')
    const extraStoragePrice =document.getElementById('extra-storage')
    const delivery =document.getElementById('delivery')

    const totalBestPrice = parseFloat(bestPrice.innerText)
    const totalExtraMemoryPrice=parseFloat(extraMemoryPrice.innerText)
    const totalExtraStoragePrice=parseFloat(extraStoragePrice.innerText)
    const totalDelivery=parseFloat(delivery.innerText)
     const totalPrice=totalBestPrice + totalExtraMemoryPrice +totalExtraStoragePrice +totalDelivery;
     return totalPrice
     
}

// total Price show with discount
function setTotalPrice(){
    const productPrice =document.getElementById('total-price')
   productPrice.innerText=getTotalPrice()
   totalPaymentPrice.innerText=getTotalPrice() 
}
//total Price show without discount
 const couponBtn=document.getElementById('coupon-btn');
    couponBtn.addEventListener('click',function(){
    const couponInput=document.getElementById('coupon-input')
    const couponCode = couponInput.value

    if(couponCode.toLowerCase()=='stevekaku'){
        const discountAmount=getTotalPrice()*20/100;
        totalPaymentPrice.innerText=getTotalPrice()-discountAmount
    }else{
        alert("Promo code is not Matching")
    }
    couponInput.value=''
    })


// 8gb memory handle;
memory8GB.addEventListener('click',function(){
 getPrice('extra-memory' , 0)
    
})
// 16gb memory handle;
memory16GB.addEventListener('click',function(){
  getPrice('extra-memory' , 180)

})
// 256gb Ssd handle;
storage256GB.addEventListener('click',function(){
 getPrice('extra-storage' ,0)
})
// 512gb Ssd handle;
storage51256GB.addEventListener('click',function(){
    getPrice('extra-storage' ,100)
})
// 1tb Ssd handle;
storage1TB.addEventListener('click',function(){
    getPrice('extra-storage' ,180)
})

// delivery
freeDelivery.addEventListener("click",function(){
      getPrice('delivery',0 )
})
paidDelivery.addEventListener("click",function(){
    getPrice('delivery',20)
})
