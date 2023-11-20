const { sum , fromEuroToDollar , fromYenToPound , fromDollarToYen} = require('./app.js');

test('adds 14 + 9 to equal 23', () => {

    let total = sum(14, 9);

    expect(total).toBe(23);
});

test("1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)", function() {
   
    
    let dollars = fromEuroToDollar(3.5);
    
    let expected =  3.5 * 1.07;
    
    expect(dollars).toBe(expected); 
});

test("3,5 dollars should be 511 yen ", function() {
   
    
    let yen = fromDollarToYen(3.5);
   
    let expected = (3.5 * 156.5) / 1.07;
    
    expect(yen).toBe(expected); 
});

test("3,5 pund should be 0.019 yen ", function() {
   
    
    let pound = fromYenToPound(3.5);
    
    let expected = (3.5 * 0.87) / 156.5 ;
    
    expect(pound).toBe(expected); 
});

