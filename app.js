const sum = (a,b) => {
    return a+b
}

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(n) {
    let convertionRateYentoDollar = Math.round((156.5 / 1.07)*100)/100
    return Math.round((convertionRateYentoDollar * n)*100)/100
}

const fromYenToPound = function(n) {
    let convertionRatePoundtoYen = 0.87 / 156.5
    return Math.round((convertionRatePoundtoYen * n)*100)/100
}
console.log(fromEuroToDollar(1));
console.log(fromDollarToYen(3.5));
console.log(fromYenToPound(1000));

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }