const { getAmount } = require('./commons');

const getItemDetails = (rs) => {

    let itemDetails = {
        author: {
            name: 'Lucas',
            lastname: 'Turco'
        },
        item: ''
    }

    const result = rs.data;
    if (result) {
        const item = {
            id: result.id,
            title: result.title,
            price: {
                currency: result.currency_id,
                amount: getAmount(result.price),
            },
            picture: result.pictures[0].url,
            condition: result.condition,
            free_shipping: result.free_shipping,
            sold_quantity: result.sold_quantity,
            category: result.category_id,
            description: ''
        }

        itemDetails.item = item;
    }

    return itemDetails;
}

const getItemCategories = (rs) => {
    const categories = rs.data.path_from_root.map(category => category.name);

    return categories ? categories : [];
}

const getItemDescription = (rs) => {
    const description = rs.data.plain_text;

    return description ? description : '';
}

exports.getItemCategories = getItemCategories;
exports.getItemDescription = getItemDescription;
exports.getItemDetails = getItemDetails;