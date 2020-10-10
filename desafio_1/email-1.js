var cart_products = [{
    'product_id': 'IN2350',
    'product_name': 'Teclado Mecânico Rozar K600',
    'product_price': '650.00',
    'product_cart_quantity': '1',
    'product_url': 'http://www.foo.com/p/IN2350',
    'product_category': 'peripherals',
    'product_stock_quantity': 30,
    'product_brand': 'Rozar'
}, {
    'product_id': 'IN4566',
    'product_name': 'Monitor Gamer LED GL UltraWide 25"',
    'product_price': '1399.99',
    'product_cart_quantity': '1',
    'product_url': 'http://www.foo.com/p/IN4566',
    'product_category': 'monitor',
    'product_stock_quantity': 5,
    'product_brand': 'GL'
}, {
    'product_id': 'ES7112',
    'product_name': 'Pacote de Post-it Fenix 50 unidades',
    'product_price': '14.95',
    'product_cart_quantity': '5',
    'product_url': 'http://www.foo.com/p/ES7112',
    'product_category': 'office',
    'product_stock_quantity': 22,
    'product_brand': 'Fenix'
}, {
    'product_id': 'BR8810',
    'product_name': 'Miniatura Yoshi Haras',
    'product_price': '6.50',
    'product_cart_quantity': '2',
    'product_url': 'http://www.foo.com/p/BR8810',
    'product_category': 'others',
    'product_stock_quantity': 0,
    'product_brand': 'Haras'
}, {
    'product_id': 'IN2350',
    'product_name': 'Teclado Mecânico Rozar K600',
    'product_cart_quantity': '650.00',
    'product_quantity': '1',
    'product_url': 'http://www.foo.com/p/IN2350',
    'product_category': 'peripherals',
    'product_stock_quantity': 30,
    'product_brand': 'Rozar'
}, {
    'product_id': 'ES7112',
    'product_name': 'Pacote de Post-it Fenix 50 unidades',
    'product_price': '14.95',
    'product_quantity': '5',
    'product_url': 'http://www.foo.com/p/ES7112',
    'product_category': 'office',
    'product_stock_quantity': 22,
    'product_brand': 'Fenix'
}];



/* 
-------------------
-Método Refatorado-
-------------------
*/

var cart_products2 =[];
const cart_products_sanitized = cart_products2;

// forEach para checar produtos sem stock
cart_products.forEach((val, index) => {
   if (val['product_stock_quantity'] == 0) {
        cart_products.splice(index, 0); // splice() => remover o item sem stock
   } else{
   cart_products2.push(val); // seta os itens que passaram no teste em uma nova variável
   };
});    

// Checando itens iguais
cart_products2.forEach(check)
function check(item, index){
    let j = index + 1; // +1 para que no for ele não dê um check no mesmo item
    let value1 = (item['product_id']);

    for (var i = j; i < cart_products2.length; i++) { // i iniciando por 1 e não 0
        let value2 = cart_products2[i]['product_id'];
        if(value1 == value2) { //condição => caso houver igualdade
            cart_products2.splice([i], 1); // remover [i] => index
        };
    };
};

/* 
----------------
- Método Antido-
----------------
*/
//     var filter1 = []; // vai receber os valores tratados sem 'product_stock_quantity' = 0,
//     var cart_products_sanitized = []; // obj final
//     var index = [];

//     for (var i = 0; i < cart_products.length; i++){
//         if(cart_products[i]['product_stock_quantity'] !== 0 ){
//             filter1.push(cart_products[i]); //Tratar os zeros no novo obj
//         } 
//     }

//     for (var i = 0; i < filter1.length; i++){
//         let item_id = filter1[i]['product_id'];
//         index[item_id] = 0; //value vira indice e seta value 0 em todos
//     }

//     for (var i = 0; i < filter1.length; i++){
//         let item_id = filter1[i]['product_id'];
//         index[item_id]++;  // contador para ver se repete values maior que um
        
//         if (index[item_id] == 1){// vai dar push apenas em values = 1
//             cart_products_sanitized.push(filter1[i]);//se repetir ele ignora o item 
//         }
//     } 
//console.log(cart_products_sanitized)


