'use strict';
let mainElement= document.getElementById('salesDetailes');
const mainTable = document.getElementById('mainTable');

function randomNumber (min,max){
   return Math.floor(Math.random() * (max - min+ 1) +  min);
}

let hours= ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];
let addLocation = document.getElementById('addNew');

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
 
//--------------------create shope constructor----------------------------
let allcook=[];
function Shope(name,minCustomers,maxCustomers,averageCookies){
    this.name=name;
    this.minCustomers=minCustomers;
    this.maxCustomers=maxCustomers;
    this.averageCookies=averageCookies;
    this.totalCookies=0;
    this.locationInfo=[];
    this.cookiesPerchased=[];
    allcook.push(this);
}

    Shope.prototype.renader =function(){
        let bodyTable = document.createElement('tr');
        mainTable.appendChild(bodyTable);

    let nameOfCity = document.createElement('th');
    nameOfCity.textContent = this.name;
    bodyTable.appendChild(nameOfCity);

    for (let i = 0; i < hours.length; i++) {
        let dailySales = document.createElement('td');
        dailySales.textContent = this.cookiesPerchased[i];
        bodyTable.appendChild(dailySales);
    }
    let dailyCookies = document.createElement('th');
    dailyCookies.textContent = this.totalCookies;
    bodyTable.appendChild(dailyCookies);

    // mainTable.appendChild(bodyTable);
}
    Shope.prototype.customersPerHour =function(){
        
        for(let i=0;i<hours.length;i++){
            let cust=Math.ceil(randomNumber(this.minCustomers,this.maxCustomers))
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
let Seattle=new Shope('Seattle',23 ,65 ,3.6 ,0);
let Tokyo=new Shope('Tokyo',3 ,24 ,1.2 ,0);
let Dubai=new Shope('Dubai',11 ,38 ,3.7 ,0);
let Paris=new Shope('Paris',20 ,38 ,2.3 ,0);
let Lima=new Shope('Lima',2 ,16 ,4.6 ,0);
Lima.customersPerHour();
Lima.getcookiesPerchased();
Lima.renader();


let arrOFTotal = [];
function CitiesHoursTotal(index) {
    let sumArrayTotal=0;

    for (let i = 0; i < allcook.length ; i++) {
        sumArrayTotal += allcook[i].cookiesPerchased[index];
        arrOFTotal.push(sumArrayTotal);
    }
    return sumArrayTotal;
}

function totalOfTotalCook(){
    let tot=0;
    for (let i = 0; i < arrOFTotal.length ; i++){
        tot +=arrOFTotal[i];   
    }
    console.log(tot);
    return tot;

}

function renderTableFooter(){
    let tableFooter = document.createElement('tr');
    mainTable.appendChild(tableFooter);

    let totalDes = document.createElement('th');
    totalDes.textContent = ' Total';
    tableFooter.appendChild(totalDes);
   
    for (let i = 0; i < hours.length; i++) {
        let eachTotal = document.createElement('td');
        eachTotal.textContent= CitiesHoursTotal(i);
        tableFooter.appendChild(eachTotal);
       
    }

    let totalOftotal = document.createElement('th');
    totalOftotal.textContent = totalOfTotalCook();
    tableFooter.appendChild(totalOftotal);

}

    
//-------------create action listener function ---------------------

function createNewLocation(event){
    event.preventDefault();
    let cityName = event.target.cityName.value.split(',');
    let minCust = event.target.minCustomer.value;
    let maxCust = event.target.maxCustomer.value;
    let avg = event.target.avgCookies.value;

    mainTable.innerHTML='';
    renderAndCalc();

    new Shope(cityName,minCust,maxCust,avg);
    let flag=false;
    for(let i=0;i<allcook.length;i++){
    if ((allcook[i].name).toLowerCase() === event.target.cityName.value.toLowerCase())
    {
        alert('This location already exist \n please try to change the name');
        flag=false;
        break ;
    }else{flag=true;}
 }  
    if(flag){
        new Shope(cityName,minCust,maxCust,avg);
        renderAndCalc();
    }
}

addLocation.addEventListener('submit',createNewLocation);
//----------- call the renderTableFooter function -----------------

function renderAndCalc(){
    renderTableHeader()//call the header render function

    for (let i in allcook)
    {
        allcook[i].customersPerHour()
        allcook[i].getcookiesPerchased()
        allcook[i].renader()
    }
    renderTableFooter();
}
renderAndCalc();
