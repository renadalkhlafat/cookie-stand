'use strict';
// --------------------Seattle object ---------------
let Seattle ={
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

}

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

let location = [Seattle, Tokyo, Dubai, Paris, Lima];

