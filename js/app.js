'use strict';
let mainElement= document.getElementById('dailySales');

// --------------------Seattle object ---------------
let Seattle = 
{
    name:'Seattle',
    minCustomers:23,
    maxCustomers:65,
    averageCookies:6.3,
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
    // render: function(){
    //     let locName=document.createElement('h2');//locName
    //     locName.textContent=this.name;
    //     mainElement.appendChild(locName);
    //     let unorderedList=document.createElement('ul');
    //     mainElement.appendChild(unorderedList);
    //     let totalCookies=0;
    //     for(let a=6; a<21; a++ ){
    //     //   let randmCustomer=Math.floor(Math.random() * this.maximumCustemers) + this.minimumCustomers;
    //     //   let randmCustomerPurshase=randmCustomer*this.avgCookiePerCustomer;
    //     //   randmCustomerPurshase.toFixed(0);
    //       if(a<12){
    //         let hour=document.createElement('li');
    //         unorderedList.appendChild(hour);
    //         hour.textContent=`${a}am:${this.customersPerHour()} cookies`;
    //         totalCookies=totalCookies+this.customersPerHour();
    //       }else if(a===12){
    //         let hour=document.createElement('li');
    //         unorderedList.appendChild(hour);
    //         hour.textContent=`${a}pm:${this.customersPerHour()} cookies`;
    //       }else if(a>12 && a<20){
    //         let hour=document.createElement('li');
    //         unorderedList.appendChild(hour);
    //         hour.textContent=`${a-12}pm:${this.customersPerHour()} cookies`;
    //       }else if(a===20){
    //         let totalSales=document.createElement('li');
    //         unorderedList.appendChild(totalSales);
    //         totalSales.textContent=`Total:${totalCookies} cookies`;
    //       }
    //     }
    // }
}
console.log( Seattle.cookiesPurchased());
// Seattle.render();
console.log(Seattle.name)

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
