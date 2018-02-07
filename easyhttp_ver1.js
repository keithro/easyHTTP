function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  let self = this; // hack. Could also just use an arrow function
  this.http.onload = function() {
    if(self.http.status === 200) {
      // if response ok
      callback(null, self.http.responseText); // (error, response)
    } else {
      // if there is an error
      callback(`Error: ${self.http.status}`);
    }
  }

  this.http.send();
}

// Make an HTTP POST request
easyHTTP.prototype.post = function(url, data, callback) {
  this.http.open('POST', url, true); // true = asyncronously
  this.http.setRequestHeader('Content-type', 'application/json'); // data type

  let self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText); // (error, response)
  }

  this.http.send(JSON.stringify(data));
}

// Make an HTTP PUT request
easyHTTP.prototype.put = function(url, data, callback) {
  this.http.open('PUT', url, true); // true = asyncronously
  this.http.setRequestHeader('Content-type', 'application/json'); // data type

  let self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText); // (error, response)
  }

  this.http.send(JSON.stringify(data));
}

// Make an HTTP DELETE request
easyHTTP.prototype.delete = function(url, callback) {
  this.http.open('DELETE', url, true);

  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, 'Post Deleted');
    } else {
      callback(`Error: ${self.http.status}`);
    }
  }

  this.http.send();
}