'use strict';
let mainElement= document.getElementById('salesDetailes');
function randomNumber (min,max){
        
   return Math.floor(Math.random() * (max - min+ 1) +  min);
   }
//    console.log(randomNumber(5,3))
let hours= ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];
// --------------------Seattle object ---------------
let Seattle = 
{
    name:'Seattle',
    minCustomers:23,
    maxCustomers:65,
    averageCookies:6.3,
    totalCookies:0,
    locationInfo:[],

    customersPerHour :function(){
        for(let i=0;i<hours.length;i++){
            // console.log( Math.ceil(randomNumber(this.minCustomers,this.maxCustomers)*this.averageCookies))
            let cookies=Math.ceil(randomNumber(this.minCustomers,this.maxCustomers)*this.averageCookies)
            this.locationInfo.push(cookies);
            this.totalCookies += cookies;
    }
},
    renader :function(){

      let h2 =document.createElement('h2');
      mainElement.appendChild(h2);
      h2.textContent=this.name;

      let ul=document.createElement('ul');
      mainElement.appendChild(ul);

      for(let i=0;i<hours.length;i++){
          let li =document.createElement('li')
          ul.appendChild(li)
          li.textContent=`${hours[i]}: ${this.locationInfo[i]} cookies `;
      }
      let total =document.createElement('li')
          ul.appendChild(total)
          total.textContent=`Total : ${this.totalCookies} cookies `;

    },
}
console.log( Seattle.locationInfo);
// console.log(Seattle.totalCookies)
 Seattle.customersPerHour();
 Seattle.renader();
// console.log(Seattle.name)

// --------------------Tokyo object ---------------
let Tokyo ={
    name:'Tokyo',
    minCustomers:3,
    maxCustomers:24,
    averageCookies:1.2,
    locationInfo:[],


    customersPerHour:function(){
        this.minCustomers = Math.ceil(this.minCustomers);
        this.maxCustomers = Math.floor(this.maxCustomers);
        return Math.floor(Math.random() * (this.maxCustomers -  this.minCustomers + 1) +  this.minCustomers);
    },
    cookiesPurchased :function(){
        let amount=Math.ceil(this.averageCookies*this.customersPerHour(1,14));
        return amount;
      }
}
// --------------------Dubai object ---------------
let Dubai ={
    name:'Dubai',
    minCustomers:11,
    maxCustomers:38,
    averageCookies:3.7,
    locationInfo:[],

    customersPerHour:function(){
        this.minCustomers = Math.ceil(this.minCustomers);
        this.maxCustomers = Math.floor(this.maxCustomers);
        return Math.floor(Math.random() * (this.maxCustomers -  this.minCustomers + 1) +  this.minCustomers);
    },
    cookiesPurchased :function(){
        let amount=Math.ceil(this.averageCookies*this.customersPerHour(1,14));
        return amount;
      }
}
// --------------------Paris object ---------------

let Paris ={
    name:'Paris',
    minCustomers:20,
    maxCustomers:38,
    averageCookies:2.3,
    locationInfo:[],

    customersPerHour:function(){
        this.minCustomers = Math.ceil(this.minCustomers);
        this.maxCustomers = Math.floor(this.maxCustomers);
        return Math.floor(Math.random() * (this.maxCustomers -  this.minCustomers + 1) +  this.minCustomers);
    },
    cookiesPurchased :function(){
        let amount=Math.ceil(this.averageCookies*this.customersPerHour(1,14));
        return amount;
      },
     
}
// --------------------Lima object ---------------
let Lima ={
    name:'Lima',
    minCustomers:2,
    maxCustomers:16,
    averageCookies:4.6,
    locationInfo:[],
    customersPerHour:function(){
        this.minCustomers = Math.ceil(this.minCustomers);
        this.maxCustomers = Math.floor(this.maxCustomers);
        return Math.floor(Math.random() * (this.maxCustomers -  this.minCustomers + 1) +  this.minCustomers);
    },
    cookiesPurchased :function(){
        let amount=Math.ceil(this.averageCookies*this.customersPerHour(1,14));
        return amount;
      }
}


let shopName = [Seattle, Tokyo, Dubai, Paris, Lima];
