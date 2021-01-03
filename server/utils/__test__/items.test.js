const { getItems, getCategories } = require('../items.js');

test('get the items results properly', () => {
    const items = [{
            "id": "MLA901421848",
            "title": "iPhone 11 64 Gb Negro",
            "price": {
                "currency": "ARS",
                "amount": "159.999",
                "decimals": "0.00"
            },
            "picture": "http://http2.mlstatic.com/D_916062-MLA43654417337_102020-I.jpg",
            "condition": "new",
            "free_shipping": true,
            "address": "Santa Fe"
        },
        {
            "id": "MLA899063004",
            "title": "iPhone 7 32 Gb Negro Mate",
            "price": {
                "currency": "ARS",
                "amount": "67.799",
                "decimals": "0.00"
            },
            "picture": "http://http2.mlstatic.com/D_942036-MLA31003118587_062019-I.jpg",
            "condition": "new",
            "free_shipping": true,
            "address": "Buenos Aires"
        },
        {
            "id": "MLA884965198",
            "title": "iPhone 11 Pro Max 64 Gb Gris Espacial",
            "price": {
                "currency": "ARS",
                "amount": "246.000",
                "decimals": "0.00"
            },
            "picture": "http://http2.mlstatic.com/D_645254-MLA32646972200_102019-I.jpg",
            "condition": "new",
            "free_shipping": true,
            "address": "Capital Federal"
        },
        {
            "id": "MLA901685706",
            "title": "iPhone SE (2nd Generation) 64 Gb Blanco",
            "price": {
                "currency": "ARS",
                "amount": "105.000",
                "decimals": "0.00"
            },
            "picture": "http://http2.mlstatic.com/D_732162-MLA42320762979_062020-I.jpg",
            "condition": "new",
            "free_shipping": true,
            "address": "Santa Fe"
        }
    ];

    expect(getItems(rs)).toStrictEqual(items);
})

test('get the items results empty properly when the results status is not 200', () => {
    const items = [];

    expect(getItems(badRs)).toStrictEqual(items);
})

test('get the items results empty properly when there are no results', () => {
    const items = [];

    expect(getItems(emptyRs)).toStrictEqual(items);
})

test('get the categories properly', () => {
    const categories = [
        "Celulares y Teléfonos",
        "Celulares y Smartphones"
    ];

    expect(getCategories(rs.data.filters)).toStrictEqual(categories);
})

test('get the no categories when the filters are empties', () => {
    const categories = [];

    expect(getCategories(emptyRs.data.filters)).toStrictEqual(categories);
})


const emptyRs = {
    status: 200,
    data: {
        "site_id": "MLA",
        "query": ":vxcvxcvxcvxcv",
        "paging": {
            "total": 0,
            "primary_results": 1000,
            "offset": 0,
            "limit": 50
        },
        "results": [],
        "secondary_results": [],
        "related_results": [],
        "sort": {
            "id": "relevance",
            "name": "More relevant"
        },
        "available_sorts": [],
        "filters": [],
        "available_filters": []
    }
};

const rs = {
    status: 200,
    data: {
        "site_id": "MLA",
        "query": ":iphone",
        "paging": {},
        "results": [{
                "id": "MLA901421848",
                "site_id": "MLA",
                "title": "iPhone 11 64 Gb Negro",
                "seller": {},
                "price": 159999,
                "prices": {},
                "sale_price": null,
                "currency_id": "ARS",
                "available_quantity": 1,
                "sold_quantity": 5,
                "buying_mode": "buy_it_now",
                "listing_type_id": "gold_special",
                "stop_time": "2040-12-12T04:00:00.000Z",
                "condition": "new",
                "permalink": "https://www.mercadolibre.com.ar/iphone-11-64-gb-negro/p/MLA15149561",
                "thumbnail": "http://http2.mlstatic.com/D_916062-MLA43654417337_102020-I.jpg",
                "accepts_mercadopago": true,
                "installments": {},
                "address": {
                    "state_id": "AR-S",
                    "state_name": "Santa Fe",
                    "city_id": null,
                    "city_name": "Rosario"
                },
                "shipping": {
                    "free_shipping": true,
                    "mode": "me2",
                    "tags": [],
                    "logistic_type": "cross_docking",
                    "store_pick_up": false
                },
                "seller_address": {},
                "attributes": [],
                "original_price": null,
                "category_id": "MLA1055",
                "official_store_id": null,
                "domain_id": "MLA-CELLPHONES",
                "catalog_product_id": "MLA15149561",
                "tags": [],
                "catalog_listing": true,
                "order_backend": 1
            },
            {
                "id": "MLA899063004",
                "site_id": "MLA",
                "title": "iPhone 7 32 Gb Negro Mate",
                "seller": {},
                "price": 67799,
                "prices": {},
                "sale_price": null,
                "currency_id": "ARS",
                "available_quantity": 1,
                "sold_quantity": 9,
                "buying_mode": "buy_it_now",
                "listing_type_id": "gold_special",
                "stop_time": "2040-11-22T04:00:00.000Z",
                "condition": "new",
                "permalink": "https://www.mercadolibre.com.ar/iphone-7-32-gb-negro-mate/p/MLA6240116",
                "thumbnail": "http://http2.mlstatic.com/D_942036-MLA31003118587_062019-I.jpg",
                "accepts_mercadopago": true,
                "installments": {},
                "address": {
                    "state_id": "AR-B",
                    "state_name": "Buenos Aires",
                    "city_id": null,
                    "city_name": "Martinez"
                },
                "shipping": {
                    "free_shipping": true,
                    "mode": "me2",
                    "tags": [],
                    "logistic_type": "xd_drop_off",
                    "store_pick_up": false
                },
                "seller_address": {},
                "attributes": [],
                "original_price": null,
                "category_id": "MLA1055",
                "official_store_id": null,
                "domain_id": "MLA-CELLPHONES",
                "catalog_product_id": "MLA6240116",
                "tags": [],
                "catalog_listing": true,
                "order_backend": 2
            },
            {
                "id": "MLA884965198",
                "site_id": "MLA",
                "title": "iPhone 11 Pro Max 64 Gb Gris Espacial",
                "seller": {},
                "price": 246000,
                "prices": {},
                "sale_price": null,
                "currency_id": "ARS",
                "available_quantity": 1,
                "sold_quantity": 0,
                "buying_mode": "buy_it_now",
                "listing_type_id": "gold_special",
                "stop_time": "2040-10-17T04:00:00.000Z",
                "condition": "new",
                "permalink": "https://www.mercadolibre.com.ar/iphone-11-pro-max-64-gb-gris-espacial/p/MLA15150973",
                "thumbnail": "http://http2.mlstatic.com/D_645254-MLA32646972200_102019-I.jpg",
                "accepts_mercadopago": true,
                "installments": {},
                "address": {
                    "state_id": "AR-C",
                    "state_name": "Capital Federal",
                    "city_id": "TUxBQkJFTDcyNTJa",
                    "city_name": "Belgrano"
                },
                "shipping": {
                    "free_shipping": true,
                    "mode": "me2",
                    "tags": [],
                    "logistic_type": "cross_docking",
                    "store_pick_up": false
                },
                "seller_address": {},
                "attributes": [],
                "original_price": null,
                "category_id": "MLA1055",
                "official_store_id": null,
                "domain_id": "MLA-CELLPHONES",
                "catalog_product_id": "MLA15150973",
                "tags": [],
                "catalog_listing": true,
                "order_backend": 3
            },
            {
                "id": "MLA901685706",
                "site_id": "MLA",
                "title": "iPhone SE (2nd Generation) 64 Gb Blanco",
                "seller": {},
                "price": 105000,
                "prices": {},
                "sale_price": null,
                "currency_id": "ARS",
                "available_quantity": 14,
                "sold_quantity": 6,
                "buying_mode": "buy_it_now",
                "listing_type_id": "gold_special",
                "stop_time": "2040-12-14T04:00:00.000Z",
                "condition": "new",
                "permalink": "https://www.mercadolibre.com.ar/iphone-se-2nd-generation-64-gb-blanco/p/MLA15591332",
                "thumbnail": "http://http2.mlstatic.com/D_732162-MLA42320762979_062020-I.jpg",
                "accepts_mercadopago": true,
                "installments": {},
                "address": {
                    "state_id": "AR-S",
                    "state_name": "Santa Fe",
                    "city_id": null,
                    "city_name": "Rosario"
                },
                "shipping": {
                    "free_shipping": true,
                    "mode": "me2",
                    "tags": [],
                    "logistic_type": "cross_docking",
                    "store_pick_up": false
                },
                "seller_address": {},
                "attributes": [],
                "original_price": null,
                "category_id": "MLA1055",
                "official_store_id": null,
                "domain_id": "MLA-CELLPHONES",
                "catalog_product_id": "MLA15591332",
                "tags": [],
                "catalog_listing": true,
                "order_backend": 4
            },
            {
                "id": "MLA901688571",
                "site_id": "MLA",
                "title": "iPhone 8 64 Gb Oro",
                "seller": {},
                "price": 105999.99,
                "prices": {},
                "sale_price": null,
                "currency_id": "ARS",
                "available_quantity": 1,
                "sold_quantity": 0,
                "buying_mode": "buy_it_now",
                "listing_type_id": "gold_special",
                "stop_time": "2040-12-14T04:00:00.000Z",
                "condition": "new",
                "permalink": "https://www.mercadolibre.com.ar/iphone-8-64-gb-oro/p/MLA8752430",
                "thumbnail": "http://http2.mlstatic.com/D_872444-MLA31003091311_062019-I.jpg",
                "accepts_mercadopago": true,
                "installments": {},
                "address": {
                    "state_id": "AR-B",
                    "state_name": "Buenos Aires",
                    "city_id": "TUxBQ0xBTmJjYzE4",
                    "city_name": "Lanús"
                },
                "shipping": {
                    "free_shipping": true,
                    "mode": "me2",
                    "tags": [],
                    "logistic_type": "xd_drop_off",
                    "store_pick_up": false
                },
                "seller_address": {},
                "attributes": [],
                "original_price": null,
                "category_id": "MLA1055",
                "official_store_id": null,
                "domain_id": "MLA-CELLPHONES",
                "catalog_product_id": "MLA8752430",
                "tags": [],
                "catalog_listing": true,
                "order_backend": 5
            },
            {
                "id": "MLA879620465",
                "site_id": "MLA",
                "title": "iPhone XR 64 Gb Azul",
                "seller": {},
                "price": 149990,
                "prices": {},
                "sale_price": null,
                "currency_id": "ARS",
                "available_quantity": 1,
                "sold_quantity": 0,
                "buying_mode": "buy_it_now",
                "listing_type_id": "gold_special",
                "stop_time": "2040-09-14T04:00:00.000Z",
                "condition": "new",
                "permalink": "https://www.mercadolibre.com.ar/iphone-xr-64-gb-azul/p/MLA12866682",
                "thumbnail": "http://http2.mlstatic.com/D_828594-MLA42514281518_072020-I.jpg",
                "accepts_mercadopago": true,
                "installments": {},
                "address": {
                    "state_id": "AR-C",
                    "state_name": "Capital Federal",
                    "city_id": null,
                    "city_name": "NUÑEZ"
                },
                "shipping": {
                    "free_shipping": true,
                    "mode": "me2",
                    "tags": [],
                    "logistic_type": "drop_off",
                    "store_pick_up": false
                },
                "seller_address": {},
                "attributes": [],
                "original_price": null,
                "category_id": "MLA1055",
                "official_store_id": null,
                "domain_id": "MLA-CELLPHONES",
                "catalog_product_id": "MLA12866682",
                "tags": [],
                "catalog_listing": true,
                "order_backend": 6
            }
        ],
        "secondary_results": [],
        "related_results": [],
        "sort": {},
        "available_sorts": [],
        "filters": [{
                "id": "category",
                "name": "Categories",
                "type": "text",
                "values": [{
                    "id": "MLA1055",
                    "name": "Celulares y Smartphones",
                    "path_from_root": [{
                            "id": "MLA1051",
                            "name": "Celulares y Teléfonos"
                        },
                        {
                            "id": "MLA1055",
                            "name": "Celulares y Smartphones"
                        }
                    ]
                }]
            },
            {},
            {},
            {}
        ],
        "available_filters": []
    }
};

const badRs = {
    status: 404,
    data: {}
};