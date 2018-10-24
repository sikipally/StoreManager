// Show and hide the form for adding new products

/* eslint-disable */
const showNewProductForm = () => {
  const e = document.getElementById('add-form');
  if (e.style.display === 'block') {
    e.style.display = 'none';
  } else {
    e.style.display = 'block';
    e.scrollIntoView();
  }
};

// Gets the values entered and add it to the products array
const addProduct = (e) => {
  e.preventDefault();
  // Get the form and the values of each input
  const form = document.forms.addProductForm;
  const name = form.elements.name.value;
  const category = form.elements.category.value;
  const price = form.elements.price.value;
  const quantity = form.elements.quantity.value;
  // Creates a product from the entered data and assign an id to it
  const product = {
    id: `234B0${products.length - 5 + 1}`,
    name,
    category,
    price,
    quantity,
  };
  // Add the product to the array and display all the products in the array
  products.push(product);
  showAdminProducts();
};

document.forms.addProductForm.addEventListener('submit', addProduct);
