//A demo of promise(example use case when querying data from backend, check if data is fetched after a particular time, otherwise throw error)
let a = 11;
function evenwarn(a) {
  let error = false;
  if (a % 2 == 0) {
    error = true;
  }
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      //Checks after the given timeout if promise is fulfilled or not using the error variable(We can use other methods to verify)
      if (!error) {
        console.log(a + " is not an even number!");
        resolve();
      } else {
        console.log(a + " is an even number!");
        reject("Your entered number is even!"); //Put error messege inside curly braces
      }
    }, 2000);
  });
}

evenwarn(a)
  .then(function () {
    console.log("Thanks for entering an odd number!");
  })
  .catch(function (error) {
    console.log("Marks deducted! Reason: " + error);
  });
