const { getAmount } = require('./commons');

const getItemDetails = (rs) => {
    let itemDetails = {};
    const result = rs.data;

    if (rs.status == 200 && result) {
        const item = {
            id: result.id,
            title: result.title,
            price: {
                currency: result.currency_id,
                amount: getAmount(result.price),
            },
            picture: result.pictures[0].url,
            condition: result.condition,
            free_shipping: result.shipping.free_shipping,
            sold_quantity: result.sold_quantity,
            category: result.category_id,
            description: ''
        }

        itemDetails = item;
    }

    return itemDetails;
}

const getItemCategories = (rs) => {

    return rs.status == 200 && rs.data.path_from_root ? rs.data.path_from_root.map(category => category.name) : [];
}

const getItemDescription = (rs) => {

    return rs.status == 200 && rs.data.plain_text ? rs.data.plain_text : '';
}

exports.getItemCategories = getItemCategories;
exports.getItemDetails = getItemDetails;
exports.getItemDescription = getItemDescription;