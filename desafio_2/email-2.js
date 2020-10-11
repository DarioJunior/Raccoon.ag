var products_list = [
  {
    "id": "35",
    "name": "Miniatura Homem de Ferro",
    "price": "R$ 50.00"
  },
  {
    "id": "30",
    "name": "Miniatura Magneto",
    "price": "R$ 57.00"
  },{
    "id": "25",
    "name": "Miniatura Super Homem",
    "price": "R$ 37.00"
  },{
    "id": "71",
    "name": "Miniatura Bernard",
    "price": "R$ 71.00"
  },{
    "id": "56",
    "name": "Miniatura Batman",
    "price": "R$ 23.00"
  },
  {
    "id": "56",
    "name": "Miniatura Darth Vader",
    "price": "R$ 89.00"
  }];

const new_products_list = products_list.map(
  ({id, name, price}) => ({id, name, item_price: price})
  );

  new_products_list.forEach((element) => {
    let price = element['item_price'];
    let nPrice = Number(price.replace(/['R$ ']+/g,''));
    nPrice = parseFloat(nPrice.toFixed(2));
    price = nPrice
    element.item_price = price;
});

// for (i = 0; i < new_products_list.length; i++){
//   let price = new_products_list[i]['item_price'];
//   let nPrice = Number(price.replace(/['R$ ']+/g,''));
//   nPrice = parseFloat(nPrice.toFixed(2));
//   new_products_list[i]['item_price'] = nPrice;
//   } 
