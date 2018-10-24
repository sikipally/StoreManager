// Array of users that can log into the app
const users = [ // eslint-disable-line
  {
    // Admin
    id: 1,
    name: 'Ann Jennifer',
    username: 'Annelida',
    role: 'Admin',
    password: 'Apassword',
  },
  {
    id: 2,
    name: 'Godwin John',
    username: 'Godwinxx',
    role: 'Admin',
    password: 'password2',
  },
  // User
  {
    id: 3,
    name: 'Solly Andas',
    username: 'Sollymed',
    role: 'Attendant',
    password: 'password',
  },
  {
    id: 4,
    name: 'Howard Anders',
    username: 'AndersH',
    role: 'Attendant',
    password: 'password',
  },
  {
    id: 5,
    name: 'Anthon Martins',
    username: 'Martanton',
    role: 'Attendant',
    password: 'password',
  },
];

// Array of products to display
const products = [
  {
    id: '234B81',
    name: 'iPhone 6',
    category: 'Apple',
    quantity: 4,
    price: 100000,
  },
  {
    id: '234B82',
    name: 'iPhone 5',
    category: 'Apple',
    quantity: 3,
    price: 80000,
  },
  {
    id: '234B83',
    name: 'iPad',
    category: 'Apple',
    quantity: 6,
    price: 150000,
  },
  {
    id: '234B71',
    name: 'Nokia X',
    category: 'Nokia',
    quantity: 2,
    price: 70000,
  },
  {
    id: '234B72',
    name: 'Nokia Xl',
    category: 'Nokia',
    quantity: 4,
    price: 60000,
  },
  {
    id: '234B73',
    name: 'Nokia Note 3',
    category: 'Nokia',
    quantity: 3,
    price: 80000,
  },
  {
    id: '234B51',
    name: 'Xiaomi One',
    category: 'Xiaomi',
    quantity: 4,
    price: 70000,
  },
  {
    id: '234B52',
    name: 'Xiaomi Redmi',
    category: 'Xiaomi',
    quantity: 3,
    price: 75000,
  },
];


// Display all the products in the array
const showAdminProducts = () => { // eslint-disable-line
  const page = document.getElementById('all-products');
  let sn = 0;
  let productData = `<table>
  <tr>
      <th class="table-serial-num">S/N</th>
      <th>Product Name</th>
      <th>Product ID</th>
      <th>Quantity</th>
      <th>Category</th>
      <th>Unit Price (₦)</th>
  </tr>`;
  if (page) {
    products.map((product) => { // eslint-disable-line
      sn += 1;
      productData += `<tr>
      <td class="table-serial-num">${sn}</td>
      <td><a href="admin-specific-product.html">${product.name}</a></td>
      <td>${product.id}</td>
      <td>${product.quantity}</td>
      <td>${product.category}</td>
      <td>${product.price}</td>
  </tr>`;
    });
    productData += '</table>';
  }
  page.innerHTML = productData;
};

// Display all the products in the user array
const showUserProducts = () => { // eslint-disable-line
  const page = document.getElementById('all-products');
  let sn = 0;
  let productData = `<table>
  <tr>
      <th class="table-serial-num">S/N</th>
      <th>Product Name</th>
      <th>Product ID</th>
      <th>Quantity</th>
      <th>Category</th>
      <th>Unit Price (₦)</th>
  </tr>`;
  if (page) {
    products.map((product) => { // eslint-disable-line
      sn += 1;
      productData += `<tr>
      <td class="table-serial-num">${sn}</td>
      <td><a href="specific-product.html">${product.name}</a></td>
      <td>${product.id}</td>
      <td>${product.quantity}</td>
      <td>${product.category}</td>
      <td>${product.price}</td>
  </tr>`;
    });
    productData += '</table>';
  }
  page.innerHTML = productData;
};
