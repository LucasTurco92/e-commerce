const express = require('express')
const router = express()
const axios = require('axios')
const { getItems, getCategories } = require('../utils/items.js')
const { getItemCategories, getItemDescription, getItemDetails } = require('../utils/item-details.js')

router.get('/api/items', async(req, res) => {
    const search = req.query.search;

    const author = {
        name: 'Lucas',
        lastname: 'Turco'
    }

    try {
        const rs = await axios.get(
            `${process.env.MELI_SEARCH_URL}/sites/MLA/search?q=:${search}`
        );

        const items = getItems(rs);

        const categories = items ? getCategories(rs.data.filters) : [];

        const result = {
            author: author,
            items: items,
            title: "Items",
            categories: categories,
            search: search,
        };

        res.status(200).send(result);
    } catch (error) {
        res.status(404).send(error);
    }
});

router.get('/api/items/:id', async(req, res) => {
    const id = req.params.id;

    try {
        const rs = await axios.get(
            `${process.env.MELI_SEARCH_URL}/items/${id}`
        );

        const itemDetails = getItemDetails(rs);

        const thereIsAResultItem = itemDetails.item != "";

        const description =
            thereIsAResultItem ?
            getItemDescription(
                await axios.get(`${process.env.MELI_SEARCH_URL}/items/${id}/description`)
            ) :
            "";

        const categories =
            thereIsAResultItem ?
            getItemCategories(
                await axios.get(
                    `${process.env.MELI_SEARCH_URL}/categories/${itemDetails.item.category}`
                )
            ) : [];

        const result = {
            details: itemDetails,
            categories: categories,
            description: description
        }
        res.status(200).send(result);
    } catch (error) {
        res.status(404).send(error);
    }
});


module.exports = router;