console.log("Data fetching...");

//.then exectues in case of no errors

const req = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Preparing the data...");

    const product = {
      name: "TV",
      price: 2000,
    };

    resolve(product);
  }, 2000);
});

req
  .then((product) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        product.status = "order";
        resolve(product);
        // reject();
      }, 2000);
    })
      .then((data) => {
        data.modify = true;
        return data;
      })
      .then((data) => {
        console.log(data);
      });
  })
  .catch(() => {
    console.error("Error has occured");
  })
  .finally(() => {
    console.log("Finally");
  });

//-----------------------------------------------------------------------------

const test = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), time);
  });
};

// test(1000).then(() => console.log("1000 ms"));
// test(2000).then(() => console.log("2000 ms"));

// Executes right after all promises are executed
Promise.all([test(1000), test(2000)]).then(() => {
  console.log("All");
}); // All in 2 seconds

// Executes right after the first promise
Promise.race([test(1000), test(2000)]).then(() => {
  console.log("All in 1 sec");
}); // All in 1 second
