var figlet = require("figlet");

figlet("hey! this side Prince Yadav", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});