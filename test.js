const { sum } = require('./app.js');

test("adds 14+9 to equal 23", () => {
    let total = sum(14,9)
    expect(total).toBe(23)
})

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One Dollar should be 146.26 Yen", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // Use the function like its supposed to be used
    const dollarsToYen = fromDollarToYen(3.5);

    // If 1 Dollar is 146.26 Yen, then 3.5 Dollar should be (3.5 * 1.07)
    const expectedDollarToYen = 3.5 * 146.26; 
    
    // This is the comparison for the unit test
    expect(fromDollarToYen(3.5)).toBe(511.91); // 1 Dollar is 146.26 Yen, then 3.5 Dollar should be = (3.5 * 146.26)
})

test("One Yen should be 0.005559105431309904 Pound", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');

    // Use the function like its supposed to be used
    const yenToPound = fromYenToPound(1000);

    // If 1 Yen is 0.005559105431309904 Pound, then 1000 Yen should be (1000 * 0.005559105431309904)
    const expectedyenToPound = 1000 * 0.005559105431309904; 
    
    // This is the comparison for the unit test
    expect(fromYenToPound(1000)).toBe(5.56); // 1 Yen is 0.005559105431309904 Pound, then 1000 Yen should be = (1000 * 0.005559105431309904)
})
