'use strict';
let mainElement= document.getElementById('salesDetailes');
const mainTable = document.getElementById('mainTable');
// mainElement.appendChild(mainTable);

function randomNumber (min,max){
   return Math.floor(Math.random() * (max - min+ 1) +  min);
}
//    console.log(randomNumber(5,3))
let hours= ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];

//------------------------build table header function-------------------
function renderTableHeader() {
    var hoursTbl = document.createElement('tr');
    mainTable.appendChild(hoursTbl);

    let shopLocation=document.createElement('th');
    shopLocation.textContent='';
    hoursTbl.appendChild(shopLocation);

    for (let i = 0; i < hours.length; i++) {
        let eachHour = document.createElement('th');
        eachHour.textContent = `${hours[i]}  `;
        hoursTbl.appendChild(eachHour);
    }
    let totalForLocation = document.createElement('th');
    totalForLocation.textContent = 'Daily Location Total';
    hoursTbl.appendChild(totalForLocation);
  }
  renderTableHeader()//call the header render function
//--------------------create shope constructor----------------------------
function Shope(name,minCustomers,maxCustomers,averageCookies){
    this.name=name;
    this.minCustomers=minCustomers;
    this.maxCustomers=maxCustomers;
    this.averageCookies=averageCookies;
    this.totalCookies=0;
    this.locationInfo=[];
    this.cookiesPerchased=[];
}
    Shope.prototype.renader =function(){
        let bodyTable = document.createElement('tr');
        mainTable.appendChild(bodyTable);

    let nameOfCity = document.createElement('td');
    nameOfCity.textContent = this.name;
    bodyTable.appendChild(nameOfCity);

    for (let i = 0; i < hours.length; i++) {
        let dailySales = document.createElement('td');
        dailySales.textContent = this.cookiesPerchased[i];
        bodyTable.appendChild(dailySales);
    }
    let dailyCookies = document.createElement('td');
    dailyCookies.textContent = this.totalCookies;
    bodyTable.appendChild(dailyCookies);

    // mainTable.appendChild(bodyTable);
}
    Shope.prototype.customersPerHour =function(){
        
        for(let i=0;i<hours.length;i++){
            let cust=Math.ceil(randomNumber(this.minCustomers,this.maxCustomers)*this.averageCookies)
                    this.locationInfo.push(cust);
        }
     };

    Shope.prototype.getcookiesPerchased =function(){
        for(let i=0;i<hours.length;i++){
            let cookies=Math.ceil(this.locationInfo[i]*this.averageCookies)
            this.cookiesPerchased.push(cookies);
            this.totalCookies += cookies;
        }
    };

//---------------------------create the objects and call the methods-------
let seattle=new Shope('Seattle',23 ,65 ,3.6 ,0);
seattle.customersPerHour();
seattle.getcookiesPerchased();
seattle.renader();

let tokyo=new Shope('Tokyo',3 ,24 ,1.2 ,0);
tokyo.customersPerHour();
tokyo.getcookiesPerchased();
tokyo.renader();

let Dubai=new Shope('Dubai',11 ,38 ,3.7 ,0);
Dubai.customersPerHour();
Dubai.getcookiesPerchased();
Dubai.renader();

let Paris=new Shope('Paris',20 ,38 ,2.3 ,0);
Paris.customersPerHour();
Paris.getcookiesPerchased();
Paris.renader();

let Lima=new Shope('Lima',2 ,16 ,4.6 ,0);
Lima.customersPerHour();
Lima.getcookiesPerchased();
Lima.renader();

//------------------------
function CitiesHoursTotal() {
    let arrOFTotal = [];
    let sumArrayTotal=0;
    for (let i = 0; i < hours.length; i++) {
        sumArrayTotal = seattle.locationInfo[i] + tokyo.locationInfo[i] + Dubai.locationInfo[i] + Paris.locationInfo[i] + Lima.locationInfo[i]
        arrOFTotal.push(sumArrayTotal);
    }
    return arrOFTotal;
}

let dailyTotal=seattle.totalCookies + tokyo.totalCookies + Dubai.totalCookies + Paris.totalCookies + Lima.totalCookies;;

function renderTableFooter(){
    let tableFooter = document.createElement('tr');
    mainTable.appendChild(tableFooter);

    let totalDes = document.createElement('td');
    totalDes.textContent = ' Total';
    tableFooter.appendChild(totalDes);

    for (let i = 0; i < hours.length; i++) {
        // let hoursTotal = 0;
        let eachTotal = document.createElement('td');
        eachTotal.textContent= CitiesHoursTotal()[i];
        tableFooter.appendChild(eachTotal);
    }
    let totalOftotal = document.createElement('td');
    totalOftotal.textContent = dailyTotal;
    tableFooter.appendChild(totalOftotal);
}
    renderTableFooter();