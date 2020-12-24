const express = require('express')
const router = express()
const axios = require('axios')
const { getItems, getCategories } = require('../utils/items.js')

router.get('/api/items', async(req, res) => {
    const search = req.query.search;
    try {
        const rs = await axios.get(
            `${process.env.MELI_SEARCH_URL}/sites/MLA/search?q=:${search}`
        );

        const searchResult = getItems(rs);

        const categories = searchResult ? getCategories(rs.data.filters) : [];

        const result = {
            searchResult: searchResult,
            title: "Items",
            categories: categories,
            search: search,
        };

        res.status(200).send(result);
    } catch (error) {
        res.status(404).send(error);
    }
})

module.exports = router;