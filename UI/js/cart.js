const cart = [];
const showCart = () => {
  const page = document.getElementById('shopping-cart');
  let totalSales = 0;
  let productData = `<table>
    <tr>
      <th class="table-serial-num">S/N</th>
      <th>Product</th>
      <th>Category</th>
      <th>Quantity</th>
      <th>Product Id</th>
      <th>Unit Price</th>
      <th>Total (₦)</th>
      <th>Remove</th>
    </tr>`;
  cart.map((product, i) => { // eslint-disable-line
    const sn = i + 1;
    const total = product.price * product.quantity;
    totalSales += total;
    productData += `<tr>
    <td class="table-serial-num">${sn}</td>
    <td><a href="specific-product.html">${product.name}</a></td>
    <td>${product.category}</td>
    <td>${product.quantity}</td>
    <td>${product.id}</td>
    <td>${product.price}</td>
    <td>${total}</td>
    <td><button class="btn-delete" onClick="removeItem(${sn - 1})">x</button></td>
  </tr>`;
  });
  productData += `
    <tr>
      <td>Total</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>${totalSales}</td>
      <td><button class="btn-checkout" onClick="checkout(${totalSales})">Checkout</button></td>
    </tr>
  </table>`;
  page.innerHTML = productData;
};

// Gets the values entered and add it to the products array
const addToCart = (e) => {
  e.preventDefault();
  // Get the form and the value of the selected product
  const form = document.forms.cartForm;
  const name = form.elements.name.value;

  // Gets the selected product from the products array
  const product = products.find(item => item.name === name); // eslint-disable-line
  // Check if the product is already in the cart
  if (cart.includes(product)) {
    // If already in the cart, get the index of the product and
    // use it to increase the quantity of that product in the cart
    const i = cart.indexOf(product);
    cart[i].quantity += 1;
    return showCart();
  }
  // If the product is not yet in the cart, add it.
  product.quantity = 1;
  cart.push(product);
  return showCart();
};

document.forms.cartForm.addEventListener('submit', addToCart);

// Remove a product from cart
const removeItem = (index) => { // eslint-disable-line
  const product = cart[index];
  // If the product is just one in the cart, remove it
  if (product.quantity === 1) {
    cart.splice(index, 1);
    return showCart();
  }
  // Else reduce the quantity by one
  product.quantity -= 1;
  cart[index] = product;
  return showCart();
};

// Create a sales record
const checkout = (totalSales) => { // eslint-disable-line
  if (totalSales === 0) {
    return alert('Please add some product(s) to cart first');
  }
  alert(`Your total sales is ₦${totalSales}`);
};
