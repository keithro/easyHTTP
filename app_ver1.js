// Instantiate easyHTTP
const http = new easyHTTP;

/* // GET Posts
http.get('https://jsonplaceholder.typicode.com/posts', function(err, response) {
  if(err) {
    console.log(err);
  } else {
    console.log(response);
  }
}); */

/* // GET Single Post (with id of 1)
http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, res) {
  if(err) {
    console.log(err);
  } else {
    console.log(res);
  }
}); */

// POST Request
const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
};

/* http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, res) {
  if(err) {
    console.log(err);
  } else {
    console.log(res);
  }
}); */

/* // Update Post (with id of 1)
http.put('https://jsonplaceholder.typicode.com/posts/1', data, function (err, res) {
  if(err) {
    console.log(err);
  } else {
    console.log(res);
  }
}); */

// Delete Post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function (err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});
