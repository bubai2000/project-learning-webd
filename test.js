import $ from 'jquery';
$.get(
  "https://62e27b1ce8ad6b66d85c7012.mockapi.io/test/testuser",
  function (data) {
    console.log(data);
  }
);