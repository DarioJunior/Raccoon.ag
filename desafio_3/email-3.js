var cart_products = [{
    'product_id': 'IN2350',
    'product_name': 'Teclado Mecânico Rozar K600',
    'product_price': '650.00',
    'product_quantity': '1',
    'product_url': 'http://www.foo.com/p/IN2350',
    'product_category': 'peripherals',
    'product_brand': 'Rozar'
}, {
    'product_id': 'IN4566',
    'product_name': 'Monitor Gamer LED GL UltraWide 25"',
    'product_price': '1399.99',
    'product_quantity': '1',
    'product_url': 'http://www.foo.com/p/IN4566',
    'product_category': 'monitor',
    'product_brand': 'GL'
}, {
    'product_id': 'ES7112',
    'product_name': 'Pacote de Post-it Fenix 50 unidades',
    'product_price': '14.95',
    'product_quantity': '5',
    'product_url': 'http://www.foo.com/p/ES7112',
    'product_category': 'office',
    'product_brand': 'Fenix'
}, {
    'product_id': 'BR8810',
    'product_name': 'Miniatura Yoshi Haras',
    'product_price': '6.50',
    'product_quantity': '2',
    'product_url': 'http://www.foo.com/p/BR8810',
    'product_category': 'others',
    'product_brand': 'Haras'
}];
/////Tratando total ////////////////////////////////////////////////////////////////////////////
var total = 0;
cart_products.reduce(function totPrice(initVal, items){
    let price = Number(items['product_price']);
    price = parseFloat(price.toFixed(2));
    let quant = Number(items['product_quantity']);
     total +=  parseFloat(price * quant);
}, 0)
    total = total.toFixed(2);
/////Check Shipping///////////////////////////////////////////////////////////////////////////

var cartPricesInfo = [];
var cartInfo = checkShipping(total);
cartPricesInfo = cartInfo;

const totalPrice = cartPricesInfo['totalPrice'];
const freeShipping = cartPricesInfo['freeShipping'];

function checkShipping(total){
    if (total > 300){   
        
        return { totalPrice: total, freeShipping: true };
    }else{
        
        return { totalPrice: total, freeShipping: false };

    }
}
