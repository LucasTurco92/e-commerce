const express = require('express')
const router = express()
const axios = require('axios')
const { getItems, getCategories } = require('../utils/items.js')
const { getItemCategories, getItemDescription, getItemDetails } = require('../utils/item-details.js')
const author = {
    name: 'Lucas',
    lastname: 'Turco'
}


router.get('/api/items', async(req, res) => {
    const search = req.query.search;

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
        const badResult = {
            author: author,
            items: [],
            title: "Ups algo salió mal!",
            categories: [],
            search: search,
        };
        res.status(200).send(badResult);
    }
});

router.get('/api/items/:id', async(req, res) => {
    const id = req.params.id;

    try {
        const rs = await axios.get(
            `${process.env.MELI_SEARCH_URL}/items/${id}`
        );

        const item = getItemDetails(rs);

        const thereIsAnItem = item != "";

        const categories =
            thereIsAnItem ?
            getItemCategories(
                await axios.get(
                    `${process.env.MELI_SEARCH_URL}/categories/${item.category}`
                )
            ) : [];

        item.description = thereIsAnItem ? getItemDescription(await axios.get(`${process.env.MELI_SEARCH_URL}/items/${id}/description`)) : '';

        const result = {
            author: author,
            item: item,
            categories: categories
        }
        res.status(200).send(result);
    } catch (error) {
        const badResult = {
            author: author,
            item: { title: 'Ups algo salió mal!' },
            categories: [],
        };

        res.status(200).send(badResult);
    }
});


module.exports = router;