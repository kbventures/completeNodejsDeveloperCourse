// Object property shorthand

const name = 'Andrew';
const userAge = 27;

const user = {
  name,
  userAge,
  location: 'Philadelphia',
};

console.log(user);

// Ojbect destructing

// let { name, userAge, location } = user;

// console.log(name, userAge, location);

const product = {
  label: 'Red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 6,
};

// let { label, price, stock, salePrice } = product;

// let {
//   label: aLabel,
//   price: aPrice,
//   stock: aStock,
//   salePrice: AsalePrice,
//   rating = 5,
// } = product;

// console.log(product);

// console.log(label, price, stock, salePrice);

// console.log(aLabel, aPrice, aStock, AsalePrice, rating);

const transaction = (type, { label, stock } = {}) => {
  console.log(type, label, stock);
};

transaction('order');
