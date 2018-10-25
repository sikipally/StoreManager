// shows the form for adding new users
const showAddUserForm = () => { // eslint-disable-line
  const e = document.getElementById('add-user');
  if (e.style.display === 'block') {
    e.style.display = 'none';
  } else {
    e.style.display = 'block';
    e.scrollIntoView();
  }
};

// Display all the users in the array
const page = document.getElementById('all-users');
const showUsers = () => {
  let userData = '';
  console.log(page);
  if (page) {
    users.map((user) => { // eslint-disable-line
      userData += `
      <div class="small-card">
            <a href="admin-user-profile.html">
              ${user.name}
            </a>
          <span class="user-role" >${user.role}</span>
      </div>`;
    });
  }
  page.innerHTML = userData;
};

// Gets the values entered and add it to the users array
const addUser = (e) => {
  e.preventDefault();
  // Get the form and the values of each input
  const form = document.forms.addUserForm;
  const name = form.elements.name.value;
  const role = form.elements.role.value;
  const username = form.elements.username.value;
  const password = form.elements.password.value;
  // Creates a user from the entered data and assigns an id to it
  const user = {
    id: `000${users.length + 1}`, // eslint-disable-line
    name,
    role,
    username,
    password,
  };
  // Add the user to the array and display all the users in the array
  users.push(user); // eslint-disable-line
  showUsers();
};

document.forms.addUserForm.addEventListener('submit', addUser);
