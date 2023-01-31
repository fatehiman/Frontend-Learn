const res = fetch("https://jsonplaceholder.typicode.com/comments");
res
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((response) => {
    console.log(response);
  });
