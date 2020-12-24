const getAmount = price => {
    let trucedPrice = Math.trunc(price);

    return trucedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const getDecimal = price => (price % 1).toFixed(2);

exports.getAmount = getAmount;
exports.getDecimal = getDecimal;