const sum = (a,b) => {
    return a + b
};
console.log(sum(7,3));

module.exports = { sum , fromDollarToYen , fromEuroToDollar ,fromYenToPound};

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
};


function fromDollarToYen (dollar)  {
   let result = (dollar * oneEuroIs.JPY)/oneEuroIs.USD
   return(result)
};
function fromEuroToDollar (euro)  {
    let result = (euro * oneEuroIs.USD)
    return(result)
 };
 function fromYenToPound (yen)  {
    let result = (yen * oneEuroIs.GBP)/oneEuroIs.JPY
    return(result)
 };


