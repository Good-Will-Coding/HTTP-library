const http = new EasyHTTP;

// Get users
// const users =
//     http.get('https://jsonplaceholder.typicode.com/posts?userId=1')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// User Data
const data = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'jdoe@gmail.com'
}

// Create user
//  const users =
//      http.post('https://jsonplaceholder.typicode.com/users', data)
//      .then(data => console.log(data))
//      .catch(err => console.log(err));

//  // Update Post
//  http.put('https://jsonplaceholder.typicode.com/users/2', data)
//  .then(data => console.log(data))
//  .catch(err => console.log(err));

// Delete user
//  http.delete('https://jsonplaceholder.typicode.com/users/2')
//       .then(data => console.log(data))
//       .catch(err => console.log(err));