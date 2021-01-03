const { getItemCategories, getItemDetails, getItemDescription } = require('../item-details');

test('get the item details properly', () => {
    const itemDetails = {
        "id": "MLA901421848",
        "title": "iPhone 11 64 Gb Negro",
        "price": {
            "currency": "ARS",
            "amount": "159.999"
        },
        "free_shipping": true,
        "picture": "http://http2.mlstatic.com/D_916062-MLA43654417337_102020-O.jpg",
        "condition": "new",
        "sold_quantity": 5,
        "category": "MLA1055",
        "description": ""
    };

    expect(getItemDetails(itemDetailsRs)).toStrictEqual(itemDetails);
})

test('get the item details empty when the result status is not 200', () => {
    const itemDetails = {};

    expect(getItemDetails(badRs)).toStrictEqual(itemDetails);
})

test('get the item details empty when there is no result', () => {
    const itemDetails = {};

    expect(getItemDetails(emptyItemDetailsRs)).toStrictEqual(itemDetails);
})


test('get the description of the item properly', () => {
    const description = 'Fotos amplias y perfectas de día y de noche Su cámara ultra gran angular abarca un campo visual hasta cuatro veces más grande para que nada ni nadie se quede afuera de la toma. Y con el modo Noche la poca luz no es problema. Ya sea de fiesta con amigos o en un cumpleaños familiar, guardá los mejores momentos sin necesidad de usar flash. ¡La función se activa automáticamente! Retratos más reales El modo HDR Inteligente de última generación reconoce a las personas de la imagen, mejora la iluminación del rostro y da un aspecto natural a los tonos de piel. Pero eso no es todo: brinda más detalle a las sombras y conserva la calidad de imagen del fondo. ¿Qué más se puede pedir de una foto? Grabá y editá videos a nivel profesional Todas las cámaras del iPhone 11 graban videos en 4K con una nitidez increíble. Su cámara ultra gran angular permite capturar paisajes imperdibles y escenas en movimiento, como a un amigo andando en bicicleta en el parque. ¿Un recital de música? Hacé zoom en la imagen y el sonido también se acercará. Un iPhone que te ofrece todo La pantalla LCD Liquid Retina hace que todo se vea más real y su tecnología True Tone ajusta el balance de blancos a la luz del entorno de manera automática. El sistema de autentificación Face ID reconoce tu rostro para brindarte mayor seguridad que la tecnología Touch ID. Como si esto fuera poco, con su chip A13 Bionic y la batería de carga rápida, navegá a máxima velocidad y sin interrupciones.';

    expect(getItemDescription(descriptionRs)).toBe(description);
})

test('get the description empty when the there is no description in the rs', () => {
    const description = '';
    expect(getItemDescription(badRs)).toBe(description);
})

test('get the categories of the item properly', () => {
    const categories = ["Celulares y Teléfonos", "Celulares y Smartphones"];
    expect(getItemCategories(categoryRs)).toStrictEqual(categories);
})

test('get the categories empty when the result status is not 200', () => {
    const categories = [];
    expect(getItemCategories(badRs)).toStrictEqual(categories);
})


const itemDetailsRs = {
    status: 200,
    data: {
        "id": "MLA901421848",
        "site_id": "MLA",
        "title": "iPhone 11 64 Gb Negro",
        "subtitle": null,
        "seller_id": 208137579,
        "category_id": "MLA1055",
        "official_store_id": null,
        "price": 159999,
        "base_price": 159999,
        "original_price": null,
        "currency_id": "ARS",
        "initial_quantity": 6,
        "available_quantity": 1,
        "sold_quantity": 5,
        "sale_terms": [],
        "buying_mode": "buy_it_now",
        "listing_type_id": "gold_special",
        "start_time": "2020-12-17T14:55:52.000Z",
        "stop_time": "2040-12-12T04:00:00.000Z",
        "condition": "new",
        "permalink": "https://articulo.mercadolibre.com.ar/MLA-901421848-iphone-11-64-gb-negro-_JM",
        "thumbnail_id": "916062-MLA43654417337_102020",
        "thumbnail": "http://http2.mlstatic.com/D_916062-MLA43654417337_102020-I.jpg",
        "secure_thumbnail": "https://http2.mlstatic.com/D_916062-MLA43654417337_102020-I.jpg",
        "pictures": [{
            "id": "916062-MLA43654417337_102020",
            "url": "http://http2.mlstatic.com/D_916062-MLA43654417337_102020-O.jpg",
            "secure_url": "https://http2.mlstatic.com/D_916062-MLA43654417337_102020-O.jpg",
            "size": "252x500",
            "max_size": "606x1200",
            "quality": ""
        }, ],
        "video_id": null,
        "descriptions": [],
        "accepts_mercadopago": true,
        "non_mercado_pago_payment_methods": [],
        "shipping": {
            "mode": "me2",
            "free_methods": [],
            "tags": [],
            "dimensions": null,
            "local_pick_up": false,
            "free_shipping": true,
            "logistic_type": "cross_docking",
            "store_pick_up": false
        },
        "international_delivery_mode": "none",
        "seller_address": {},
        "seller_contact": null,
        "location": {},
        "coverage_areas": [],
        "attributes": [],
        "warnings": [],
        "listing_source": "",
        "variations": [],
        "status": "active",
        "sub_status": [],
        "tags": [],
        "warranty": "Garantía de fábrica: 1 años",
        "catalog_product_id": "MLA15149561",
        "domain_id": "MLA-CELLPHONES",
        "parent_item_id": null,
        "differential_pricing": null,
        "deal_ids": [],
        "automatic_relist": false,
        "date_created": "2020-12-17T14:55:52.000Z",
        "last_updated": "2021-01-03T02:03:28.585Z",
        "health": null,
        "catalog_listing": true
    }
}
const badRs = {
    status: 404
}
const emptyItemDetailsRs = {
    status: 200,
}
const descriptionRs = {
    status: 200,
    data: {
        "text": "",
        "plain_text": "Fotos amplias y perfectas de día y de noche Su cámara ultra gran angular abarca un campo visual hasta cuatro veces más grande para que nada ni nadie se quede afuera de la toma. Y con el modo Noche la poca luz no es problema. Ya sea de fiesta con amigos o en un cumpleaños familiar, guardá los mejores momentos sin necesidad de usar flash. ¡La función se activa automáticamente! Retratos más reales El modo HDR Inteligente de última generación reconoce a las personas de la imagen, mejora la iluminación del rostro y da un aspecto natural a los tonos de piel. Pero eso no es todo: brinda más detalle a las sombras y conserva la calidad de imagen del fondo. ¿Qué más se puede pedir de una foto? Grabá y editá videos a nivel profesional Todas las cámaras del iPhone 11 graban videos en 4K con una nitidez increíble. Su cámara ultra gran angular permite capturar paisajes imperdibles y escenas en movimiento, como a un amigo andando en bicicleta en el parque. ¿Un recital de música? Hacé zoom en la imagen y el sonido también se acercará. Un iPhone que te ofrece todo La pantalla LCD Liquid Retina hace que todo se vea más real y su tecnología True Tone ajusta el balance de blancos a la luz del entorno de manera automática. El sistema de autentificación Face ID reconoce tu rostro para brindarte mayor seguridad que la tecnología Touch ID. Como si esto fuera poco, con su chip A13 Bionic y la batería de carga rápida, navegá a máxima velocidad y sin interrupciones.",
        "last_updated": "2020-12-17T14:55:52.000Z",
        "date_created": "2020-12-17T14:55:52.000Z",
        "snapshot": {}
    }
}
const categoryRs = {
    status: 200,
    data: {
        "id": "MLA1055",
        "name": "Celulares y Smartphones",
        "picture": "http://resources.mlstatic.com/category/images/fdca1620-3b63-4af2-bc0b-aeed17048d5d.png",
        "permalink": null,
        "total_items_in_this_category": 66758,
        "path_from_root": [{
                "id": "MLA1051",
                "name": "Celulares y Teléfonos"
            },
            {
                "id": "MLA1055",
                "name": "Celulares y Smartphones"
            }
        ],
        "children_categories": [],
        "attribute_types": "variations",
        "settings": {},
        "meta_categ_id": null,
        "attributable": false,
        "date_created": "2018-04-25T08:12:56.000Z"
    }
}