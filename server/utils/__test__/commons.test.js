const { getAmount, getDecimal } = require('../commons.js');

test('get the amount properly with cents', () => {

    expect(getAmount(799.9)).toBe("799");
})

test('get the amount properly from integers', () => {

    expect(getAmount(5)).toBe("5");
})


test('get the decimals properly with cents', () => {

    expect(getDecimal(799.9)).toBe("0.90");
})

test('get the decimals properly from integers', () => {

    expect(getDecimal(5)).toBe("0.00");
})