// Code your solution in this file! 
const returnFirstTwoDrivers = function (drivers) { 
 return drivers.slice(0,2)
}

const returnLastTwoDrivers = function (drivers) { 
    return drivers.slice(-2)
} 
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]; 

function createFareMultiplier(multiplier) { 
    return function(value) { 
        return value * multiplier 
    }
} 

const fareDoubler = createFareMultiplier(2) 
console.log(fareDoubler(10)) 

const fareTripler = createFareMultiplier(3) 
console.log (fareTripler(10))

function selectDifferentDrivers(drivers,func) { 
    return func(drivers) 
} 
 returnFirstTwoDrivers(drivers);  
 returnLastTwoDrivers(drivers); 






