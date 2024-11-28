let myPromise = new Promise((resolve, reject) => {
    let success = true;
  
    if (success) {
      resolve("Data loaded successfully!");
    } else {
      reject("Error loading data.");
    }
  });
  
  myPromise
    .then((message) => {
      console.log(message); // Will print "Data loaded successfully!"
    })
    .catch((error) => {
      console.log(error); // Will print "Error loading data."
    })
    .finally((msg) =>{
        console.log("The End");// Will get printed either the above code will run or not
    })