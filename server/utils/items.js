const { getAmount, getDecimal } = require('./commons');
const getItems = (rs) => {
    const limit = 4;
    let itemsResult = [];

    if (rs.status == 200 && rs.data.results) {

        itemsResult = rs.data.results.slice(0, limit).map(item => {

            return {
                id: item.id,
                title: item.title,
                price: {
                    'currency': item.currency_id,
                    'amount': getAmount(item.price),
                    'decimals': getDecimal(item.price)
                },
                picture: item.thumbnail,
                condition: item.condition,
                free_shipping: item.shipping.free_shipping,
                address: item.address.state_name
            };
        });
    }

    return itemsResult;
};


const getCategories = (filters) => {
    let categories = filters.find(filter => filter.id == 'category');

    return categories ? categories.values[0].path_from_root.map(cat => cat.name) : [];
}

exports.getItems = getItems;
exports.getCategories = getCategories;